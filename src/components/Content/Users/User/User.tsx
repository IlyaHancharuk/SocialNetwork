import React, { FC } from "react";
import s from './User.module.css';
import { UserType } from "../../../../types";
import SuperButton from "../../../SuperButton/SuperButton";

type UserPropsType = {
    userInfo: UserType;
}

const User: FC<UserPropsType> = (props) => {
    return (
        <div className={s.user} id={'user-' + props.userInfo.id.toString()}>
            <div className={s.userAvatar}>
                <img src="" alt="" />
            </div>
            <div className={s.followBtn}>
                <SuperButton children={'Follow'}/>
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
