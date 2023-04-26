import React, { FC } from "react";
import s from './users.module.css';
import { AppStateType, ReduxStoreType } from "../../../Redux/redux-store";
import { connect } from "react-redux";
import Users from "./Users";
import { UsersPageType } from "../../../types";

type MapStatePropsType = {
    usersPage: UsersPageType;
}
type MapDispatchPropsType = {

}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (): MapDispatchPropsType => {
    return {

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
