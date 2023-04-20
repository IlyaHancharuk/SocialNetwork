import { AllActionsType, PostDataType, ProfilePageType } from "../../types";

export const profileReducer = (state: ProfilePageType, action: AllActionsType): ProfilePageType => {
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