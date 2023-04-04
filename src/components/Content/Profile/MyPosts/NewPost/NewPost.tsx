import React from "react";
import s from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={s.newPost}>
            <textarea name="" id="" ></textarea>
            <button>SEND</button>
        </div>
    )
}

export default NewPost;
