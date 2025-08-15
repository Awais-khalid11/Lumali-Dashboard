import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo1 from "../../assets/images/Logo1.svg";

const NewPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative bg px-4 sm:px-6">
      <div className="relative bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md z-10">
        <div className="flex justify-center mb-5 sm:mb-6">
          <img src={Logo1} alt="Logo" className="h-12 sm:h-16" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 sm:mb-6">
          Create your New Password
        </h2>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••••••"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-full hover:bg-yellow-600 transition font-medium text-sm sm:text-base mt-5 sm:mt-6"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
