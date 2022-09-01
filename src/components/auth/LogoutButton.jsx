import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { LOCAL_STORAGE_TOKEN_PROPS } from '../../services/http';
import { UiButton } from '../ui/UiButton';

const LogoutButton = () => {
    let navigate = useNavigate();
    const {setCurrentUser} = useContext(UserContext);

    const handleLogout = () => {
      if(confirm("Vuoi uscire??")){
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_PROPS);
        setCurrentUser(null);
        navigate("/login")
      }
    }

    return <UiButton
        title="Logout"
        onClick={handleLogout}
    />
}

export default LogoutButton