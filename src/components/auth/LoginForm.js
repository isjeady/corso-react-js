import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UiButton } from '../../components/ui/UiButton';
import { UiHeader } from '../../components/ui/UiHeader';
import { UiInput } from '../../components/ui/UiInput';

const LoginForm = ({ onLogin,message }) => {
    let navigate = useNavigate();

    const [form, setForm] = useState({
        email: "olivier@mail.com",
        password: "bestPassw0rd",
    });

    const [formError, setFormError] = useState({
        email: false,
        password: false,
    });

    const handleValidForm = () => {
        let formValid = true;

        let emailValid = true;
        let passwordValid = true;

        if(form.email === ""){
            formValid = false;
            emailValid = false;
        }
        if(form.password === ""){
            formValid = false;
            passwordValid = false;
        }

        setFormError({
            ...formError,
            email: !emailValid,
            password: !passwordValid
        });

        return formValid;
    };

    const handleLogin = () => {
        if(handleValidForm()){
            onLogin(form)
            // VERIFICA DEI DATI CON IL SERVER
            /* localStorage.setItem("user",JSON.stringify(form));
            navigate("/private") */
        }
    }

    return <div className="max-w-xl m-auto space-y-6 border border-gray-300 p-4 rounded-xl shadow-lg">
        <form>
            <UiHeader
            title="Login"
            />
            <div className="mt-4 py-4 flex flex-col gap-y-6 gap-x-4 sm:grid-cols-6">
            <UiInput
                id="email"
                label="Email"
                value={form.email}
                onChange={(event) => {
                    const val = event.target.value;
                    setForm({ ...form, email: val });
                }}
                error={formError.email}
            />
            <UiInput
                id="password"
                label="Password"
                value={form.password}
                onChange={(event) => {
                    const val = event.target.value;
                    setForm({ ...form, password: val });
                }}
                error={formError.password}
            />
            </div>
        
        {message && <div className="bg-red-300 text-gray-800 p-2 rounded mt-2 mb-4 text-xs font-bold shadow-md">
            {message}
        </div>}

          <div className="flex justify-end">
            <UiButton
              title="Login"
              onClick={handleLogin}
              solid
            />
          </div>
      </form>
    </div>
}

export default LoginForm