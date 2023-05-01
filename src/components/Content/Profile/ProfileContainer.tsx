import React, { ComponentType, FC, useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { UserProfileType } from "../../../types";
import { AppStateType } from "../../../Redux/redux-store";
import { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from "../../../Redux/redusers/profileReduser";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

type MapStatePropsType = {
    userProfile: UserProfileType | null;
    userStatus: string;
}
type MapDispatchPropsType = {
    getUserProfile(userId: number): void
    getUserStatus(userId: number): void
    updateUserStatus(status: string): void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.status
    }
}

const ProfileContainer: FC<ProfilePropsType> = (props) => {
    const { userId } = useParams();
    const id = userId ? +userId : 2;
    console.log('UserProfile loaded')

    useEffect(() => {
       props.getUserProfile(id);
       props.getUserStatus(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    return (
        <Profile userProfile={props.userProfile}
                 userStatus={props.userStatus}
                 getUserProfile={props.getUserProfile}
                 getUserStatus={props.getUserStatus}
                 updateUserStatus={props.updateUserStatus} />
    )
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileThunkCreator,
        getUserStatus: getUserStatusThunkCreator,
        updateUserStatus: updateUserStatusThunkCreator
    }),
    withAuthRedirect
)(ProfileContainer)
