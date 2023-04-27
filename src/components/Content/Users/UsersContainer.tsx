import { AppStateType } from "../../../Redux/redux-store";
import { connect } from "react-redux";
import { UserType, UsersPageType } from "../../../types";
import { Dispatch } from "redux";
import { followAC, setCurrentPageAC, setUsersAC, sliceFirstTenUsersAC, unfollowAC } from "../../../Redux/redusers/usersReducer";
import UsersClC from "./UsersClassComp";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClC)

export default UsersContainer;
