import { legacy_createStore, combineReducers } from "redux";
import { dialogsReducer } from "./redusers/dialogsReducer";
import { profileReducer } from "./redusers/profileReduser";
import { sidebarReducer } from "./redusers/sidebarReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarData: sidebarReducer
})

const store = legacy_createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>;
export type ReduxStoreType = typeof store;

export default store;
