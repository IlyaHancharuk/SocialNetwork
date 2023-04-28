import React, { FC, useEffect } from "react";
import Header from "./Header";
import { AuthResponseType } from "../../types";
import { AppStateType } from "../../Redux/redux-store";
import { connect } from "react-redux";
import { setAuthDataAC } from "../../Redux/redusers/authReducer";
import { getAuth } from "../../APITools/APITools";

const HeaderContainer: FC<HeaderPropsType> = (props) => {

    useEffect(() => {
        if (!props.authData.id) {
            getAuth().then(data => {
                data && props.setAuthData(data)
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

