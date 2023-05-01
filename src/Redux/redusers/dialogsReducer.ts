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
};

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage: MessagesDataType = {
                id: state.messagesData.length + 1,
                message: action.pauload.newMessageText,
            }
            const updatedMessagesData = [...state.messagesData, newMessage];
            return {...state, messagesData: updatedMessagesData};
        }
        default:
            return state;
    }
}


export type DialogsActionsType = SendMessageACType;

export type SendMessageACType = ReturnType<typeof sendMessageAC>;
export const sendMessageAC = (newMessageText: string) => {
    return {
        type: 'SEND-MESSAGE',
        pauload: {
            newMessageText
        }
    } as const
};
