import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../api/axios';
import { setUser } from '../redux/userSlice';
import bg from '../assets/bg-login.jpg';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await api.post('/login', { email, password });
      document.cookie = `token=${response.data.token}`;
      dispatch(setUser(response.data.user));
      navigate('/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className="absolute inset-0 bg-black/60"></div>


      <div className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-extrabold text-center text-amber-400">
          Welcome Back
        </h2>
        <p className="text-center text-slate-200 text-sm mt-2">
          Login to continue your journey
        </p>

        {error && (
          <p className="text-red-400 text-sm text-center mt-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-full bg-white/80 text-gray-800 placeholder-gray-500 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-full bg-white/80 text-gray-800 placeholder-gray-500 mb-6 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <button
            type="submit"
            className="w-full py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-slate-200 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-amber-400 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
