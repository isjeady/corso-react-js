import { NOTES_INITIAL_STATE } from "./notes.state";
import { NOTES_ACTIONS_TYPES } from "./notes.types";

export const notesReducer = (state = NOTES_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type){
        case NOTES_ACTIONS_TYPES.ADD_NOTE:
            return {
                ...state,
                list : [
                    ...state.list,
                    {
                        id : new Date().valueOf(),
                        ...payload
                    }
                ]
            }
        case NOTES_ACTIONS_TYPES.REMOVE_NOTE: 
            const id = payload;
            const newNotes = state.list.filter((note) => note.id != id);
            return {
                ...state,
                list : newNotes
            }
        default:
            return state
    }
}