import { StateType } from "../types";

const state: StateType = {
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
    postsData: [
        { id: 1, message: 'It\'s my first post', likesCount: 23 },
        { id: 2, message: 'Hey, i\'m lern React', likesCount: 23 },
    ],
}

export default state;
