import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../api/authApi";
import { navigateTo, clearNavigation } from "../redux/navigationSlice";
import bg from '../assets/bg-login.jpg';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectTo = useSelector((state) => state.navigation.redirectTo);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      dispatch(navigateTo("/login"));
    },
  });

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
      dispatch(clearNavigation());
    }
  }, [redirectTo, navigate, dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutate({ name, email, password });
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className="absolute inset-0 bg-black/60"></div>


      <div className="mt-15 relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-extrabold text-center text-amber-400">
          Register Now
        </h2>
        <p className="text-center text-slate-200 text-sm mt-2">
          Create your account and get started
        </p>

        <form onSubmit={onSubmitHandler} className="mt-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded-full bg-white/80 text-gray-800 placeholder-gray-500 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

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
            disabled={isLoading}
            className="w-full py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition transform hover:scale-105 disabled:opacity-60"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        {isError && (
          <p className="text-red-400 text-sm mt-4 text-center">
            {error?.response?.data?.message || "Registration failed"}
          </p>
        )}

        <p className="text-sm text-center text-slate-200 mt-6">
          Already have an account?{" "}
          <span
            className="text-amber-400 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
