import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import RequireAuth from '../components/layout/RequireAuth';
import AddNote from '../components/notes/AddNote';
import ListNotes from '../components/notes/ListNotes';
import { UiButton } from '../components/ui/UiButton';
import { UiHeader } from '../components/ui/UiHeader';
import { UiInput } from '../components/ui/UiInput';
import { UserContext } from '../contexts/user.context';

const Notes = () => {
  const state = useContext(UserContext);

  return (
    <RequireAuth>
      <div className="border-dashed border-2 border-gray-800 h-92 p-6 text-2xl rounded">
        <AddNote />
        <ListNotes />
       
        <pre className='text-xs p-2 bg-blue-900 text-white mt-10'>
                    <code>
                      {JSON.stringify(state,undefined,2)}
                    </code>
                  </pre>
      </div>
    </RequireAuth>
  )
}

export default Notes