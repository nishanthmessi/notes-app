import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useRegisterMutation } from '../features/slices/users/userApiSlice'
import { setCredentials } from '../features/slices/auth/authSlice'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [register, { isLoading }] = useRegisterMutation()

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await register({ name, email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/')
    } catch (err) {
      console.log(err.data.message || err.error)
    }
  }

  return (
    <div className='grid grid-cols-2 gap-20 items-center h-[90vh]'>
      <div className='flex flex-col justify-end items-end text-7xl font-semibold gap-4'>
        <h1>Notely</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className='max-w-[300px] h-auto border-[.12rem] border-gray-400 p-4 rounded-md'>
          <div className='flex justify-center mb-6'>
            <img src='' alt='logo' className='h-16 w-16 -mt-14 bg-white' />
          </div>

          <h1 className='text-xl font-semibold mb-6'>Create your account</h1>
          <div className='mb-4'>
            <input
              type='text'
              className='w-full border-[.12rem] border-gray-400 rounded-md px-2 py-1'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className='mb-4'>
            <input
              type='password'
              className='w-full border-[.12rem] border-gray-400 rounded-md px-2 py-1'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className='bg-fuchsia-500 px-8 py-2 rounded-md text-white hover:shadow-lg hover:shadow-fuchsia-400 transition duration-500 w-full'>
            SignUp
          </button>
          <div className='py-4'>
            <Link
              to='/login'
              className='text-sm text-gray-500 hover:text-gray-900 hover:underline underline-offset-2 decoration-fuchsia-600'
            >
              Already have an account ? Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp
