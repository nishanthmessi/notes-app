import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../features/slices/users/userApiSlice'
import { logout } from '../features/slices/auth/authSlice'
import UserLineIcon from 'remixicon-react/UserLineIcon'

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
        <Link to='/' className='text-2xl font-semibold underline'>
          Notely
        </Link>
        <div className='md:block rounded-md'>
          {userInfo ? (
            <div className='flex items-center gap-8'>
              <h1 className='flex items-center gap-2 text-lg font-semibold'>
                <UserLineIcon className='bg-gray-400 rounded-full text-sm h-8 w-8 p-1' />
                {userInfo.name}
              </h1>
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
