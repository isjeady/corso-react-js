import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postLoginService } from '../../services/api/auth.service';
import { LOCAL_STORAGE_TOKEN_PROPS } from '../../services/http';
import LoginForm from './LoginForm';

const Login = () => {
    const navigate = useNavigate();
    // const [response,setResponse] = useState(null)

    useEffect(() => {
        const auth = localStorage.getItem(LOCAL_STORAGE_TOKEN_PROPS);

        if(auth){
            redirect()
        }
    },[])

    const [error,setError] = useState(null)

    const saveData = (data) => {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_PROPS,data);
    }

    const redirect = () => {
        navigate("/private")
    }

    const handleLogin = (formToSend) => {
        setError(null)
        //setResponse(null)

        postLoginService(
            formToSend
        ).then((data)=> {
            console.log(data)
            const accessToken = data.accessToken;
            saveData(accessToken);
            redirect();
        }).catch((response) => {
            console.log(response)
            const message = response.data;
            setError(message)
        })
    }

    return <div>
        {/* <pre><code>{JSON.stringify(response,undefined,2)}</code></pre> */}
        <LoginForm 
            onLogin={(f) => handleLogin(f)}
            message={error}
        />
    </div>
}

export default Login