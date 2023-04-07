import React, { FC } from "react";
import s from './Friend.module.css';
import { FriendsDataType } from "../../../../types";

const Friend: FC<FriendsDataType> = (props) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default Friend;
