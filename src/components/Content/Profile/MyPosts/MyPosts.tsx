import React, { FC } from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import { PostsPropsType } from "../../../../types";
import Posts from "./Posts/Posts";



const MyPosts: FC<PostsPropsType> = (props) => {
    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <NewPost />
            <Posts postsData={props.postsData} />
        </div>
    )
}

export default MyPosts;
