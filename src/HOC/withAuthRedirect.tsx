import React, { ComponentType } from 'react'
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../Redux/redux-store';

type MapStatePropsType = {
    isAuth: boolean;
}

const mstp = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        const { isAuth, ...restProps } = props;

        if (!isAuth) return <Navigate to={"/login"} />;
 
        return <Component {...restProps as any} />;
    };

    return connect(mstp)(RedirectComponent);
}
