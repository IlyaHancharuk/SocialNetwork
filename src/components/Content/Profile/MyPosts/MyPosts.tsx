import React, { FC } from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import { ProfilePageType } from "../../../../types";
import store from "../../../../Redux/state";

export type MyPostsPropsType = {
    state: ProfilePageType;
    addPost: () => void;
    changePostText: ((postText: string) => void);
}

const MyPosts: FC<MyPostsPropsType> = (props) => {
    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <NewPost addPost={props.addPost} changePostText={props.changePostText} newPostText={props.state.newPostText} />
            <Posts postsData={props.state.postsData} />
        </div>
    )
}

export default MyPosts;
