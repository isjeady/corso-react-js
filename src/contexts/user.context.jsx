import { createContext, useReducer, useState } from 'react'
import { INITIAL_STATE } from './default_state';
import { userReducer } from './reducer';
import { USER_ACTIONS_TYPES } from './types';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(userReducer,INITIAL_STATE);

    const setCurrentUserAction = (user) => {
        dispatch({
            type : USER_ACTIONS_TYPES.SET_CURRENT_USER,
            payload : user
        })
    }

    const addNoteAction = (data) => {
        dispatch({
            type : USER_ACTIONS_TYPES.ADD_NOTE,
            payload : data
        })
    }
    const removeNoteAction = (id) => {
        dispatch({
            type : USER_ACTIONS_TYPES.REMOVE_NOTE,
            payload : id
        })
    }
    const noChangeAction = (id) => {
        dispatch({
            type : USER_ACTIONS_TYPES.NO_CHANGE,
            payload : id
        })
    }

    const value = {
        state,
        setCurrentUser : setCurrentUserAction,
        addNoteAction,
        removeNoteAction,
        noChangeAction
    };

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}