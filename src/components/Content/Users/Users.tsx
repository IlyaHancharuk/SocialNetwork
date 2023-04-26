import React, { FC } from "react";
import s from './Users.module.css';
import { UsersPropsType } from "./UsersContainer";
import User from "./User/User";
import SuperButton from "../../SuperButton/SuperButton";
import axios from "axios";
import { UserType } from "../../../types";

const Users: FC<UsersPropsType> = (props) => {
    if (props.usersPage.usersData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                const users: UserType[] = response.data.items;
                users && props.setUsers(users);
            });
    }

    const onClickCallback = () => {
        console.log('show more users')
    }

    const users: JSX.Element[] | JSX.Element = props.usersPage.usersData.map(user => {
        return (
            <User key={user.id}
                  userInfo={user}
                  follow={props.follow}
                  unfollow={props.unfollow}
            />
        )
    })

    return (
        <div className={s.users}>
            {users}
            <SuperButton children={'Show more'}
                         onClick={onClickCallback}
            />
        </div>
    )
}

export default Users;
