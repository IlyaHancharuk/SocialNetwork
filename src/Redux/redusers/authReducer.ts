import { Dispatch } from "redux";
import { AuthResponseType } from "../../types";
import { getAuth } from "../../APITools/APITools";

const initialState: AuthResponseType = {
    id: null,
    email: '',
    login: ''
};

export const authReducer = (state: AuthResponseType = initialState, action: SetAuthDataACType): AuthResponseType => {
    switch (action.type) {
        case "SET-AUTH-DATA": {
            return {...state, ...action.payload.data};
        }
        default: {
            return state;
        }
    }
}

export type AuthActionsType = SetAuthDataACType;
export type SetAuthDataACType = ReturnType<typeof setAuthDataAC>;
export const setAuthDataAC = (data: AuthResponseType) => {
    return {
        type: 'SET-AUTH-DATA',
        payload: {
            data
        }
    } as const
};

export const getAuthThunkCreator = () => {
    return (dispatch: Dispatch) => {
        getAuth().then(data => {
            data && dispatch(setAuthDataAC(data));
        })
    }
}