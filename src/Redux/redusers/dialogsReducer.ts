import { AllActionsType, DialogsPageType, MessagesDataType } from "../../types";

export const dialogsReducer = (state: DialogsPageType, action: AllActionsType): DialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage: MessagesDataType = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case "CHANGE-MESSAGE-TEXT": {
            state.newMessageText = action.pauload.text;
            return state;
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