import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
  useGetSingleNoteQuery,
  useDeleteNoteMutation,
} from '../features/slices/notes/noteApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Edit2LineIcon from 'remixicon-react/Edit2LineIcon'
import DeleteBin2LineIcon from 'remixicon-react/DeleteBin2LineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import { setNoteData } from '../features/slices/notes/noteSlice'
import Spinner from '../components/Spinner'

const Note = () => {
  const { noteId } = useSelector((state) => state.note)
  const { data: singleNote } = useGetSingleNoteQuery(noteId)

  const [deleteNote] = useDeleteNoteMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Update Note route
  const handleNoteUpdate = async () => {
    try {
      dispatch(setNoteData(singleNote))
      navigate('/update-note')
    } catch (err) {
      console.log(err.error)
    }
  }

  // Delete Note Function
  const handleNoteDelete = async () => {
    try {
      await deleteNote(noteId)
      navigate('/')
    } catch (err) {
      console.log(err.data.message || err.error)
    }
  }

  return (
    <>
      {!singleNote ? (
        <div className='flex justify-center items-center h-[60vh]'>
          <Spinner />
        </div>
      ) : (
        <>
          <div className='py-6'>
            <Link to='/' className='flex gap-1'>
              <ArrowLeftSLineIcon /> Back to Notes
            </Link>
          </div>
          <div className='flex flex-col max-w-[700px] mx-auto mt-10 border-[.10rem] border-gray-300 p-4 rounded-xl'>
            <div className='flex flex-col items-start'>
              <div className='text-start'>
                <h1 className='text-4xl mb-2'>{singleNote.title}</h1>
                <p className='mb-6 underline'>{singleNote.category}</p>
                <p className='text-3xl break-words'>{singleNote.content}</p>
                <p className='mt-6'>
                  Created @{' '}
                  {new Date(singleNote.createdAt).toLocaleDateString()}
                </p>
                <p className=''>
                  {new Date(singleNote.createdAt).toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center mt-10'>
              <div className='flex gap-8'>
                <button
                  className='flex gap-2 p-2 bg-blue-500 rounded-md text-gray-300 hover:text-white'
                  onClick={handleNoteUpdate}
                >
                  <Edit2LineIcon /> Edit Note
                </button>
                <button
                  className='flex gap-2 p-2 bg-red-500 rounded-md text-gray-300 hover:text-white'
                  onClick={handleNoteDelete}
                >
                  <DeleteBin2LineIcon />
                  Delete Note
                </button>
              </div>
              <p className='mt-6 sm:mt-0'>
                Last updated: {new Date(singleNote.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Note
