import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user.context';

const ListNotes = () => {
  const {state,removeNoteAction} = useContext(UserContext);
  const { notes} = state;

  const handleRemove = (note) => {
    if(confirm("RIMUOVI???")){
      removeNoteAction(note.id)
    }
  }

  return (
    <div>
        ListNotes
        <ul className='text-sm list-disc flex flex-col'>
           {notes && notes.map(note => {
                return <li className='inline-flex'>{note.title} | 
                <div className='font-bold cursor-pointer' onClick={() => {handleRemove(note)}}>X</div>
                </li>
            })}
        </ul>
    </div>
  )
}

export default ListNotes