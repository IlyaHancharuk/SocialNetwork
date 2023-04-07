import React, { FC } from "react";
import s from './Friends.module.css';
import { FriendsDataType } from "../../../types";
import Friend from "./Friend/Friend";

type FriendsPropsType = {
    friendsData: FriendsDataType[];
}

const Friends: FC<FriendsPropsType> = (props) => {

    const friends = props.friendsData.map((f) => {
        return (
            <Friend id={f.id} name={f.name} avatar={f.avatar} />
        )
    })

    return (
        <div className={s.friends}>
            <h3 className={s.title}>Friends</h3>
            <div className={s.items}>
                {friends}
            </div>
        </div>
    )
}

export default Friends;
