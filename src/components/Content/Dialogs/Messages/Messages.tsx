import React, { FC } from "react";
import s from './Messages.module.css';
import { AllActionsType, DialogsPageType } from "../../../../types";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

type MessagesPropsType = {
    state: DialogsPageType;
    dispatch(action: AllActionsType): void;
}

const Messages: FC<MessagesPropsType> = (props) => {
    const messages: JSX.Element[] | JSX.Element = props.state.messagesData.map((m) => {
        return <Message id={m.id} message={m.message} />
    })

    return (
        <div className={s.messages}>
            <div className={s.messagesItems}>
                {messages}
            </div>
            <NewMessage newMessageText={props.state.newMessageText} dispatch={props.dispatch} />
        </div>
    )
}



export default Messages;
