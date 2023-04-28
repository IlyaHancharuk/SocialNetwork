import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import { UserProfileType } from "../../../types";
import { connect } from "react-redux";
import { AppStateType } from "../../../Redux/redux-store";
import { setUserProfileAC } from "../../../Redux/redusers/profileReduser";

let userId = 2;

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
            .then(res => {
                const profile: UserProfileType = res.data;
                this.props.setUserProfile(profile);
            })
    }

    render(): React.ReactNode {
        return (
            <Profile userProfile={this.props.userProfile}/>
        )
    }
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
