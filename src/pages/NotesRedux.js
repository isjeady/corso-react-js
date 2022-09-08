import React, { useContext, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import RequireAuth from '../components/layout/RequireAuth';
import AddNote from '../components/notes-redux/AddNote';
import ListNotes from '../components/notes-redux/ListNotes';
import { UiButton } from '../components/ui/UiButton';
import { UiHeader } from '../components/ui/UiHeader';
import { UiInput } from '../components/ui/UiInput';
import { UserContext } from '../contexts/user.context';
import { selectorNotesList } from '../store/notes/notes.selector';

const NotesRedux = ({ list }) => {
  /* const state = useContext(UserContext); */
  

  return (
    <div>
      <div className='text-xl'>NOTES REDUX</div>
      <div className="border-dashed border-2 border-gray-800 h-92 p-6 text-2xl rounded">
        <AddNote />
        <ListNotes />
       
        <pre className='text-xs p-2 bg-blue-900 text-white mt-10'>
          <code>
          {parseFloat(Math.random().toFixed(2))}
            {JSON.stringify(list,undefined,2)}
          </code>
        </pre>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    list: state.notes.list 
  };
};

export default connect(mapStateToProps)(NotesRedux);
