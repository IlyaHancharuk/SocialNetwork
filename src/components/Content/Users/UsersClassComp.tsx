import React from "react";
import s from './Users.module.css';
import { UsersPropsType } from "./UsersContainer";
import User from "./User/User";
import SuperButton from "../../SuperButton/SuperButton";
import axios from "axios";
import { UserType } from "../../../types";


class UsersClC extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                const users: UserType[] = response.data.items;
                this.props.setUsers(users);
            })
    }

    onClickCallback = () => {
        console.log('show more users')
    }

    render() {
        return (
            <div className={s.users}>
                {this.props.usersPage.usersData.map(user => {
                    return (
                        <User key={user.id}
                              userInfo={user}
                              follow={this.props.follow}
                              unfollow={this.props.unfollow}
                        />
                    )
                })}
                <SuperButton children={'Show more'}
                             onClick={this.onClickCallback}
                />
            </div>
        )
    }
}

export default UsersClC;
