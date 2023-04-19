import { MessageDataType, PostDataType, StateType, StoreType } from "../types";

export const myAvatar = 'data:image/jpeg;base64,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';
let unknowAvatar = 'data:image/png;base64,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';

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';



export type AddPostACType = ReturnType<typeof addPostAC>;
export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
};

export type ChangeNewPostTextACType = ReturnType<typeof changeNewPostTextAC>;
export const changeNewPostTextAC = (text: string) => {
    return {
        type: CHANGE_POST_TEXT,
        payload: {
            text
        }
    } as const
};

export type SendMessageACType = ReturnType<typeof sendMessageAC>;
export const sendMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
};

export type ChangeNewMessageTextACType = ReturnType<typeof changeNewMessageTextAC>;
export const changeNewMessageTextAC = (text: string) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        pauload: {
            text
        }
    } as const
};


const store: StoreType = {
    _callSubscriber(state: StateType) {
        console.log('subscriber is not defind')
    },
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'It\'s my first post', likesCount: 23 },
                { id: 2, message: 'Hey, i\'m lern React', likesCount: 20 },
                { id: 3, message: 'Hey, i\'m lern', likesCount: 9 },
                { id: 4, message: 'Hey,', likesCount: 15 },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' },
            ],
            messagesData: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: '"\\(o.o)/"' },
            ],
            newMessageText: '',
        },
        sidebarData: {
            friendsData: [
                { id: 1, name: 'Dimych', avatar: unknowAvatar },
                { id: 2, name: 'Andrew', avatar: unknowAvatar },
                { id: 3, name: 'Sveta', avatar: unknowAvatar },
                { id: 4, name: 'Sasha', avatar: unknowAvatar },
                { id: 5, name: 'Viktor', avatar: unknowAvatar },
                { id: 6, name: 'Valera', avatar: unknowAvatar },
            ],
        }
    },
    getState() {
        return this._state;
    },
    subscribe (observer: (state: StateType)=> void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                const newPost: PostDataType = {
                    id: this._state.profilePage.postsData.length + 1,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                }
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;

            case CHANGE_POST_TEXT:
                this._state.profilePage.newPostText = action.payload.text;
                this._callSubscriber(this._state);
                break;

            case ADD_MESSAGE:
                const newMessage: MessageDataType = {
                    id: this._state.dialogsPage.messagesData.length + 1,
                    message: this._state.dialogsPage.newMessageText,
                }
                this._state.dialogsPage.messagesData.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;

            case CHANGE_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.pauload.text;
                this._callSubscriber(this._state);
                break;
        }
    }
}

export default store;
