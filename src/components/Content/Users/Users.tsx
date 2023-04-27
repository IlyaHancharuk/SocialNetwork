import React, { FC, useEffect } from "react";
import s from './Users.module.css';
import { UsersPropsType } from "./UsersContainer";
import User from "./User/User";
import SuperButton from "../../SuperButton/SuperButton";
import { getUsers } from "../../../APITools/APITools";

const Users: FC<UsersPropsType> = (props) => {

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            props.setUsers(users);
        }
        if (props.usersPage.usersData.length === 0) {
            fetchUsers()
        }
    })

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
