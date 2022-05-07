import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const navigate = useNavigate();
    const [authenticate,setAuthenticate] = useState(false);
    
    const redirect = () => {
        navigate("/login")
    }

    const clear = () => {
        localStorage.removeItem("auth");
    }

    const verifyToken = () => {
        const token = localStorage.getItem('auth');

        if(!token){
            clear();
            redirect();
        }else{
            //Verify 
            axios.get(
                '/660/users/1',
                {
                  baseURL: 'http://localhost:3004', 
                  headers:{
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json', 
                  }
                }
            ).then((res) => {
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