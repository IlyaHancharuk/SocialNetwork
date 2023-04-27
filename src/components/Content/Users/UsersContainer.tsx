import React from "react";
import axios from "axios";
import { AppStateType } from "../../../Redux/redux-store";
import { connect } from "react-redux";
import { UserType, UsersPageType } from "../../../types";
import { followAC, setCurrentPageAC, setFetchingAC, setUsersAC, sliceFirstTenUsersAC, unfollowAC } from "../../../Redux/redusers/usersReducer";
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
    follow(id: number): void;
    unfollow(id: number): void;
    setUsers(users: UserType[], totalCount: number): void;
    setCurrentPage(page: number): void;
    sliceFirstTenUsers(): void;
    setFetching(isFetching: boolean): void;
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.setFetching(false);
                    const users: UserType[] = response.data.items;
                    const totalCount: number = Number(response.data.totalCount);
                    this.props.setUsers(users, totalCount);
                });
    }

    componentDidMount(): void {
        if (this.props.usersPage.users.length === 0) {
            this.props.setFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currPage}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.setFetching(false);
                    const users: UserType[] = response.data.items;
                    const totalCount: number = Number(response.data.totalCount);
                    this.props.setUsers(users, totalCount);
                });
        }
    }
    componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('component did updated')
    }
    componentWillUnmount(): void {
        console.log('component will unmount')
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
                            sliceFirstTenUsers={this.props.sliceFirstTenUsers}
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
    sliceFirstTenUsers: sliceFirstTenUsersAC,
    setFetching: setFetchingAC,
})(UsersContainer);
