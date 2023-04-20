import React, { FC } from "react";
import s from './Dialog.module.css';
import { NavLink } from "react-router-dom";
import { DialogsDataType } from "../../../../../types";

const Dialog: FC<DialogsDataType> = (props) => {
    const path = `/dialogs/${props.id}`
    return <NavLink className={s.item} to={path}>{props.name}</NavLink>
}

export default Dialog;
