import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import { UiButton } from '../components/ui/UiButton';
import { UiHeader } from '../components/ui/UiHeader';
import { UiInput } from '../components/ui/UiInput';

const LoginPage = () => {
    return <div>
        <Login />
    </div>
}

export default LoginPage