import React, { FC } from "react";
import s from './Messages.module.css';
import { MessageDataType } from "../../../../types";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

type MessagesPropsType = {
    messagesData: MessageDataType[]
}

const Messages: FC<MessagesPropsType> = (props) => {

    const messages: JSX.Element[] | JSX.Element = props.messagesData.map((m) => {
        return <Message id={m.id} message={m.message} />
    })

    return (
        <div className={s.messages}>
            <div className={s.messagesItems}>
                {messages}
            </div>
            <NewMessage />
        </div>
    )
}



export default Messages;
