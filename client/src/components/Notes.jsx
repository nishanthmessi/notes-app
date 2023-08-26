import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetAllNotesQuery } from '../features/slices/notes/noteApiSlice'
import Edit2LineIcon from 'remixicon-react/Edit2LineIcon'
import DeleteBin2LineIcon from 'remixicon-react/DeleteBin2LineIcon'

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
              <>
                <div
                  key={note._id}
                  className='flex flex-col border-2 p-4 w-auto max-w-[500px] rounded-md'
                >
                  <h1 className='text-lg font-medium'>{note.title}</h1>
                  <p className='text-lg'>{note.content}</p>
                  <p className=''>{note.category}</p>

                  <div className='flex justify-between items-center pt-4'>
                    <div>
                      <p>{note.createdAt}</p>
                    </div>
                    <div className='flex gap-2'>
                      <button className=' bg-blue-200 hover:bg-blue-300 text-gray-500 hover:text-blue-500 rounded-full px-1 transition duration-400'>
                        <Edit2LineIcon className='h-7 w-5' />
                      </button>
                      <button className='bg-red-200 hover:bg-red-300 text-gray-500 hover:text-red-500 rounded-full px-1 transition duration-400'>
                        <DeleteBin2LineIcon className=' h-7 w-5' />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Notes
