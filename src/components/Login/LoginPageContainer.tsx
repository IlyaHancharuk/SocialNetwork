import React, { FC } from 'react';
import { connect } from 'react-redux';
import LoginPage, { LoginValuesType } from './LoginPage';
import { loginThunkCreator } from '../../Redux/redusers/authReducer';
import { AppStateType } from '../../Redux/redux-store';

type MapStatePropsType = {}
type MapDispatchPropsType = {
    login(values: LoginValuesType): void
}
export type LoginPagePropsType = MapStatePropsType & MapDispatchPropsType;

const mstp = (state: AppStateType): MapStatePropsType => {
    return {}
}

const LoginPageContainer: FC<LoginPagePropsType> = (props) => {
    return (
        <LoginPage login={props.login} />
    )
}

export default connect(mstp, {login: loginThunkCreator})(LoginPageContainer);
