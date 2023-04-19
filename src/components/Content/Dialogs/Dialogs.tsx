import React, { FC } from "react";
import s from './Dialogs.module.css';
import { AllActionsType, DialogsPageType } from "../../../types";
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";

export type DialogsPropsType = {
    state: DialogsPageType
    dispatch(action: AllActionsType): void;
}

const Dialogs: FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItems dialogsData={props.state.dialogsData} />
            <Messages state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Dialogs;
