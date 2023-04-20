import { ActionType, DialogsPageType, MessageDataType } from "../types"

const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const changeNewMessageActionCreator = (text: string) => ({type: CHANGE_MESSAGE_TEXT, args: text});

const dialogsReducer = <T>(state: DialogsPageType, action: ActionType<T>) => {

    switch (action.type) {
        case SEND_MESSAGE:
            if (state.newMessageText !== '') {
                const newMessage: MessageDataType = {
                    id: state.messagesData.length + 1,
                    message: state.newMessageText,
                }
                state.messagesData.push(newMessage);
                state.newMessageText = '';
            }
            break;
        case CHANGE_MESSAGE_TEXT:
            if (typeof action.args === 'string') {
                state.newMessageText = action.args;
            };
            break;
    }
    return state;
}

export default dialogsReducer;