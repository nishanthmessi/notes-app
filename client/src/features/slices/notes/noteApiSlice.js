import { apiSlice } from '../apiSlice'

const NOTES_URL = '/api/notes'

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNote: builder.mutation({
      query: (data) => ({
        url: `${NOTES_URL}/new-note`,
        method: 'POST',
        body: data,
      }),
    }),
    updateNote: builder.mutation({
      query: (data, id) => ({
        url: `${NOTES_URL}/update-note/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    getAllNotes: builder.query({
      query: () => ({ url: `${NOTES_URL}/all-notes` }),
    }),
    getSingleNote: builder.query({
      query: (id) => ({ url: `${NOTES_URL}/note/${id}` }),
    }),
    getNoteByCategory: builder.query({
      query: () => ({ url: `${NOTES_URL}/notes-by-category` }),
    }),
    getUserNotes: builder.query({
      query: (id) => ({ url: `${NOTES_URL}/your-notes/${id}` }),
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `${NOTES_URL}/delete-note/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useGetAllNotesQuery,
  useGetSingleNoteQuery,
  useGetNoteByCategoryQuery,
  useGetUserNotesQuery,
  useDeleteNoteMutation,
} = notesApiSlice
