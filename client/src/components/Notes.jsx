import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetAllNotesQuery } from '../features/slices/notes/noteApiSlice'

const Notes = () => {
  const { data: allNotes } = useGetAllNotesQuery()

  return (
    <div>
      {!allNotes ? (
        <div>loading</div>
      ) : (
        <>
          <div className='grid grid-cols-3 gap-6'>
            {allNotes.map((note) => (
              <div key={note._id} className='flex flex-col border-2 p-2'>
                <h1 className='font-medium'>{note.title}</h1>
                <p>{note.content}</p>
                <p>{note.category}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Notes
