import { AllActionsType, SidebarDataType } from "../../types";
import userPhoto from "./../../assets/images/defaultUserSmallAvatar.png";

const initialState: SidebarDataType = {
    friendsData: [
        { id: 1, name: 'Dimych', avatar: userPhoto },
        { id: 2, name: 'Andrew', avatar: userPhoto },
        { id: 3, name: 'Sveta', avatar: userPhoto },
        { id: 4, name: 'Sasha', avatar: userPhoto },
        { id: 5, name: 'Viktor', avatar: userPhoto },
        { id: 6, name: 'Valera', avatar: userPhoto },
    ],
};

export const sidebarReducer = (state: SidebarDataType = initialState, action: AllActionsType) => {
    switch (action.type) {
        case "ADD-FRIEND": {
            return state;
        }
        default: {
            return state;
        }
    }
}

export type AddFriendACType = ReturnType<typeof addFriendAC>;
export const addFriendAC = () => {
    return {
        type: 'ADD-FRIEND'
    } as const
}