import React from "react";
import Friends from "./Friends/Friends";
import Navbar from "./Navbar/Navbar";
import s from'./Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            {/* <Navbar /> */}
            <Friends />
        </aside>
    )
}

export default Sidebar;
