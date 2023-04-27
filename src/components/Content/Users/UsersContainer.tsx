import React from "react";
import axios from "axios";
import { AppStateType } from "../../../Redux/redux-store";
import { connect } from "react-redux";
import { UserType, UsersPageType } from "../../../types";
import { Dispatch } from "redux";
import { followAC, setCurrentPageAC, setUsersAC, sliceFirstTenUsersAC, unfollowAC } from "../../../Redux/redusers/usersReducer";
import Users from "./Users";

type MapStatePropsType = {
    usersPage: UsersPageType;
    pageSize: number;
    currPage: number;
    totalCount: number;
}
type MapDispatchPropsType = {
    follow(id: number): void;
    unfollow(id: number): void;
    setUsers(users: UserType[], totalCount: number): void;
    setCurrentPage(page: number): void;
    sliceFirstTenUsers(): void;
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then((response) => {
                    const users: UserType[] = response.data.items;
                    const totalCount: number = Number(response.data.totalCount);
                    this.props.setUsers(users, totalCount);
                });
    }

    componentDidMount(): void {
        if (this.props.usersPage.usersData.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currPage}&count=${this.props.pageSize}`)
                .then((response) => {
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
            <Users usersPage={this.props.usersPage}
                   pageSize={this.props.pageSize}
                   currPage={this.props.currPage}
                   totalCount={this.props.totalCount}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setUsers={this.props.setUsers}
                   setCurrentPage={this.props.setCurrentPage}
                   sliceFirstTenUsers={this.props.sliceFirstTenUsers}
                   onPageChanged={this.onPageChanged} />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        currPage: state.usersPage.currPage,
        totalCount: state.usersPage.totalCount
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow(id) {
            dispatch(followAC(id));
        },
        unfollow(id) {
            dispatch(unfollowAC(id));
        },
        setUsers(users, totalCount) {
            dispatch(setUsersAC(users, totalCount));
        },
        setCurrentPage(page) {
            dispatch(setCurrentPageAC(page));
        },
        sliceFirstTenUsers() {
            dispatch(sliceFirstTenUsersAC());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
