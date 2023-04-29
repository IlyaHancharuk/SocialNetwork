import React, { FC } from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { UserProfileType } from "../../../types";
import { Navigate } from "react-router-dom";

type ProfilePropsType = {
    userProfile: UserProfileType | null;
    isAuth: boolean;
}

const Profile: FC<ProfilePropsType> = ({ userProfile, isAuth }) => {
    if(!isAuth) {
        return <Navigate to={"/login"} />
    }

    return (
        <div>
            <div className={s.image}>
                <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" alt="content__logo" />
            </div>
            <ProfileInfo userProfile={userProfile}/>
            <MyPostsContainer />
        </div>  
    )
}

export default Profile;
