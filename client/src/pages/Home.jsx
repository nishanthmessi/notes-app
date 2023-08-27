import React, { useState } from 'react'
import Category from '../components/Category'
import Notes from '../components/Notes'
import { Link } from 'react-router-dom'

const Home = () => {
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
      <Category />
      <Notes />
    </div>
  )
}

export default Home
