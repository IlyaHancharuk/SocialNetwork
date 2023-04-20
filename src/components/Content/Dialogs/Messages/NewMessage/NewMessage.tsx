import React, { FC } from "react";
import s from './NewMessage.module.css';
import { AllActionsType } from "../../../../../types";
import { changeNewMessageTextAC, sendMessageAC } from "../../../../../Redux/redusers/dialogsReducer";

type NewMessageProps = {
    newMessageText: string;
    dispatch(action: AllActionsType): void;
}

const NewMessage: FC<NewMessageProps> = (props) => {
    const addMessage = () => {
        props.dispatch(sendMessageAC());
    }

    const changeMessageText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const message = e.currentTarget.value;
        props.dispatch(changeNewMessageTextAC(message));
    }

    return (
        <div className={s.newMessage}>
            <textarea
                onChange={changeMessageText}
                value={props.newMessageText}
            />
            <button onClick={addMessage}>SEND</button>
        </div>
    )
}

export default NewMessage;
