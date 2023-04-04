import React, { FC } from "react";
import s from './Posts.module.css';
import { PostsPropsType } from "../../../../../types";
import Post from "./Post/Post";

const Posts: FC<PostsPropsType> = (props) => {

    const posts: JSX.Element[] | JSX.Element = props.postsData.map((p) => {
        return <Post id={p.id} message={p.message} likesCount={p.likesCount} />
    })

    return (
        <div className={s.posts}>
            {posts}
        </div>
    )
}

export default Posts;
