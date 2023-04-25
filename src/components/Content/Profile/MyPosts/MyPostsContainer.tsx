import React, { FC } from "react";
import { ReduxStoreType } from "../../../../types";
import MyPosts from "./MyPosts";
import { addPostAC, changeNewPostTextAC } from "../../../../Redux/redusers/profileReduser";

export type MyPostsContainerPropsType = {
    store: ReduxStoreType;
}

const MyPostsContainer: FC<MyPostsContainerPropsType> = ({ store }) => {
    const state = store.getState();

    const addPost = () => {
        store.dispatch(addPostAC());
    }
    const changePostText = (postMessage: string) => {
        store.dispatch(changeNewPostTextAC(postMessage));
    }

    return (
        <MyPosts
            state={state.profilePage}
            addPost={addPost}
            changePostText={changePostText}
        />
    )
}

export default MyPostsContainer;
