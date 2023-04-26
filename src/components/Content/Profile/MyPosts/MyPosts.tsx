import React, { FC } from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import { MyPostsPropsType } from "./MyPostsContainer";

const MyPosts: FC<MyPostsPropsType> = (props) => {
    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <NewPost
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                changePostText={props.changePostText} />
            <Posts postsData={props.profilePage.postsData} />
        </div>
    )
}

export default MyPosts;
