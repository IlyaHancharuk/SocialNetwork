import React, { FC } from "react";
import s from './DialogsItems.module.css';
import { DialogsDataType } from "../../../../types";
import Dialog from "./Dialog/Dialog";

export type DialogsItemsPropsType = {
    dialogsData: DialogsDataType[],
}

const DialogsItems: FC<DialogsItemsPropsType> = (props) => {
    const dialogsItems: JSX.Element[] | JSX.Element = props.dialogsData.map((d) => {
        return <Dialog key={d.id} id={d.id} name={d.name} />
    })

    return (
        <div className={s.dialogsItems}>
            {dialogsItems}
        </div>
    )
}

export default DialogsItems;
