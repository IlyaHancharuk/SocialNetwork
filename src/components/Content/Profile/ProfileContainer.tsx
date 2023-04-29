import React, { FC, useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { UserProfileType } from "../../../types";
import { AppStateType } from "../../../Redux/redux-store";
import { getProfileThunkCreator } from "../../../Redux/redusers/profileReduser";


const ProfileContainer: FC<ProfilePropsType> = (props) => {
    const { userId } = useParams();
    const id = userId ? +userId : 2;
    console.log('UserProfile loaded')

    useEffect(() => {
       props.getProfile(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    return (
        <Profile userProfile={props.userProfile} />
    )
}


type MapStatePropsType = {
    userProfile: UserProfileType | null
}
type MapDispatchPropsType = {
    getProfile(userId: number): void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

export default connect(mapStateToProps, { getProfile: getProfileThunkCreator })(ProfileContainer) ;
