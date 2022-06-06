import React from 'react'
import LogoutButton from '../components/auth/LogoutButton';
import RequireAuth from '../components/layout/RequireAuth'

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