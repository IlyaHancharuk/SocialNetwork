import { AllActionsType, PostDataType, ProfilePageType } from "../../types";

const initialState: ProfilePageType = {
    postsData: [
        { id: 1, message: 'It\'s my first post', likesCount: 23 },
        { id: 2, message: 'Hey, i\'m lern React', likesCount: 20 },
        { id: 3, message: 'Hey, i\'m lern', likesCount: 9 },
        { id: 4, message: 'Hey,', likesCount: 15 },
    ],
    newPostText: '',
};

export const profileReducer = (state: ProfilePageType = initialState, action: AllActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostDataType = {
                id: state.postsData.length + 1,
                message: state.newPostText,
                likesCount: 0,
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        }
        case "CHANGE-POST-TEXT": {
            state.newPostText = action.payload.text;
            return state;
        }
        default: {
            return state;
        }
    }
}

export type ProfileActionsType = AddPostACType | ChangeNewPostTextACType;

export type AddPostACType = ReturnType<typeof addPostAC>;
export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
};

export type ChangeNewPostTextACType = ReturnType<typeof changeNewPostTextAC>;
export const changeNewPostTextAC = (text: string) => {
    return {
        type: 'CHANGE-POST-TEXT',
        payload: {
            text
        }
    } as const
};