import React, { FC } from "react";
import s from './NewPost.module.css';
import { AllActionsType } from "../../../../../types";
import { addPostAC, changeNewPostTextAC } from "../../../../../Redux/redusers/profileReduser";

type NewPostProps = {
    newPostText: string;
    dispatch(action: AllActionsType): void;
}

const NewPost: FC<NewPostProps> = (props) => {
    const addPost = () => {
        props.dispatch(addPostAC());
    }

    const changePostText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const postMessage = e.currentTarget.value;
        props.dispatch(changeNewPostTextAC(postMessage));
    }

    return (
        <div className={s.newPost}>
            <textarea
                value={props.newPostText}
                onChange={changePostText}
            />
            <button onClick={addPost}>SEND</button>
        </div>
    )
}

export default NewPost;
