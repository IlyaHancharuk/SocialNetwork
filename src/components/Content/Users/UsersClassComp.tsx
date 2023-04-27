import React from "react";
import s from './Users.module.css';
import { UsersPropsType } from "./UsersContainer";
import User from "./User/User";
import SuperButton from "../../SuperButton/SuperButton";
import axios from "axios";
import { UserType } from "../../../types";


class UsersClC extends React.Component<UsersPropsType> {
    //usersPage: number;

    constructor(props: UsersPropsType) {
        super(props);
        console.log('component create')
        //this.usersPage = 1;
    }

    onClickCallback = () => {
        console.log('show more users')
        // ++this.usersPage;
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.usersPage}`)
        //         .then((response) => {
        //             const users: UserType[] = response.data.items;
        //             this.props.setUsers(users);
        //         })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then((response) => {
                    const users: UserType[] = response.data.items;
                    const totalCount: number = Number(response.data.totalCount);
                    this.props.setUsers(users, totalCount);
                });
    }

    componentDidMount(): void {
        if (this.props.usersPage.usersData.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currPage}&count=${this.props.pageSize}`)
                .then((response) => {
                    const users: UserType[] = response.data.items;
                    const totalCount: number = Number(response.data.totalCount);
                    this.props.setUsers(users, totalCount);
                });
        }
    }
    componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('component did updated')
    }
    componentWillUnmount(): void {
        console.log('component will unmount')
        //this.props.sliceFirstTenUsers();
    }


    render() {

        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={s.pagination}>
                    {"<"}
                    {pages.map(p => {
                        return <span key={`page-btn-${p}`}
                                     id={`page-btn-${p}`}
                                     className={p === this.props.currPage ? s.selectedPage : ''}
                                     onClick={() => {this.onPageChanged(p)}}
                                >
                                    {` ${p} `}
                                </span>
                    })}
                    {">"}
                </div>
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
            </div>
        )
    }
}

export default UsersClC;
