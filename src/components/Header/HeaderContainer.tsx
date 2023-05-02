import React, { FC, useEffect } from "react";
import Header from "./Header";
import { AuthType } from "../../types";
import { AppStateType } from "../../Redux/redux-store";
import { connect } from "react-redux";
import { getAuthThunkCreator, logoutThunkCreator } from "../../Redux/redusers/authReducer";

const HeaderContainer: FC<HeaderPropsType> = (props) => {

    useEffect(() => {
        if (!props.authData.isAuth) {
            props.getAuth();
        }
    }, [props])

    return (
        <Header authData={props.authData} logout={props.logout} />
    )
}

type MapStatePropsType = {
    authData: AuthType
}
type MapDispatchPropsType = {
    getAuth(): void;
    logout(): void;
}
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        authData: state.auth
    }
}

export default connect(mapStateToProps, { getAuth: getAuthThunkCreator, logout: logoutThunkCreator })(HeaderContainer) ;

