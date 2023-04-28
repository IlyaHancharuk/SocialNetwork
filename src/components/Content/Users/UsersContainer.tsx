import React from "react";
import { AppStateType } from "../../../Redux/redux-store";
import { connect } from "react-redux";
import { UserType, UsersPageType } from "../../../types";
import { followAC, setCurrentPageAC, setFetchingAC, setUsersAC, unfollowAC } from "../../../Redux/redusers/usersReducer";
import Users from "./Users";
import Preloader from "../../Preloader/Preloader";
import { getUsers } from "../../../APITools/APITools";

type MapStatePropsType = {
    usersPage: UsersPageType;
    pageSize: number;
    currPage: number;
    totalCount: number;
    isFetching: boolean;
}
type MapDispatchPropsType = {
    follow(id: number): void;
    unfollow(id: number): void;
    setUsers(users: UserType[], totalCount: number): void;
    setCurrentPage(page: number): void;
    setFetching(isFetching: boolean): void;
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true);
        getUsers(pageNumber, this.props.pageSize)
            .then(({ users, totalCount }) => {
                this.props.setFetching(false);
                this.props.setUsers(users, totalCount);
            });
    }

    componentDidMount(): void {
        if (this.props.usersPage.users.length === 0) {
            this.props.setFetching(true);
            getUsers(this.props.currPage, this.props.pageSize)
                .then(({ users, totalCount }) => {
                    this.props.setFetching(false);
                    this.props.setUsers(users, totalCount);
                });
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users usersPage={this.props.usersPage}
                            pageSize={this.props.pageSize}
                            currPage={this.props.currPage}
                            totalCount={this.props.totalCount}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            setUsers={this.props.setUsers}
                            setCurrentPage={this.props.setCurrentPage}
                            onPageChanged={this.onPageChanged} 
                            isFetching={this.props.isFetching}
                            setFetching={this.props.setFetching}
                />}
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        currPage: state.usersPage.currPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setFetching: setFetchingAC,
})(UsersContainer);
