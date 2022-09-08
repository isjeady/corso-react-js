import React from 'react'
import { useSelector } from 'react-redux';
import { selectorNotesList } from '../../store/notes/notes.selector';

const ListNotes = () => {
  const list = useSelector(selectorNotesList)

  const handleRemove = (note) => {
    if(confirm("RIMUOVI???")){
      // removeNoteAction(note.id)
    }
  }

  return (
    <div>
        ListNotes Redux
        <ul className='text-sm list-disc flex flex-col'>
           {list && list.map(note => {
                return <li className='inline-flex'>{note.title} | 
                <div className='font-bold cursor-pointer' onClick={() => {handleRemove(note)}}>X</div>
                </li>
            })}
        </ul>
    </div>
  )
}

export default ListNotes