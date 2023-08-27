import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/authSlice'
import noteReducer from './slices/notes/noteSlice'
import { apiSlice } from './slices/apiSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    note: noteReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
