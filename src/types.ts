import { EmptyObject, Store } from "redux";
import { ChangeNewMessageTextACType, SendMessageACType } from "./Redux/redusers/dialogsReducer";
import { AddPostACType, ChangeNewPostTextACType } from "./Redux/redusers/profileReduser";
import { AddFriendACType } from "./Redux/redusers/sidebarReducer";

export type StoreType = {
    _callSubscriber(): void;
    _state: StateType;
    getState(): StateType;
    subscribe(observer: () => void): void;
    dispatch(action: AllActionsType): void
}

export type ReduxStoreType = Store<EmptyObject & {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebarData: SidebarDataType;
}, AllActionsType>

export type AllActionsType =
    AddPostACType
    | ChangeNewPostTextACType
    | SendMessageACType
    | ChangeNewMessageTextACType
    | AddFriendACType
;

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebarData: SidebarDataType;
}

export type SidebarDataType = {
    friendsData: FriendsDataType[];
}

export type ProfilePageType = {
    postsData: PostDataType[],
    newPostText: string,
}

export type FriendsDataType = {
    id: number;
    name: string;
    avatar: string;
}

export type PostDataType = {
    id: number;
    message: string;
    likesCount: number;
}

export type DialogsPageType = {
    dialogsData: DialogsDataType[];
    messagesData: MessagesDataType[];
    newMessageText: string;
}

export type DialogsDataType = {
    id: number;
    name: string;
}

export type MessagesDataType = {
    id: number;
    message: string;
}
