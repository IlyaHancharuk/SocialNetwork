import React, { FC } from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ReduxStoreType } from "../../../types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: ReduxStoreType;
}

const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <div className={s.image}>
                <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" alt="content__logo" />
            </div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>  
    )
}

export default Profile;
