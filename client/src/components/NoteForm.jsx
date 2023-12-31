import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useCreateNoteMutation } from '../features/slices/notes/noteApiSlice'
import { useNavigate, Link } from 'react-router-dom'
import { categories } from '../utils/db'

const NoteForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')

  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth)
  const [createNote, { isLoading }] = useCreateNoteMutation()

  const handleNoteCreation = async () => {
    const noteData = {
      userId: userInfo._id,
      title,
      content,
      category,
    }

    try {
      await createNote(noteData).unwrap()
      navigate('/home')
    } catch (err) {
      console.log(err.data.message || err.error)
    }
  }

  return (
    <div className='fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-hidden md:h-full flex justify-center items-center backdrop-blur-md backdrop-saturate-125 bg-black/30'>
      <div className='relative w-full h-full max-w-lg md:h-auto'>
        <div className='relative bg-white rounded-lg'>
          <Link
            to='/home'
            className='absolute top-3 right-2.5 text-gray-400 bg-gray-700 py-2 px-4 rounded-full'
          >
            x
          </Link>
          <div className='flex flex-col p-8 gap-6'>
            <h1 className='text-2xl font-medium'>Create Note</h1>
            <div>
              <h1 className='text-lg'>Title</h1>
              <input
                type='text'
                className='border-[.10rem] border-gray-500 rounded-md w-full py-[.5rem] px-1'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className=''>
              <h1 className='text-lg'>Content</h1>
              <textarea
                type='text'
                className='border-[.10rem] border-gray-500 rounded-md w-full px-1 break-word'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows='3'
              />
            </div>
            <div>
              <h1 className='text-lg pb-2'>Category</h1>
              <select
                className='w-48 rounded-md p-[.4rem] bg-gray-100'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option default>-- select Category --</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              className='bg-gray-800 w-full py-2 rounded-md text-white'
              onClick={handleNoteCreation}
            >
              Add Note
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteForm
