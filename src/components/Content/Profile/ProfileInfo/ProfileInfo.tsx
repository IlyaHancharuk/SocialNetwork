import React, { FC } from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>AVATAR</div>
            <div>Description</div>
        </div>
    )
}

export default ProfileInfo;
