import React from "react";
import { AppStateType } from "../../../Redux/redux-store";
import { connect } from "react-redux";
import { UsersPageType } from "../../../types";
import { followUserThunkCreator, getUsersThunkCreator, setCurrentPageAC, unfollowUserThunkCreator } from "../../../Redux/redusers/usersReducer";
import Users from "./Users";
import Preloader from "../../Preloader/Preloader";

type MapStatePropsType = {
    usersPage: UsersPageType;
    pageSize: number;
    currPage: number;
    totalCount: number;
    isFetching: boolean;
}
type MapDispatchPropsType = {
    setCurrentPage(page: number): void;
    getUsers(currentPage: number, pageSize: number): void;
    followUser(userId: number, setLocalState: React.Dispatch<React.SetStateAction<boolean>>): void;
    unfollowUser(userId: number, setLocalState: React.Dispatch<React.SetStateAction<boolean>>): void;
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    componentDidMount(): void {
        if (this.props.usersPage.users.length === 0) {
            this.props.getUsers(this.props.currPage, this.props.pageSize);
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users {...this.props} onPageChanged={this.onPageChanged}
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
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersThunkCreator,
    followUser: followUserThunkCreator,
    unfollowUser: unfollowUserThunkCreator
})(UsersContainer);
