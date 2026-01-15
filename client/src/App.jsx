import { useContext, useState } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import AdminLogin from './components/admin/AdminLogin'
import ListProduct from './pages/admin/ListProduct'
import AddProduct from './pages/admin/AddProduct'
import Orders from './pages/admin/Orders'


function App() {

const {showUserLogin , isAdmin} = useContext(ShopContext)
const location = useLocation()
const isAdminPath = localtion.pathname.include('admin');

  
  return (
    <main className='overflow-hidden text-tertiary'>
    {showUserLogin && <Login/>}
      <Header  />
      <Toaster position='top-left'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="/admin" element = {isAdmin ? <Sidebar/> : <AdminLogin/>} >
             <Route index element = {isAdmin ? <AddProduct/> : null} />
             <Route path = 'list' element={<ListProduct/>}  />
             <Route path = 'orders' element = {<Orders/>} />
        </Route>
        
      </Routes>

    </main>
  )
}

export default App
