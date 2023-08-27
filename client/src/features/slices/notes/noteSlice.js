import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noteId: localStorage.getItem('noteId')
    ? localStorage.getItem('noteId')
    : null,
  noteData: {},
  notes: [],
}

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNoteId: (state, action) => {
      state.noteId = action.payload
      localStorage.setItem('noteId', action.payload)
    },
    setNoteData: (state, action) => {
      state.noteData = action.payload
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
  },
})

export const { setNoteId, setNoteData, setNotes } = noteSlice.actions
export default noteSlice.reducer
