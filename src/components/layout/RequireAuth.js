import React from 'react'
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const user = localStorage.getItem('user');

    if(!user){
        return <Navigate to="/login" replace />;
    }

    return <div>{children}</div>
}

export default RequireAuth