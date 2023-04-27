import { AllActionsType, UserType, UsersPageType } from "../../types";

const initialState: UsersPageType = {
    usersData: [],
};

export const usersReducer = (state = initialState, action: AllActionsType): UsersPageType => {
    switch (action.type) {
        case "SET-USERS": {
            return {...state, usersData: [...state.usersData, ...action.payload.users]};
        }
        case "SLICE-10-USERS": {
            return {...state, usersData: state.usersData.slice(0, 10)};
        }
        case "FOLLOW": {
            const updatedUsers = state.usersData.map(user => {
                if (user.id === action.payload.id) {
                    user.followed = true;
                }
                return user;
            })
            return {...state, usersData: updatedUsers};
        }
        case "UNFOLLOW": {
            const updatedUsers = state.usersData.map(user => {
                if (user.id === action.payload.id) {
                    user.followed = false;
                }
                return user;
            })
            return {...state, usersData: updatedUsers};
        }
        default: {
            return state;
        }
    }
}

export type SetUsersACType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export type SliceFirstTenUsersACType = ReturnType<typeof sliceFirstTenUsersAC>;
export const sliceFirstTenUsersAC = () => {
    return {
        type: 'SLICE-10-USERS',
    } as const
}

export type FollowACType = ReturnType<typeof followAC>;
export const followAC = (id: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            id
        }
    } as const;
}

export type UnfollowACType = ReturnType<typeof unfollowAC>;
export const unfollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id
        }
    } as const;
}
