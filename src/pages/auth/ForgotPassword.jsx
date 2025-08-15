import React from "react";
import { useNavigate } from "react-router-dom";
import Logo1 from "../../assets/images/Logo1.svg";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/check-your-email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative bg px-4 sm:px-6">
      <div className="relative bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md z-10">
        <div className="flex justify-center mb-5 sm:mb-6">
          <img src={Logo1} alt="Logo" className="h-12 sm:h-16" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
          Forgot Password?
        </h2>

        <p className="text-gray-600 text-center text-xs sm:text-sm mb-5 sm:mb-6">
          Enter your registered email below to get your unique link to reset the
          password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-full hover:bg-yellow-600 transition text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
