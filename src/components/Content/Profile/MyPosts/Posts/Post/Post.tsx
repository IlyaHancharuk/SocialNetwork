import React, { FC } from "react";
import s from './Post.module.css';
import { PostDataType } from "../../../../../../types";
import { myAvatar } from "../../../../../../Redux/state";

const Post: FC<PostDataType> = (props) => {
    return (
        <div className={s.item}>
            <img src={myAvatar} alt="" />
            <div>{props.message}</div>
            <div>
                <span>Like!</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;
