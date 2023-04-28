import React, { FC, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { AuthResponseType } from "../../types";
import { AppStateType } from "../../Redux/redux-store";
import { connect } from "react-redux";
import { setAuthDataAC } from "../../Redux/redusers/authReducer";

const HeaderContainer: FC<HeaderPropsType> = (props) => {

    useEffect(() => {
       if (!props.authData.id) {
           axios
               .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                   withCredentials: true,
               })
               .then(res => {
                    if (res.data.resultCode === 0) {
                        console.log('authentification is done')
                        const data: AuthResponseType = res.data.data;
                        props.setAuthData(data);
                    }
               })
       }
    }, [props])

    return (
        <Header authData={props.authData} setAuthData={props.setAuthData} />
    )
}

type MapStatePropsType = {
    authData: AuthResponseType
}
type MapDispatchPropsType = {
    setAuthData(data: AuthResponseType): void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        authData: state.auth
    }
}

export default connect(mapStateToProps, { setAuthData: setAuthDataAC })(HeaderContainer) ;

