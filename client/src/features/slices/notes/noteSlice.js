import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noteId: localStorage.getItem('noteId')
    ? localStorage.getItem('noteId')
    : null,
  noteData: {},
  notes: [],
  currentPage: 1,
  totalPages: 1,
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload
    },
  },
})

export const {
  setNoteId,
  setNoteData,
  setNotes,
  setCurrentPage,
  setTotalPages,
} = noteSlice.actions
export default noteSlice.reducer
