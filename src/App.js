import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/shared/NavBar'
import Home from './components/Home'
import Purchase from './components/Purchase'
import Footer from './components/shared/Footer'
import Login from './components/Access/Login'
import NotFound from './components/NotFound/NotFound'
import Register from './components/Access/Register'
import { Toaster } from 'react-hot-toast'
import Blog from './components/Blog'

function App () {
  return (
    <div className='App'>
      <Toaster />
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/purchase' element={<Purchase />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
