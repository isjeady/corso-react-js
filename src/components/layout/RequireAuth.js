import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { getMe } from '../../services/api/auth.service';
import { LOCAL_STORAGE_TOKEN_PROPS } from '../../services/http';

const RequireAuth = ({ children }) => {
    const navigate = useNavigate();
    const {setCurrentUser} = useContext(UserContext);
    const [authenticate,setAuthenticate] = useState(false);
    
    const redirect = () => {
        navigate("/login")
    }

    const clear = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_PROPS);
    }

    const verifyToken = () => {
        const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_PROPS);

        if(!token){
            clear();
            redirect();
        }else{
            //Verify 
            getMe()
            .then((res) => {
                setCurrentUser(res)  
                setAuthenticate(true)
            }).catch(err => {
                clear();
                redirect();
            })
        }
    }

    useEffect(() => {
        verifyToken()
    },[children])
    

    return <div>{authenticate && children}</div>
}

export default RequireAuth