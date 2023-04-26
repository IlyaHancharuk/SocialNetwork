import React, { FC } from "react";
import s from './Dialogs.module.css';
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";
import { DialogsPropsType } from "./DialogsContainer";

const Dialogs: FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItems dialogsData={props.dialogsPage.dialogsData} />
            <Messages
                state={props.dialogsPage}
                sendMessage={props.sendMessage}
                changeMessageText={props.changeMessageText}
            />
        </div>
    )
}

export default Dialogs;
