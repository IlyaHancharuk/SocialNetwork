import { Dispatch } from "redux";
import { UserType, UsersPageType } from "../../types";
import { userAPI } from "../../APITools/APITools";

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    currPage: 1,
    totalCount: 0,
    isFetching: false
};

export const usersReducer = (state = initialState, action: UsersActionsType): UsersPageType => {
    switch (action.type) {
        case "SET-USERS": {
            return {...state, users: [...action.payload.users], totalCount: action.payload.totalCount};
        }
        case "SET-CURR-PAGE": {
            return {...state, currPage: action.payload.page}
        }
        case "SET-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        case "FOLLOW": {
            const updatedUsers = state.users.map(user => {
                if (user.id === action.payload.id) {
                    user.followed = true;
                }
                return user;
            })
            return {...state, users: updatedUsers};
        }
        case "UNFOLLOW": {
            const updatedUsers = state.users.map(user => {
                if (user.id === action.payload.id) {
                    user.followed = false;
                }
                return user;
            })
            return {...state, users: updatedUsers};
        }
        default: {
            return state;
        }
    }
}

export type UsersActionsType = 
    SetUsersACType
    | SetCurrentPageACType
    | FollowACType
    | UnfollowACType
    | SetFetchingACType
;
export type SetUsersACType = ReturnType<typeof setUsersAC>;
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>;
export type FollowACType = ReturnType<typeof followAC>;
export type UnfollowACType = ReturnType<typeof unfollowAC>;
export type SetFetchingACType = ReturnType<typeof setFetchingAC>;

export const setUsersAC = (users: UserType[], totalCount: number) => {
    return {
        type: 'SET-USERS',
        payload: {
            users,
            totalCount
        }
    } as const
}
export const setCurrentPageAC = (page: number) => {
    return {
        type: 'SET-CURR-PAGE',
        payload: {
            page
        }
    } as const
}
export const followAC = (id: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            id
        }
    } as const;
}
export const unfollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id
        }
    } as const;
}
export const setFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFetchingAC(true));
            userAPI.getUsers(currentPage, pageSize)
                .then(({ users, totalCount }) => {
                    dispatch(setFetchingAC(false));
                    dispatch(setUsersAC(users, totalCount));
                });
    }
}

export const followUserThunkCreator = (userId: number, setLocalState: React.Dispatch<React.SetStateAction<boolean>>) => {
    return (dispatch: Dispatch) => {
        setLocalState(true);
        userAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId));
                } else {
                    //setFollowMessage(data.messages[0]);
                    //hideFollowMessage();
                }
                setLocalState(false);
            })
    }
}

export const unfollowUserThunkCreator = (userId: number, setLocalState: React.Dispatch<React.SetStateAction<boolean>>) => {
    return (dispatch: Dispatch) => {
        setLocalState(true);
        userAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId));
                } else {
                    //setFollowMessage(data.messages[0]);
                    //hideFollowMessage();
                }
                setLocalState(false);
            })
    }
}