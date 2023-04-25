import React, { FC } from "react";
import s from './NewPost.module.css';

type NewPostProps = {
    newPostText: string;
    addPost(): void;
    changePostText(test: string): void;
}

const NewPost: FC<NewPostProps> = (props) => {
    const addPost = () => {
        props.addPost();
    }
    const changePostText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const postMessage = e.currentTarget.value;
        props.changePostText(postMessage);
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
