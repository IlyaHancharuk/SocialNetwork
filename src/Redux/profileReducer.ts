import { ActionType, PostDataType, ProfilePageType } from "../types"

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeNewPostActionCreator = (text: string) => ({type: CHANGE_POST_TEXT, args: text});

const profileReducer = <T>(state: ProfilePageType, action: ActionType<T>) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '') {
                const newPost: PostDataType = {
                    id: state.postsData.length + 1,
                    message: state.newPostText,
                    likesCount: 0,
                }
                state.postsData.push(newPost);
                state.newPostText = '';
            }
            break;
        case CHANGE_POST_TEXT:
            if (typeof action.args === 'string') {
                state.newPostText = action.args;
            };
            break;
        }
    return state;
}

export default profileReducer;