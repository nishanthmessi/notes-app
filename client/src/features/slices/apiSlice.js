import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: 'https://nice-hat-ant.cyclic.app' })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Note'],
  endpoints: (builder) => ({}),
})
