import { AllActionsType, UsersPageType } from "../../types";

const initialState: UsersPageType = {
    usersData: [
        { id: 1, fullName: 'Ilya', status: 'I am a programmer', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, fullName: 'Igor', status: 'I am a programmer', location: { city: 'Brest', country: 'Belarus' } },
        { id: 3, fullName: 'Anton', status: 'I am a programmer', location: { city: 'Batumi', country: 'Georgia' } },
        { id: 4, fullName: 'Dasha', status: 'I am a programmer', location: { city: 'Lviv', country: 'Ukraine' } },
    ],
};

export const usersReducer = (state = initialState, action: AllActionsType): UsersPageType => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
