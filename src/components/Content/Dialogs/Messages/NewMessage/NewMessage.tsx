import React, { FC } from "react";
import s from './NewMessage.module.css';
import { ActionType } from "../../../../../types";
import { sendMessageActionCreator, changeNewMessageActionCreator } from "../../../../../Redux/dialogsReducer";

type NewMessageProps = {
    newMessageText: string;
    dispatch<T>(action: ActionType<T>): void;
}

const NewMessage: FC<NewMessageProps> = (props) => {
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const changeMessageText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const message = e.target.value.trimStart();
        props.dispatch(changeNewMessageActionCreator(message));
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
