import React from "react";
import s from './Header.module.css';
import Navbar from "../Sidebar/Navbar/Navbar";


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://img.icons8.com/doodle/48/null/facebook-messenger.png" alt="logo" />
            </div>
            <Navbar />
        </header>
    )
}

export default Header;
