import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setNoteId } from '../features/slices/notes/noteSlice'
import Spinner from './Spinner'

const Notes = ({ notes }) => {
  const dispatch = useDispatch()

  return (
    <div>
      {!notes ? (
        <div className='flex justify-center items-center h-[60vh]'>
          <Spinner />
        </div>
      ) : (
        <>
          {notes.length == 0 ? (
            <div className='flex flex-col justify-center items-center gap-10 h-[50vh]'>
              <h1 className='text-3xl sm:text-7xl text-center'>
                No notes found!!
              </h1>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {notes.map((note) => (
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
