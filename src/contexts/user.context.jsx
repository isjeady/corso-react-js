import { createContext, useReducer, useState} from 'react';

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
};
  
const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
        return { 
            ...state, 
            currentUser: payload 
        };
      default:
        throw new Error(`Error Type:${type} in userReducer`);
    }
};

export const UserProvider = ({ children }) => {
    //const [currentUser,setCurrentUser] = useState(null);
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const setCurrentUser = (user) =>
        dispatch({ 
            type: USER_ACTION_TYPES.SET_CURRENT_USER, 
            payload: user 
        });

    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>

}