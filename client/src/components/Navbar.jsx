import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../features/slices/users/userApiSlice'
import { logout } from '../features/slices/auth/authSlice'

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (err) {
      console.log(err.data.message || err.error)
    }
  }

  return (
    <div className='py-8'>
      <ul className='flex justify-between items-center'>
        <Link to='/' className='text-2xl font-semibold'>
          Notely
        </Link>
        <div className='hidden md:block rounded-md'>
          {userInfo ? (
            <div className='flex items-center gap-6'>
              <h1 className='text-lg font-semibold'>{userInfo.name}</h1>
              <button
                className='bg-gray-800 text-white py-1 px-2 rounded-md'
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <div className='flex gap-8'>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>SignUp</Link>
              </div>
            </>
          )}
        </div>
      </ul>
    </div>
  )
}

export default Navbar
