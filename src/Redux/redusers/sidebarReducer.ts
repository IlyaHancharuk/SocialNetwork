import { AllActionsType, SidebarDataType } from "../../types";

export const sidebarReducer = (state: SidebarDataType, action: AllActionsType) => {
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