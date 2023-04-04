import React, { FC } from "react";
import s from './Button.module.css';

type ButtonPropsType = {
    text: string;
    callback: ()=> void;
}

const Button: FC<ButtonPropsType> = (props) => {
    return (
        <button className={s.button} onClick={props.callback}>{props.text}</button>
    )
}

export default Button;