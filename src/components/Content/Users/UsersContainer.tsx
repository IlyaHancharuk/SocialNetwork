import { AppStateType } from "../../../Redux/redux-store";
import { connect } from "react-redux";
import Users from "./Users";
import { UsersPageType } from "../../../types";
import { Dispatch } from "redux";
import { followAC, unfollowAC } from "../../../Redux/redusers/usersReducer";

type MapStatePropsType = {
    usersPage: UsersPageType;
}
type MapDispatchPropsType = {
    follow(id: number): void;
    unfollow(id: number): void;
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
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
