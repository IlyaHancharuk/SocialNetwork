import React, { FC } from "react";
import s from './Dialogs.module.css';
import { DialogsPropsType, MessageDataType, MessagesPropsType } from "../../../types";
import DialogsItems from "./DialogsItems/DialogsItems";

const Dialogs: FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItems dialogsData={props.dialogsData} />
            <Messages messagesData={props.messagesData} />
        </div>
    )
}

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

const Message: FC<MessageDataType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Dialogs;
