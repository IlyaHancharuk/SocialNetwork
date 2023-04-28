import { DialogsPageType, MessagesDataType } from "../../types";

const initialState: DialogsPageType = {
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
};

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage: MessagesDataType = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
            }
            const updatedMessagesData = [...state.messagesData, newMessage];
            return {...state, messagesData: updatedMessagesData, newMessageText: ''};
        }
        case "CHANGE-MESSAGE-TEXT": {
            const newMessageText = action.pauload.text
            return {...state, newMessageText};
        }
        default:
            return state;
    }
}


export type DialogsActionsType = SendMessageACType | ChangeNewMessageTextACType;

export type SendMessageACType = ReturnType<typeof sendMessageAC>;
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
};

export type ChangeNewMessageTextACType = ReturnType<typeof changeNewMessageTextAC>;
export const changeNewMessageTextAC = (text: string) => {
    return {
        type: 'CHANGE-MESSAGE-TEXT',
        pauload: {
            text
        }
    } as const
};