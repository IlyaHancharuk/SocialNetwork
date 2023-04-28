import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
    const navLinkClassName = ({ isActive, isPending }: { isActive: boolean; isPending: boolean; } ) => {
        return isPending ? `${s.pending}` : isActive ? `${s.active}` : "";
    }

    return (
        <nav className={s.navbar}>
            <ul className={s.menu}>
                <li className={s.item}>
                    <NavLink to="/profile" className={ navLinkClassName } >Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className={ navLinkClassName } >Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" className={ navLinkClassName } >Users</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className={ navLinkClassName } >News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" className={ navLinkClassName } >Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" className={ navLinkClassName } >Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
