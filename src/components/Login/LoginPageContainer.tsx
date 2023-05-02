import React, { FC } from 'react';
import { connect } from 'react-redux';
import LoginPage, { LoginValuesType } from './LoginPage';
import { loginThunkCreator } from '../../Redux/redusers/authReducer';
import { AppStateType } from '../../Redux/redux-store';
import { AuthType } from '../../types';

type MapStatePropsType = {
    auth: AuthType;
}
type MapDispatchPropsType = {
    login(values: LoginValuesType): void;
}
export type LoginPagePropsType = MapStatePropsType & MapDispatchPropsType;

const mstp = (state: AppStateType): MapStatePropsType => {
    return {
        auth: state.auth
    }
}

const LoginPageContainer: FC<LoginPagePropsType> = (props) => {
    return (
        <LoginPage login={props.login} auth={props.auth} />
    )
}

export default connect(
    mstp,
    {
        login: loginThunkCreator,
    }
)(LoginPageContainer);
