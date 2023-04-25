import React, { FC } from "react";
import { ReduxStoreType } from "../../../types";
import Dialogs from "./Dialogs";
import { changeNewMessageTextAC, sendMessageAC } from "../../../Redux/redusers/dialogsReducer";

export type DialogsPropsType = {
    store: ReduxStoreType;
}

const DialogsContainer: FC<DialogsPropsType> = ({ store }) => {
    const state = store.getState().dialogsPage;

    const sendMessage = () => {
        store.dispatch(sendMessageAC());
    }

    const changeMessageText = (message: string) => {
        store.dispatch(changeNewMessageTextAC(message));
    }

    return (
        <Dialogs
            state={state}
            sendMessage={sendMessage}
            changeMessageText={changeMessageText}
        />
    )
}

export default DialogsContainer;
