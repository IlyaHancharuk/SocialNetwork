import React, { FC } from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";
import { PostDataType } from "../../../../../types";

type PostsPropsType = {
    postsData: PostDataType[]
}

const Posts: FC<PostsPropsType> = (props) => {

    const posts: JSX.Element[] | JSX.Element = props.postsData.map((p) => {
        return <Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount} />
    })

    return (
        <div className={s.posts}>
            {posts}
        </div>
    )
}

export default Posts;
