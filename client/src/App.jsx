import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
