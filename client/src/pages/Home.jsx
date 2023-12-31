import React, { useState } from 'react'
import Category from '../components/Category'
import Notes from '../components/Notes'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserNotesQuery } from '../features/slices/notes/noteApiSlice'
import { setNotes, setCurrentPage } from '../features/slices/notes/noteSlice'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)
  const notes = useSelector((state) => state.note.notes)
  const currentPage = useSelector((state) => state.note.currentPage)
  const totalPages = useSelector((state) => state.note.totalPages)

  const { data: notesData } = useGetUserNotesQuery(userInfo._id)

  const categories = [...new Set(notesData?.map((note) => note.category))]

  // func to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    const filteredNotes = notesData.filter((note) => note.category === category)
    dispatch(setNotes(filteredNotes))
  }

  // func to handle pagination
  const handlePaginationClick = (newPage) => {
    dispatch(setCurrentPage(newPage))
  }

  // Search func
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredNotes = notesData?.filter(
    (note) =>
      (!selectedCategory || note.category === selectedCategory) &&
      (searchTerm === '' ||
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className='flex flex-col mt-4 pb-8'>
      <div className='flex justify-between items-center gap-8'>
        <h1 className='text-xl sm:text-2xl font-medium py-6'>
          Your best notes organizer!
        </h1>

        <div className='flex gap-6'>
          <input
            type='text'
            placeholder='Search by title or content'
            className='hidden md:block bg-gray-100 px-2 py-[1.5] rounded-md outline-none'
            value={searchTerm}
            onChange={handleSearch}
          />
          <Link
            to='/create-note'
            className='hidden sm:block border-[.12rem] border-gray-400 hover:bg-gray-800 hover:text-white rounded-md md:px-2 md:py-1 transition duration-400'
          >
            Add New Note
          </Link>
          <Link
            to='/create-note'
            className='sm:hidden border-[.12rem] border-gray-400 hover:bg-gray-800 hover:text-white rounded-md px-2 py-1 transition duration-400'
          >
            +
          </Link>
        </div>
      </div>
      <input
        type='text'
        placeholder='Search by title or content'
        className='md:hidden bg-gray-100 p-2 rounded-md'
        value={searchTerm}
        onChange={handleSearch}
      />
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategorySelect={handleCategorySelect}
      />
      <Notes
        notes={selectedCategory || searchTerm ? filteredNotes : notesData}
      />

      {/* <div className='flex justify-center mt-4'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className='px-4'
            onClick={() => handlePaginationClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  )
}

export default Home
