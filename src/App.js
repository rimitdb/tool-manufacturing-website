import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/shared/NavBar'
import Home from './components/Home/Home'
import Purchase from './components/Purchase'
import Footer from './components/shared/Footer'
import Login from './components/Access/Login'
import NotFound from './components/NotFound/NotFound'
import Register from './components/Access/Register'
import { Toaster } from 'react-hot-toast'
import Blog from './components/Blog/Blog'
import RequireAuth from "./components/RequireAuth/RequireAuth";
import MyPortfolio from './components/MyPortfolio/MyPortfolio'
import Dashboard from './components/Dashboard/Dashboard'
import MyOrder from './components/Dashboard/MyOrder'
import MyProfile from './components/Dashboard/MyProfile'
import Users from './components/Dashboard/Users';
import RequireAdmin from './components/Access/RequireAdmin'
import AddProduct from './components/Dashboard/AddProduct'
import ManageAllOrder from './components/Dashboard/ManageAllOrder';
import AddReview from './components/Dashboard/AddReview'
import ManageAllProduct from './components/Dashboard/ManageAllProduct'

function App() {
  return (
    <div className='App'>
      <Toaster />
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/tool/:toolId' element={
          <RequireAuth><Purchase /></RequireAuth>}>
        </Route>
        <Route path='/dashboard' element={
          <RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='my-order' element={<MyOrder />}></Route>
          <Route path='add-review' element={<AddReview />}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='add-product' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='manage-order' element={<RequireAdmin><ManageAllOrder /></RequireAdmin>}></Route>
          <Route path='manage-product' element={<RequireAdmin><ManageAllProduct /></RequireAdmin>}></Route>
        </Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/my-portfolio' element={<MyPortfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
