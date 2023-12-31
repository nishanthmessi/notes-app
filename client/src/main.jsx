import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './features/store.js'
import App from './App.jsx'
import './index.css'
import PrivateRoute from './components/PrivateRoute.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import NoteForm from './components/NoteForm.jsx'
import Note from './pages/Note.jsx'
import NoteUpdate from './pages/NoteUpdate.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      {/* Private Routes */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/home' element={<Home />} />
        <Route path='/create-note' element={<NoteForm />} />
        <Route path='/current-note' element={<Note />} />
        <Route path='/update-note' element={<NoteUpdate />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
