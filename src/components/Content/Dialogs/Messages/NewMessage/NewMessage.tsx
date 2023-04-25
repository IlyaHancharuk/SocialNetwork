import React, { FC } from "react";
import s from './NewMessage.module.css';

type NewMessageProps = {
    newMessageText: string;
    sendMessage(): void;
    changeMessageText(text: string): void;
}

const NewMessage: FC<NewMessageProps> = (props) => {
    const sendMessage = () => {
        props.sendMessage();
    }

    const changeMessageText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const message = e.currentTarget.value;
        props.changeMessageText(message);
    }

    return (
        <div className={s.newMessage}>
            <textarea
                onChange={changeMessageText}
                value={props.newMessageText}
                placeholder="Enter your message"
            ></textarea>
            <button onClick={sendMessage}>SEND</button>
        </div>
    )
}

export default NewMessage;
