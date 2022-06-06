import React from 'react'
import { useNavigate } from 'react-router-dom';
import RequireAuth from '../components/layout/RequireAuth'
import { UiButton } from '../components/ui/UiButton'
import { LOCAL_STORAGE_TOKEN_PROPS } from '../services/http';

const Private = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    if(confirm("Vuoi uscire??")){
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_PROPS);
        navigate("/login")
    }
  }

  return (
      <RequireAuth>
        <div>
          Private

          <UiButton
            title="Logout"
            onClick={handleLogout}
          />
        </div>
      </RequireAuth>
  )
}

export default Private