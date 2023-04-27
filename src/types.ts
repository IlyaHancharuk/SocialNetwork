import { ChangeNewMessageTextACType, SendMessageACType } from "./Redux/redusers/dialogsReducer";
import { AddPostACType, ChangeNewPostTextACType } from "./Redux/redusers/profileReduser";
import { AddFriendACType } from "./Redux/redusers/sidebarReducer";
import { FollowACType, SetCurrentPageACType, SetUsersACType, SliceFirstTenUsersACType, UnfollowACType } from "./Redux/redusers/usersReducer";

export type StoreType = {
    _callSubscriber(): void;
    _state: StateType;
    getState(): StateType;
    subscribe(observer: () => void): void;
    dispatch(action: AllActionsType): void
}

export type AllActionsType =
    AddPostACType
    | ChangeNewPostTextACType
    | SendMessageACType
    | ChangeNewMessageTextACType
    | AddFriendACType
    | FollowACType
    | UnfollowACType
    | SetUsersACType
    | SliceFirstTenUsersACType
    | SetCurrentPageACType
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

export type UsersPageType = {
    usersData: UserType[];
    pageSize: number;
    currPage: number;
    totalCount: number;
}

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string | null,
    followed: boolean
}
