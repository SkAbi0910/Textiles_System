import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'


function App() {
  
  return (
    <main className='overflow-hidden text-tertiary'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        
      </Routes>
    </main>
  )
}

export default App
