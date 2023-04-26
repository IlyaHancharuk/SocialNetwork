import React, { FC } from "react";
import s from './Users.module.css';
import { UsersPropsType } from "./UsersContainer";
import User from "./User/User";
import SuperButton from "../../SuperButton/SuperButton";

const Users: FC<UsersPropsType> = (props) => {
    const users: JSX.Element[] | JSX.Element = props.usersPage.usersData.map(user => {
        return (
            <User key={user.id} userInfo={user} />
        )
    })

    return (
        <div className={s.users}>
            {users}
            <SuperButton children={'Show more'} />
        </div>
    )
}

export default Users;
