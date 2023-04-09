import React, { FC } from "react";
import s from './NewMessage.module.css';
import { ActionType } from "../../../../../types";
import { addMessageActionCreator, changeNewMessageActionCreator } from "../../../../../Redux/state";

type NewMessageProps = {
    newMessageText: string;
    dispatch<T>(action: ActionType<T>): void;
}

const NewMessage: FC<NewMessageProps> = (props) => {
    const newMessageElement: React.RefObject<HTMLTextAreaElement> =  React.createRef();

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    const changeMessageText = () => {
        if (newMessageElement.current) {
            const message = newMessageElement.current.value;
            props.dispatch(changeNewMessageActionCreator(message));
        }
    }

    return (
        <div className={s.newMessage}>
            <textarea
                ref={newMessageElement}
                onChange={changeMessageText}
                value={props.newMessageText}
            />
            <button onClick={addMessage}>SEND</button>
        </div>
    )
}

export default NewMessage;
