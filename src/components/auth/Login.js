import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
    const navigate = useNavigate();
    // const [response,setResponse] = useState(null)

    useEffect(() => {
        const auth = localStorage.getItem('auth');

        if(auth){
            redirect()
        }
    },[])

    const [error,setError] = useState(null)

    const saveData = (data) => {
        localStorage.setItem("auth",JSON.stringify(data));
    }

    const redirect = () => {
        navigate("/private")
    }

    const handleLogin = (formToSend) => {
        setError(null)
        //setResponse(null)

        axios.post(
            '/login',
            formToSend,
            {
              baseURL: 'http://localhost:3004', 
              headers:{
                Accept: 'application/json', 
              }
            }
        ).then((res)=> {
            const data = res.data;
            //setResponse(data)
            //REDIRECT TO PRIVATE ROUTE
            saveData(data);
            redirect();
        }).catch((err) => {
            const message = err.response.data;
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