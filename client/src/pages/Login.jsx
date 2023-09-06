import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../features/slices/users/userApiSlice'
import { setCredentials } from '../features/slices/auth/authSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loginApiCall] = useLoginMutation()

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await loginApiCall({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/home')
    } catch (err) {
      console.log(err.data.message || err.error)
    }
  }

  return (
    <div className='grid grid-col-1 sm:grid-cols-2 sm:gap-20 items-center h-[90vh]'>
      <div className='flex flex-col lg:items-center text-7xl font-semibold gap-4'>
        <h1 className=''>Notely</h1>
        <h1 className=''>Missed Us ?</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className='w-full sm:max-w-[300px] h-auto border-[.12rem] border-gray-400 p-4 rounded-md'>
          <h1 className='text-2xl font-semibold mb-6'>Login to your account</h1>
          <div className='mb-4'>
            <input
              type='email'
              className='w-full border-[.12rem] border-gray-400 rounded-md px-2 py-1'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <input
              type='password'
              className='w-full border-[.12rem] border-gray-400 rounded-md px-2 py-1'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className='bg-fuchsia-500 px-8 py-2 rounded-md text-white hover:shadow-lg hover:shadow-fuchsia-400 transition duration-500 w-full'
            type='submit'
          >
            Login
          </button>
          <div className='py-4'>
            <Link
              to='/signup'
              className='text-sm text-gray-500 hover:text-gray-900 hover:underline underline-offset-2 decoration-fuchsia-600'
            >
              Don't have an account ? Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
