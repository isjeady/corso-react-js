import { NOTES_ACTIONS_TYPES } from "./notes.types"

export const createAction = (type, payload) => ({ type, payload });

/* 
export const addNoteActionRedux = (data) => ({
        type : NOTES_ACTIONS_TYPES.ADD_NOTE,
        payload : data
})

export const removeNoteActionRedux = (id) => ({
        type : NOTES_ACTIONS_TYPES.REMOVE_NOTE,
        payload : id
}) 
*/

export const addNoteActionRedux = (data) => createAction(NOTES_ACTIONS_TYPES.ADD_NOTE,data);
export const removeNoteActionRedux = (id) => createAction(NOTES_ACTIONS_TYPES.REMOVE_NOTE,id);
