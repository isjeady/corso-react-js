import React from 'react'
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../components/auth/LogoutButton';
import RequireAuth from '../components/layout/RequireAuth'
import { UiButton } from '../components/ui/UiButton'
import { LOCAL_STORAGE_TOKEN_PROPS } from '../services/http';

const Private = () => {


  return (
      <RequireAuth>
        <div>
          Private

          <LogoutButton />
          
        </div>
      </RequireAuth>
  )
}

export default Private