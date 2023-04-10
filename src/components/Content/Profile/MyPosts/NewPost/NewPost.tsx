import React, { FC } from "react";
import s from './NewPost.module.css';
import { ActionType } from "../../../../../types";
import { addPostActionCreator, changeNewPostActionCreator } from "../../../../../Redux/profileReducer";

type NewPostProps = {
    newPostText: string;
    dispatch<T>(action: ActionType<T>): void;
}

const NewPost: FC<NewPostProps> = (props) => {
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const changePostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const postMessage = e.target.value.trimStart();
        props.dispatch(changeNewPostActionCreator(postMessage));
    }

    return (
        <div className={s.newPost}>
            <textarea
                value={props.newPostText}
                onChange={changePostText}
                placeholder="Enter post message"
            ></textarea>
            <button onClick={addPost}>SEND</button>
        </div>
    )
}

export default NewPost;
