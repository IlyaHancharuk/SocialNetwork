export type SidebarDataType = {
    friendsData: FriendsDataType[];
}

export type ProfilePageType = {
    userProfile: UserProfileType | null;
    status: string;
    postsData: PostDataType[];
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

export type AuthType = AuthResponseType & {isAuth: boolean, errorMessage: string} ;
