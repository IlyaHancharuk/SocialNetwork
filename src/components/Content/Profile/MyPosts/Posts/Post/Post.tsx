import React, { FC } from "react";
import s from './Post.module.css';
import { PostDataType } from "../../../../../../types";

const Post: FC<PostDataType> = (props) => {
    return (
        <div className={s.item}>
            <img src="data:image/jpeg;base64,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" alt="" />
            <div>{props.message}</div>
            <div>
                <span>Like!</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;
