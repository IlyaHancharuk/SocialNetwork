import React from "react";
import s from './Friends.module.css';

const Friends = () => {
    return (
        <div className={s.friends}>
            <h3 className={s.title}>Friends</h3>
            <div className={s.items}>
                <div className={s.item}>
                    <div>AVATAR</div>
                    <div>NAME</div>
                </div>
                <div className={s.item}>
                    <div>AVATAR</div>
                    <div>NAME</div>
                </div>
                <div className={s.item}>
                    <div>AVATAR</div>
                    <div>NAME</div>
                </div>
            </div>
        </div>
    )
}

export default Friends;
