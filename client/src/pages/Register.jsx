import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const Register = () => {
  const {navigate} = useContext(ShopContext);
  
const [name,setName]= useState("")
const [email,setEmail]= useState("")
 const [password,setPassword]=useState("")
  return (
    <div onSubmit={() => setShowUserLogin(false)} className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className='bg-blue-200 p-8 rounded-xl shadow-lg w-96'>
        <h2 className='text-2xl font-bold text-center mb-4'>Register Now</h2>
         
       
        <input value={name} onChange={(e) => setName(e.target.value)} className='w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400' type='text' placeholder='Name' name={name} required/>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400' type='email' placeholder='Email' name={email} required/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400' type='password' placeholder='Password' name={password} required/>
        <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition transform duration-300 ease-in-out mt-4' type='submit'>Register</button>
        <p className='text-sm text-center mt-4'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick = {() => navigate("/login")}>Login</span></p>
      </form>
    </div>
  )
}

export default Register
