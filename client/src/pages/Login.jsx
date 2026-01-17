import { useState, useContext } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Register from './Register';

const Login = () => {
  const { setShowUserLogin, navigate } = useContext(ShopContext);
  const [email, setEmail] = useState("")
  const [state, setState] = useState("login")

  const [password, setPassword] = useState("")
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', formData);
      document.cookie = `token=${response.data.token}`;
      setUser(response.data.user);
      console.log('Login successful:', response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form action="" className='bg-blue-200 p-8 rounded-xl shadow-lg w-96'>
        <h2 className='text-2xl font-bold text-center mb-4'>
          Welcome Back</h2>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400' type='email' placeholder='Email' name='email' required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400' type='password' placeholder='Password' name='password' required />
        <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition transform duration-300 ease-in-out mt-4' type='submit'>Login</button>
        <p className='text-sm text-center mt-4'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={() => navigate("/register")}>Register</span></p>
      </form>
    </div>
  )
}

export default Login

