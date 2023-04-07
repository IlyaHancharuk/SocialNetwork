export type StoreType = {
    _callSubscriber(state: StateType): void;
    _state: StateType;
    getState(): StateType;
    addPost(): void;
    changePostText(postText: string): void;
    subscribe(observer: (state: StateType) => void): void;
}

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
    dialogsData: DialogDataType[];
    messagesData: MessageDataType[];
}

export type DialogDataType = {
    id: number;
    name: string;
}

export type MessageDataType = {
    id: number;
    message: string;
}

export type DialogsItemsPropsType = {
    dialogsData: DialogDataType[]
}
