import React from 'react'
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Cart } from './pages/Cart'
import Login from './pages/Login'
import PrivateRoute from './routes/PrivateRoute'

const App = () => {
  return (
    <>
    <div className='bg-gray-100'>
      <NavBar/>
      <div>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<PrivateRoute><Route element={<Cart/>}/></PrivateRoute>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
      </div>
    </div>
    </>
    
  )
}

export default App