import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: 'https://notely-app-5442.onrender.com/' })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Note'],
  endpoints: (builder) => ({}),
})
