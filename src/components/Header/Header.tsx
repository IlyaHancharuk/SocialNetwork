import React, { FC } from "react";
import s from './Header.module.css';
import SuperButton from "../SuperButton/SuperButton";
import { NavLink } from "react-router-dom";
import { AuthResponseType } from "../../types";

type HeaderPropsType = {
    authData: AuthResponseType
}

const Header: FC<HeaderPropsType> = (props) => {
    const authBlock: JSX.Element =
        props.authData.id
            ? <div>
                <h3> Hello, {props.authData.login}!</h3>
            </div>
            : <NavLink to={"/login"}>
                <SuperButton>
                    Login
                </SuperButton>
            </NavLink>

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://img.icons8.com/doodle/48/null/facebook-messenger.png" alt="logo" />
            </div>
            <div className={s.auth}>
                {authBlock}
            </div>
        </header>
    )
}

export default Header;
