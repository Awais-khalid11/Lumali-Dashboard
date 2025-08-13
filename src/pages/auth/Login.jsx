import React from "react";
import { useNavigate } from "react-router-dom";
import Logo1 from "../../assets/images/Logo1.svg";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative bg px-4 sm:px-6">
      <div className="relative bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md z-10">
        <div className="flex justify-center mb-5 sm:mb-6">
          <img src={Logo1} alt="Logo" className="h-12 sm:h-16" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 sm:mb-6">
          Login to your Account
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-500" />
              Remember Me
            </label>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-blue-500 hover:underline text-left sm:text-right"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-full hover:bg-yellow-600 transition text-sm sm:text-base"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
