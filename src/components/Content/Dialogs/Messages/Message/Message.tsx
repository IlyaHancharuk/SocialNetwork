import React, { FC } from "react";
import s from './Message.module.css';
import { MessagesDataType } from "../../../../../types";

const Message: FC<MessagesDataType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message;
