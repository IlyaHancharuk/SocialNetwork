import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import  thunkMiddleware  from "redux-thunk";
import { dialogsReducer } from "./redusers/dialogsReducer";
import { profileReducer } from "./redusers/profileReduser";
import { sidebarReducer } from "./redusers/sidebarReducer";
import { usersReducer } from "./redusers/usersReducer";
import { authReducer } from "./redusers/authReducer";

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

export default store;
