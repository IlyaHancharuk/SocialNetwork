import React, { FC, useEffect } from "react";
import Header from "./Header";
import { AuthResponseType } from "../../types";
import { AppStateType } from "../../Redux/redux-store";
import { connect } from "react-redux";
import { getAuthThunkCreator } from "../../Redux/redusers/authReducer";

const HeaderContainer: FC<HeaderPropsType> = (props) => {

    useEffect(() => {
        if (!props.authData.id) {
            props.getAuth()
        }
    }, [props])

    return (
        <Header authData={props.authData} />
    )
}

type MapStatePropsType = {
    authData: AuthResponseType
}
type MapDispatchPropsType = {
    getAuth(): void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        authData: state.auth
    }
}

export default connect(mapStateToProps, { getAuth: getAuthThunkCreator })(HeaderContainer) ;

