import React from 'react'
import { useNavigate } from 'react-router-dom';
import RequireAuth from '../components/layout/RequireAuth'
import { UiButton } from '../components/ui/UiButton'

const Private = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    if(confirm("Vuoi uscire??")){
        localStorage.removeItem("auth");
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