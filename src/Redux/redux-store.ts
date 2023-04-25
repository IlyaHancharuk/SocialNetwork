import { legacy_createStore, combineReducers } from "redux";
import { dialogsReducer } from "./redusers/dialogsReducer";
import { profileReducer } from "./redusers/profileReduser";
import { sidebarReducer } from "./redusers/sidebarReducer";

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarData: sidebarReducer
})

const store = legacy_createStore(rootReducers);

export default store;
