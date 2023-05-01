import React, { FC } from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfilePropsType } from "./ProfileContainer";

const Profile: FC<ProfilePropsType> = ({ userProfile, ...props }) => {

    return (
        <div>
            <div className={s.image}>
                <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" alt="content__logo" />
            </div>
            <ProfileInfo status={props.userStatus} updateUserStatus={props.updateUserStatus} userProfile={userProfile}/>
            <MyPostsContainer />
        </div>  
    )
}

export default Profile;
