import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { noChangeActionRedux } from '../../store/notes/notes.actions';
import { selectorNotesList } from '../../store/notes/notes.selector';

const ListNotes = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectorNotesList)

  const handleRemove = (note) => {
    //if(confirm("RIMUOVI???")){
      // removeNoteAction(note.id)
      dispatch(noChangeActionRedux(note.id));
    //}
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