import { Dispatch } from "redux";
import { PostDataType, ProfilePageType, UserProfileType } from "../../types";
import { profileAPI } from "../../APITools/APITools";

const initialState: ProfilePageType = {
    userProfile: null,
    status: '',
    postsData: [
        { id: 1, message: 'It\'s my first post', likesCount: 23 },
        { id: 2, message: 'Hey, i\'m lern React', likesCount: 20 },
        { id: 3, message: 'Hey, i\'m lern', likesCount: 9 },
        { id: 4, message: 'Hey,', likesCount: 15 },
    ],
};

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostDataType = {
                id: state.postsData.length + 1,
                message: action.payload.newPostText,
                likesCount: 0,
            }
            const updatedPostData = [...state.postsData, newPost];
            return {...state, postsData: updatedPostData};
        }
        case "SET-USER-PROFILE": {
            return {...state, userProfile: action.payload.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.payload.status}
        }
        default: {
            return state;
        }
    }
}

export type ProfileActionsType = AddPostACType | SetUserProfileACType | SetStatusACType;
export type AddPostACType = ReturnType<typeof addPostAC>;
export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            newPostText
        }
    } as const
};


export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>;
export const setUserProfileAC = (profile: UserProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        }
    } as const
};

export type SetStatusACType = ReturnType<typeof setStatusAC>;
export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        payload: {
            status
        }
    } as const
};

export const getUserProfileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserProfile(userId).then(res => {
            const profile: UserProfileType = res.data;
            dispatch(setUserProfileAC(profile));
        });
    }
}

export const getUserStatusThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userId).then(res => {
            const status: string = res.data;
            dispatch(setStatusAC(status));
        });
    }
}

export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        });
    }
}