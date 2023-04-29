import { Dispatch } from "redux";
import { AuthResponseType, AuthType } from "../../types";
import { authAPI } from "../../APITools/APITools";

const initialState: AuthType = {
    id: null,
    email: '',
    login: '',
    isAuth: false
};

export const authReducer = (state: AuthType = initialState, action: SetAuthDataACType): AuthType => {
    switch (action.type) {
        case "SET-AUTH-DATA": {
            return {...state, ...action.payload.data, isAuth: action.payload.isAuth};
        }
        default: {
            return state;
        }
    }
}

export type AuthActionsType = SetAuthDataACType;
export type SetAuthDataACType = ReturnType<typeof setAuthDataAC>;
export const setAuthDataAC = (data: AuthResponseType, isAuth: boolean) => {
    return {
        type: 'SET-AUTH-DATA',
        payload: {
            data,
            isAuth
        }
    } as const
};

export const getAuthThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(data => {
            data && dispatch(setAuthDataAC(data, true));
        })
    }
}