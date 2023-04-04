export type DialogsPropsType = {
    dialogsData: DialogDataType[],
    messagesData: MessageDataType[],
}

export type StateType = {
    dialogsData: DialogDataType[];
    messagesData: MessageDataType[];
    postsData: PostDataType[],
}

export type ProfilePropsType = {
    postsData: PostDataType[],
}

export type DialogDataType = {
    id: number;
    name: string;
}

export type MessageDataType = {
    id: number;
    message: string;
}

export type PostDataType = {
    id: number;
    message: string;
    likesCount: number;
}

export type AppPropsType = {
    state: StateType;
}

export type PostsPropsType = {
    postsData: PostDataType[]
}

export type DialogsItemsPropsType = {
    dialogsData: DialogDataType[]
}

export type MessagesPropsType = {
    messagesData: MessageDataType[]
}