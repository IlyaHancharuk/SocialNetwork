import React, { FC } from "react";
import s from './Messages.module.css';
import { DialogsPageType } from "../../../../types";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

type MessagesPropsType = {
    state: DialogsPageType;
    sendMessage(newMessageText: string): void;
}

const Messages: FC<MessagesPropsType> = (props) => {
    const messages: JSX.Element[] | JSX.Element = props.state.messagesData.map((m) => {
        return <Message id={m.id} key={m.id} message={m.message} />
    })

    return (
        <div className={s.messages}>
            <div className={s.messagesItems}>
                {messages}
            </div>
            <NewMessage
                sendMessage={props.sendMessage}
             />
        </div>
    )
}



export default Messages;
