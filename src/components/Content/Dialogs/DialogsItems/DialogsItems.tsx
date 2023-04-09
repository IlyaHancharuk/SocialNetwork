import React, { FC } from "react";
import s from './DialogsItems.module.css';
import { DialogDataType } from "../../../../types";
import Dialog from "./Dialog/Dialog";

export type DialogsItemsPropsType = {
    dialogsData: DialogDataType[],
}

const DialogsItems: FC<DialogsItemsPropsType> = (props) => {
    const dialogsItems: JSX.Element[] | JSX.Element = props.dialogsData.map((d) => {
        return <Dialog id={d.id} name={d.name} />
    })

    return (
        <div className={s.dialogsItems}>
            {dialogsItems}
        </div>
    )
}

export default DialogsItems;
