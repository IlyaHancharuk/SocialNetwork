import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.menu}>
                <li className={s.item}>
                    <NavLink to="/" className={ ({ isActive, isPending }) => isPending ? `${s.pending}` : isActive ? `${s.active}` : "" } >Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className={ ({ isActive, isPending }) => isPending ? `${s.pending}` : isActive ? `${s.active}` : "" } >Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className={ ({ isActive, isPending }) => isPending ? `${s.pending}` : isActive ? `${s.active}` : "" } >News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" className={ ({ isActive, isPending }) => isPending ? `${s.pending}` : isActive ? `${s.active}` : "" } >Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" className={ ({ isActive, isPending }) => isPending ? `${s.pending}` : isActive ? `${s.active}` : "" } >Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
