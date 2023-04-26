import { AllActionsType, UserType, UsersPageType } from "../../types";

const initialState: UsersPageType = {
    usersData: [
        { id: 1, followed: false, fullName: 'Ilya', status: 'I am a programmer', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, followed: true, fullName: 'Igor', status: 'I am a programmer', location: { city: 'Brest', country: 'Belarus' } },
        { id: 3, followed: true, fullName: 'Anton', status: 'I am a programmer', location: { city: 'Batumi', country: 'Georgia' } },
        { id: 4, followed: false, fullName: 'Dasha', status: 'I am a programmer', location: { city: 'Lviv', country: 'Ukraine' } },
    ],
};

export const usersReducer = (state = initialState, action: AllActionsType): UsersPageType => {
    switch (action.type) {
        case "SET-USERS": {
            return {...state, usersData: [...state.usersData, ...action.payload.users]};
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
