import React, { FC } from "react";
import s from './Users.module.css';
import { UsersPropsType } from "./UsersContainer";
import User from "./User/User";
import SuperButton from "../../SuperButton/SuperButton";

type AddType = {
    onPageChanged: (pageNumber: number) => void
}

const Users: FC<UsersPropsType & AddType> = (props) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const pageBtns: JSX.Element[] | JSX.Element = pages.map(p => {
        return <span key={`page-btn-${p}`}
                     id={`page-btn-${p}`}
                     className={p === props.currPage ? s.selectedPage : ''}
                     onClick={() => { props.onPageChanged(p) }}
                >
                    {` ${p} `}
                </span>
    })
    const users: JSX.Element[] | JSX.Element = props.usersPage.users.map(user => {
        return (
            <User key={user.id}
                  userInfo={user}
                //   follow={props.follow}
                //   unfollow={props.unfollow}
                  isFetching={props.isFetching}
                  followUser={props.followUser}
                  unfollowUser={props.unfollowUser}
            />
        )
    })

    return (
        <div>
            <div className={s.pagination}>
                {"<"}
                {pageBtns}
                {">"}
            </div>
            <div className={s.users}>
                {users}
                <SuperButton children={'Show more'} />
            </div>
        </div>
    )
}

export default Users;
