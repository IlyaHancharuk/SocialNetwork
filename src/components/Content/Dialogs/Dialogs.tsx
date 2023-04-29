import React, { FC } from "react";
import s from './Dialogs.module.css';
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";
import { DialogsPropsType } from "./DialogsContainer";
import { Navigate } from "react-router-dom";

const Dialogs: FC<DialogsPropsType> = (props) => {
    if(!props.isAuth) {
        return <Navigate to={"/login"} />
    }

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
