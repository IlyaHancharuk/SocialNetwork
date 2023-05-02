import { AuthResponseType, AuthType } from "../../types";
import { authAPI } from "../../APITools/APITools";
import { LoginValuesType } from "../../components/Login/LoginPage";
import { AppThunkType } from "../redux-store";

const initialState: AuthType = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
    errorMessage: ''
};

export const authReducer = (state: AuthType = initialState, action: AuthActionsType): AuthType => {
    switch (action.type) {
        case "SET-AUTH-DATA": {
            console.log(action.payload)
            return {...state, ...action.payload.data, isAuth: action.payload.isAuth};
        }
        case "SET-AUTH-ERROR": {
            return {...state, errorMessage: action.payload.errorMessage}
        }
        default: {
            return state;
        }
    }
}

export type AuthActionsType = SetAuthDataACType | SetAuthErrorMessageACType;
export type SetAuthDataACType = ReturnType<typeof setAuthDataAC>;
export type SetAuthErrorMessageACType = ReturnType<typeof setAuthErrorMessageAC>;

export const setAuthDataAC = (data: AuthResponseType, isAuth: boolean) => {
    return {
        type: 'SET-AUTH-DATA',
        payload: {
            data,
            isAuth,
        }
    } as const
};

export const setAuthErrorMessageAC = (errorMessage: string) => {
    return {
        type: 'SET-AUTH-ERROR',
        payload: {
            errorMessage
        }
    } as const
};

export const getAuthThunkCreator = (): AppThunkType => async (dispatch) => {
    const res = await authAPI.me();
    if (res.data.resultCode === 0) {
        console.log('authentification is done');
        const data: AuthResponseType = res.data.data;
        dispatch(setAuthDataAC(data, true));
    }
}

export const loginThunkCreator = (values: LoginValuesType): AppThunkType => async dispatch => {
    const res = await authAPI.login(values)
    if (res.data.resultCode === 0) {
        console.log('login is done');
        dispatch(getAuthThunkCreator());
        dispatch(setAuthErrorMessageAC(''));
    } else {
        const errorMessage: string = res.data.messages[0];
        dispatch(setAuthErrorMessageAC(errorMessage));
    }
}

export const logoutThunkCreator = (): AppThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        console.log('logout is done');
        dispatch(setAuthDataAC(
            {
                id: null,
                email: '',
                login: '',
            },
            false
        ));
    }
}
