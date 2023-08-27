import React, { useState } from 'react'
import Category from '../components/Category'
import Notes from '../components/Notes'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserNotesQuery } from '../features/slices/notes/noteApiSlice'
import { setNotes } from '../features/slices/notes/noteSlice'

const Home = () => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)
  const notes = useSelector((state) => state.note.notes)
  const { data: notesData } = useGetUserNotesQuery(userInfo._id)

  const categories = [...new Set(notesData?.map((note) => note.category))]

  console.log(categories)

  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    const filteredNotes = notesData.filter((note) => note.category === category)
    dispatch(setNotes(filteredNotes))
  }

  return (
    <div className='flex flex-col mt-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-medium py-6'>
          Your best notes organizer!
        </h1>
        <div>
          <Link
            to='/create-note'
            className='border-[.12rem] border-gray-400 hover:bg-gray-800 hover:text-white rounded-md px-2 py-1 transition duration-400'
          >
            Add New Note
          </Link>
        </div>
      </div>
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategorySelect={handleCategorySelect}
      />
      <Notes notes={selectedCategory ? notes : notesData} />
    </div>
  )
}

export default Home
