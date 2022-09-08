import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import RequireAuth from '../components/layout/RequireAuth';
import AddNote from '../components/notes-redux/AddNote';
import ListNotes from '../components/notes-redux/ListNotes';
import { UiButton } from '../components/ui/UiButton';
import { UiHeader } from '../components/ui/UiHeader';
import { UiInput } from '../components/ui/UiInput';
import { UserContext } from '../contexts/user.context';

const NotesRedux = () => {
  const state = useContext(UserContext);

  return (
    <div>
      <div className='text-xl'>NOTES REDUX</div>
      <div className="border-dashed border-2 border-gray-800 h-92 p-6 text-2xl rounded">
        <AddNote />
        <ListNotes />
       
        <pre className='text-xs p-2 bg-blue-900 text-white mt-10'>
                    <code>
                      {JSON.stringify(state,undefined,2)}
                    </code>
                  </pre>
      </div>
    </div>
  )
}

export default NotesRedux