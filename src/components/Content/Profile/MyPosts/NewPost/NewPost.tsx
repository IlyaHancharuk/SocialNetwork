import React, { FC } from "react";
import s from './NewPost.module.css';
import { ActionType } from "../../../../../types";
import { addPostActionCreator, changeNewPostActionCreator } from "../../../../../Redux/state";

type NewPostProps = {
    newPostText: string;
    dispatch<T>(action: ActionType<T>): void;
}

const NewPost: FC<NewPostProps> = (props) => {

    const newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const changePostText = () => {
        if (newPostElement.current) {
            const postMessage = newPostElement.current.value;
            props.dispatch(changeNewPostActionCreator(postMessage));
        }
    }

    return (
        <div className={s.newPost}>
            <textarea
                ref={newPostElement}
                value={props.newPostText}
                onChange={changePostText}
            />
            <button onClick={addPost}>SEND</button>
        </div>
    )
}

export default NewPost;
