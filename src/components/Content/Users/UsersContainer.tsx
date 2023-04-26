import { AppStateType } from "../../../Redux/redux-store";
import { connect } from "react-redux";
import Users from "./Users";
import { UserType, UsersPageType } from "../../../types";
import { Dispatch } from "redux";
import { followAC, setUsersAC, unfollowAC } from "../../../Redux/redusers/usersReducer";

type MapStatePropsType = {
    usersPage: UsersPageType;
}
type MapDispatchPropsType = {
    follow(id: number): void;
    unfollow(id: number): void;
    setUsers(users: UserType[]): void;
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow(id: number) {
            dispatch(followAC(id))
        },
        unfollow(id: number) {
            dispatch(unfollowAC(id))
        },
        setUsers(users: UserType[]) {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
