import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import bgImg from "../../assets/bg-login.jpg";
import { adminLogin } from "../../api/adminApi";
import { loginSuccess } from "../../redux/authSlice";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading, error } = useMutation({
    mutationFn: adminLogin,
    onSuccess: (data) => {
      dispatch(loginSuccess(data.admin));
      localStorage.setItem("adminToken", data.token);
      navigate("/admin/dashboard");
    },
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <section style={{ backgroundImage: `url(${bgImg})` }} className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      <div className="flex items-center justify-center bg-slate-100 px-6">
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-md bg-white/80 backdrop-blur
                   p-10 rounded-3xl shadow-2xl"
        >

          <h3 className="text-3xl font-extrabold text-center mb-2 text-gray-900">
            <span className="text-amber-500">Admin</span> Login
          </h3>

          <p className="text-center text-gray-600 text-sm mb-8">
            Authorized personnel only
          </p>


          {error && (
            <p className="text-red-500 text-sm text-center mb-4">
              Login failed. Please check credentials.
            </p>
          )}


          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
              className="w-full px-4 py-3 rounded-full border border-gray-300
                       focus:ring-2 focus:ring-amber-400 outline-none"
            />
          </div>


          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-full border border-gray-300
                       focus:ring-2 focus:ring-amber-400 outline-none"
            />
          </div>


          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-full bg-amber-500 text-white
                     font-semibold hover:bg-amber-600 transition
                     transform hover:scale-105 disabled:opacity-60"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>


        </form>
      </div>
    </section>
  );

};

export default AdminLogin;
