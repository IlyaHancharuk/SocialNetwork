import React, { FC } from "react";
import s from './NewPost.module.css';

type NewPostProps = {
    addPost: () => void;
    changePostText: ((postText: string) => void);
    newPostText: string;
}

const NewPost: FC<NewPostProps> = (props) => {

    const newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        props.addPost();
    }

    const changePostText = () => {
        debugger
        if (newPostElement.current) {
            const postMessage = newPostElement.current.value;
            props.changePostText(postMessage);
        }
    }

    return (
        <div className={s.newPost}>
            <textarea
                ref={newPostElement}
                value={props.newPostText}
                onChange={changePostText} />
            <button onClick={addPost}>SEND</button>
        </div>
    )
}

export default NewPost;
