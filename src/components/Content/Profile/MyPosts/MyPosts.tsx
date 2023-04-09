import React, { FC } from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import { ActionType, ProfilePageType } from "../../../../types";

export type MyPostsPropsType = {
    state: ProfilePageType;
    dispatch<T>(action: ActionType<T>): void;
}

const MyPosts: FC<MyPostsPropsType> = (props) => {
    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <NewPost newPostText={props.state.newPostText} dispatch={props.dispatch} />
            <Posts postsData={props.state.postsData} />
        </div>
    )
}

export default MyPosts;
