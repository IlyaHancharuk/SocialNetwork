import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import  thunkMiddleware, { ThunkAction }  from "redux-thunk";
import { DialogsActionsType, dialogsReducer } from "./redusers/dialogsReducer";
import { ProfileActionsType, profileReducer } from "./redusers/profileReduser";
import { SidebarActionsType, sidebarReducer } from "./redusers/sidebarReducer";
import { UsersActionsType, usersReducer } from "./redusers/usersReducer";
import { AuthActionsType, authReducer } from "./redusers/authReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarData: sidebarReducer,
    auth: authReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>;
export type ReduxStoreType = typeof store;
export type AllActionsType =
    ProfileActionsType
    | DialogsActionsType
    | SidebarActionsType
    | UsersActionsType
    | AuthActionsType
;
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AllActionsType
>


export default store;
