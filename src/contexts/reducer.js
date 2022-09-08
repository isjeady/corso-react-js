import { USER_ACTIONS_TYPES } from "./types";

export const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type){
        case USER_ACTIONS_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser : payload
            }
        case USER_ACTIONS_TYPES.SET_COUNT_LOGIN:
            return {
                ...state,
                countLogin : payload
            }
        case USER_ACTIONS_TYPES.ADD_NOTE:
            return {
                ...state,
                notes : [
                    ...state.notes,
                    {
                        id : new Date().valueOf(),
                        ...payload
                    }
                ]
            }
        case USER_ACTIONS_TYPES.REMOVE_NOTE: 
            const id = payload;
            const newNotes = state.notes.filter((note) => note.id != id);
            return {
                ...state,
                notes : newNotes
            }
        case USER_ACTIONS_TYPES.NO_CHANGE: 
            return {
                ...state,
            }
        default:
            throw new Error(`Error Type: ${type} in userReducer`)
    }
}