import React, { FC } from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../../types";

type ProfilePropsType = {
    state: ProfilePageType;
    addPost: () => void;
    changePostText: ((postText: string) => void);
}

const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <div className={s.image}>
                <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" alt="content__logo" />
            </div>
            <ProfileInfo />
            <MyPosts state={props.state} addPost={props.addPost} changePostText={props.changePostText} />
        </div>  
    )
}

export default Profile;
