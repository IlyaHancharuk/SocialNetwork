import { SetAuthDataACType } from "./Redux/redusers/authReducer";
import { DialogsActionsType } from "./Redux/redusers/dialogsReducer";
import { ProfileActionsType } from "./Redux/redusers/profileReduser";
import { SidebarActionsType } from "./Redux/redusers/sidebarReducer";
import { UsersActionsType } from "./Redux/redusers/usersReducer";

export type AllActionsType =
    ProfileActionsType
    | DialogsActionsType
    | SidebarActionsType
    | UsersActionsType
    | SetAuthDataACType
;

export type SidebarDataType = {
    friendsData: FriendsDataType[];
}

export type ProfilePageType = {
    userProfile: UserProfileType | null;
    status: string;
    postsData: PostDataType[];
    newPostText: string;
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
    users: UserType[];
    pageSize: number;
    currPage: number;
    totalCount: number;
    isFetching: boolean;
}

export type UserType = {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: {
        small: string | null;
        large: string | null;
    },
    status: string | null;
    followed: boolean;
}

export type UserProfileType = {
    aboutMe: string;
    contacts: {
        facebook: string;
        website: string | null;
        vk: string;
        twitter: string;
        instagram: string;
        youtube: string | null;
        github: string;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: {
        small: string;
        large: string;
    };
}

export type AuthResponseType = {
    id: number | null;
    email: string ;
    login: string;
}

export type AuthType = AuthResponseType & {isAuth: boolean};
