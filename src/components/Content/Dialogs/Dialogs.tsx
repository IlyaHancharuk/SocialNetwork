import React, { FC } from "react";
import s from './Dialogs.module.css';
import { DialogsPageType } from "../../../types";
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";

export type DialogsPropsType = {
    state: DialogsPageType;
    sendMessage(): void;
    changeMessageText(text: string): void;
}

const Dialogs: FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItems dialogsData={props.state.dialogsData} />
            <Messages
                state={props.state}
                sendMessage={props.sendMessage}
                changeMessageText={props.changeMessageText}
            />
        </div>
    )
}

export default Dialogs;
