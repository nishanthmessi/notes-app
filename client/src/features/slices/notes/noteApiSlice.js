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
      invalidatesTags: ['Note'],
    }),
    updateNote: builder.mutation({
      query: ({ updatedData, id }) => ({
        url: `${NOTES_URL}/update-note/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
      invalidatesTags: ['Note'],
    }),
    getSingleNote: builder.query({
      query: (id) => ({ url: `${NOTES_URL}/note/${id}` }),
      providesTags: ['Note'],
    }),
    getNoteByCategory: builder.query({
      query: () => ({ url: `${NOTES_URL}/notes-by-category` }),
    }),
    getUserNotes: builder.query({
      query: (id) => ({ url: `${NOTES_URL}/your-notes/${id}` }),
      providesTags: ['Note'],
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `${NOTES_URL}/delete-note/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Note'],
    }),
  }),
})

export const {
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useGetSingleNoteQuery,
  useGetNoteByCategoryQuery,
  useGetUserNotesQuery,
  useDeleteNoteMutation,
} = notesApiSlice
