import React, { FC } from "react";
import s from './Messages.module.css';
import { MessagesPropsType } from "../../../../types";
import Message from "./Message/Message";

const Messages: FC<MessagesPropsType> = (props) => {

    const messages: JSX.Element[] | JSX.Element = props.messagesData.map((m) => {
        return <Message id={m.id} message={m.message} />
    })

    return (
        <div className={s.messages}>
            {messages}
        </div>
    )
}



export default Messages;
