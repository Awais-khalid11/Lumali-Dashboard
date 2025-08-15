import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo1 from "../../assets/images/Logo1.svg";

const CheckEmail = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = () => {
    navigate("/new-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative bg px-4 sm:px-6">
      <div className="relative bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md z-10">
        <div className="flex justify-center mb-5 sm:mb-6">
          <img src={Logo1} alt="Logo" className="h-12 sm:h-16" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
          Please check your email
        </h2>

        <p className="text-gray-600 text-center text-xs sm:text-sm mb-5 sm:mb-6">
          We've just sent a password reset email to your inbox.
        </p>

        <p className="text-center text-xs sm:text-sm font-medium mb-4">
          Enter your verification code
        </p>

        <div className="flex justify-center gap-2 sm:gap-3 mb-5 sm:mb-6 flex-wrap">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg text-center text-lg sm:text-xl font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleVerify}
          className="w-full bg-yellow-500 text-white py-2 rounded-full hover:bg-yellow-600 transition font-medium text-sm sm:text-base"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default CheckEmail;
