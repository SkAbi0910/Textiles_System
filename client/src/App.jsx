import { useContext, useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
// import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import DressCollection from './pages/DressCollection'
import DressCategory from './pages/DressCategory'
import DressDetails from './pages/DressDetails'
import Worthiness from './pages/Worthiness'
import Contact from './pages/Contact'
import MyOrders from './pages/MyOrders'
import PlaceOrder from './pages/PlaceOrder'
import { ShopContext } from './context/ShopContext'
import { Toaster } from 'react-hot-toast'


function App() {

  const {showUserLogin} = useContext(ShopContext)
  
  return (
    <main className='overflow-hidden text-tertiary'>
    {showUserLogin && <Login/>}
      <Header  />
      <Toaster position='top-left'/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="cart" element={<Cart />} /> */}
        <Route path="login" element={<Login  />} />
        <Route path="register" element={<Register />} />
        <Route path="dresscollection" element={<DressCollection />} />
        <Route path="/dresscollection/:dresscategory" element={<DressCategory />} />
        <Route path="/dresscollection/:dresscategory/:id" element={<DressDetails />} />
        <Route path="/worthiness" element={<Worthiness />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my_orders" element={<MyOrders />} />
        <Route path="/place_orders" element={<PlaceOrder />} />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
