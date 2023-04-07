import React, { FC } from "react";
import s from './Dialogs.module.css';
import { DialogDataType, MessageDataType } from "../../../types";
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";

export type DialogsPropsType = {
    state: {
        dialogsData: DialogDataType[],
        messagesData: MessageDataType[],
    }
}

const Dialogs: FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItems dialogsData={props.state.dialogsData} />
            <Messages messagesData={props.state.messagesData} />
        </div>
    )
}

export default Dialogs;
