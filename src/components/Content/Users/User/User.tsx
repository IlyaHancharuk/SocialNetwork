import React, { FC } from "react";
import s from './User.module.css';
import { UserType } from "../../../../types";
import SuperButton from "../../../SuperButton/SuperButton";

type UserPropsType = {
    userInfo: UserType;
    follow(id: number): void;
    unfollow(id: number): void;
}

const User: FC<UserPropsType> = (props) => {
    const follow = () => {
        props.follow(props.userInfo.id);
    }
    const unfollow = () => {
        props.unfollow(props.userInfo.id);
    }

    const btnText = props.userInfo.followed ? 'unfollow' : 'follow';
    const onClickCallback = props.userInfo.followed ? unfollow : follow;

    return (
        <div className={s.user} id={'user-' + props.userInfo.id.toString()}>
            <div className={s.userAvatar}>
                <img src="" alt="" />
            </div>
            <div className={s.followBtn}>
                <SuperButton children={btnText} onClick={onClickCallback}/>
            </div>
            <div className={s.userInfo}>
                <div>{props.userInfo.fullName}</div>
                <div>{props.userInfo.status}</div>
                <div>{props.userInfo.location.city}</div>
                <div>{props.userInfo.location.country}</div>
            </div>
        </div>
    )
}

export default User;
