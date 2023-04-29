import React, { FC, useState } from "react";
import s from './User.module.css';
import { UserType } from "../../../../types";
import SuperButton from "../../../SuperButton/SuperButton";
import defaultUserPhoto from "./../../../../assets/images/defaultUserSmallAvatar.png"
import { NavLink } from "react-router-dom";

type UserPropsType = {
    userInfo: UserType;
    isFetching: boolean;
    followUser(userId: number, setLocalState: React.Dispatch<React.SetStateAction<boolean>>): void;
    unfollowUser(userId: number, setLocalState: React.Dispatch<React.SetStateAction<boolean>>): void;
}

const User: FC<UserPropsType> = ({userInfo, ...props}) => {
    const [isFetching, setFetching] = useState(false);
    // const [followMessage, setFollowMessage] = useState(''); 
    // const followErrorMessage = <div className={s.followMessage}>{followMessage}</div>
    // const hideFollowMessage = () => {
    //     setTimeout(() => {
    //        setFollowMessage('');
    //     }, 2000);
    // }

    const follow = () => {
        props.followUser(userInfo.id, setFetching)
    }
    const unfollow = () => {
        props.unfollowUser(userInfo.id, setFetching);
    }

    const userPhoto = userInfo.photos.small ? userInfo.photos.small : defaultUserPhoto;
    const btnText = userInfo.followed ? 'unfollow' : 'follow';
    const onClickCallback = userInfo.followed ? unfollow : follow;

    return (
        <div className={s.user} id={'user-' + userInfo.id.toString()}>
            <div className={s.userAvatar}>
                <NavLink to={`/profile/${userInfo.id}`}>
                    <img src={userPhoto} alt="" />
                </NavLink>
            </div>
            <div className={s.followBtn}>
                <SuperButton children={btnText}
                             disabled={isFetching}
                             onClick={onClickCallback}
                />
            </div>
            {/* {followErrorMessage} */}
            <div className={s.userInfo}>
                <div>{userInfo.name}</div>
                <div>{userInfo.status}</div>
                <div>{`UrlName: ${userInfo.uniqueUrlName}`}</div>
            </div>
        </div>
    )
}

export default User;
