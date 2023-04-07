import React from "react";
import s from './NewMessage.module.css';

const NewMessage = () => {

    const newMessageElement: React.RefObject<HTMLTextAreaElement> =  React.createRef();
    const addMessage = () => {
        const text = newMessageElement.current?.value;
        alert(text);
    }

    return (
        <div className={s.newMessage}>
            <textarea ref={newMessageElement} ></textarea>
            <button onClick={addMessage}>SEND</button>
        </div>
    )
}

export default NewMessage;
