import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux';
import { UserContext } from '../../contexts/user.context';
import { addNoteActionRedux } from '../../store/notes/notes.actions';
import { UiButton } from '../ui/UiButton';
import { UiHeader } from '../ui/UiHeader';
import { UiInput } from '../ui/UiInput';

const AddNote = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "Mio titolo...",
    description: "descrizione mia...",
  });

  const handleAdd = () => {
    dispatch(addNoteActionRedux(form))
  }

  return (
    <div>
        <form className="space-y-6">
          <UiHeader
            title="Inserisci una nota Redux"
          />
          <div className="mt-4 py-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <UiInput
              id="title"
              label="Title"
              value={form.title}
              onChange={(event) => {
                const val = event.target.value;
                setForm({ ...form, title: val });
              }}
            />
            <UiInput
              id="description"
              label="Description"
              value={form.description}
              onChange={(event) => {
                const val = event.target.value;
                setForm({ ...form, description: val });
              }}
            />
          </div>

          <div className="pt-5">
            <div className="flex justify-end gap-4">
              <UiButton title="Aggiungi" onClick={handleAdd} solid />
            </div>
          </div>
        </form>
    </div>
  )
}

export default AddNote