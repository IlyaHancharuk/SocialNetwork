import React from "react";
import s from './Users.module.css';
import { UsersPropsType } from "./UsersContainer";
import User from "./User/User";
import SuperButton from "../../SuperButton/SuperButton";
import axios from "axios";
import { UserType } from "../../../types";


class UsersClC extends React.Component<UsersPropsType> {
    usersPage: number

    constructor(props: UsersPropsType) {
        super(props);
        console.log('component create')
        this.usersPage = 1;
    }

    onClickCallback = () => {
        console.log('show more users')
        ++this.usersPage;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.usersPage}`)
                .then((response) => {
                    const users: UserType[] = response.data.items;
                    this.props.setUsers(users);
                })
    }
    componentDidMount(): void {
        if (this.props.usersPage.usersData.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.usersPage}`)
                .then((response) => {
                    const users: UserType[] = response.data.items;
                    this.props.setUsers(users);
                });
        }
    }
    componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('component did updated')
    }
    componentWillUnmount(): void {
        console.log('component will unmount')
        this.props.sliceFirstTenUsers();
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
