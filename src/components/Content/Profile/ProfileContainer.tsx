import React, { FC, useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { UserProfileType } from "../../../types";
import { AppStateType } from "../../../Redux/redux-store";
import { setUserProfileAC } from "../../../Redux/redusers/profileReduser";


const ProfileContainer: FC<ProfilePropsType> = (props) => {
    const { userId } = useParams();
    console.log('UserProfile loaded')

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
            .then(res => {
                const profile: UserProfileType = res.data;
                props.setUserProfile(profile);
            })
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
    setUserProfile(profile: UserProfileType): void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

export default connect(mapStateToProps, { setUserProfile: setUserProfileAC })(ProfileContainer) ;
