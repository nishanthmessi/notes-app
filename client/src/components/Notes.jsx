import { useDispatch, useSelector } from 'react-redux'
import { useGetUserNotesQuery } from '../features/slices/notes/noteApiSlice'
import { Link } from 'react-router-dom'
import { setNoteId } from '../features/slices/notes/noteSlice'

const Notes = () => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)
  const { data: allNotes } = useGetUserNotesQuery(userInfo._id)

  return (
    <div>
      {!allNotes ? (
        <div>loading</div>
      ) : (
        <>
          {allNotes.length == 0 ? (
            <div className='flex flex-col justify-center items-center gap-10 h-[50vh]'>
              <h1 className='text-7xl'>Welcome to Notely</h1>
              <p className='text-3xl'>Start adding notes !!</p>
            </div>
          ) : (
            <div className='grid grid-cols-3 gap-6'>
              {allNotes.map((note) => (
                <>
                  <Link
                    to='/current-note'
                    key={note._id}
                    className='flex flex-col border-2 p-4 w-auto max-w-[500px] rounded-md'
                    onClick={() => dispatch(setNoteId(note._id))}
                  >
                    <div
                      className='flex justify-between items-center'
                      key={note._id}
                    >
                      <h1 className='text-xl font-medium py-2'>{note.title}</h1>
                      <p className='bg-emerald-300 px-2 py-[.10rem] rounded-2xl text-sm'>
                        {note.category}
                      </p>
                    </div>
                    <p className='text-lg text-cutoff pt-4'>{note.content}</p>
                    <div className='flex justify-between items-center pt-6'>
                      <p>
                        Created @{' '}
                        {new Date(note.createdAt).toLocaleDateString()}
                      </p>
                      <p>{new Date(note.createdAt).toLocaleTimeString()}</p>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Notes
