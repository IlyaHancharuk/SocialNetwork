import React, { FC } from "react";
import Friends from "./Friends/Friends";
import Navbar from "./Navbar/Navbar";
import s from'./Sidebar.module.css';
import { SidebarDataType } from "../../types";

type SidebarPropsType = {
    state: SidebarDataType;
}

const Sidebar: FC<SidebarPropsType> = (props) => {
    return (
        <aside className={s.sidebar}>
            {/* <Navbar /> */}
            <Friends friendsData={props.state.friendsData} />
        </aside>
    )
}

export default Sidebar;
