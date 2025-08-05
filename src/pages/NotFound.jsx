import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center flex-col space-y-3">
      <p className="text-xl">404</p>
      <h2 className="text-3xl font-bold">Page not found</h2>
      <p className="text-gray-500 text-lg">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-5 py-2 bg-primary text-white rounded-full font-bold hover:shadow-2xl hover:scale-105 duration-200 transition-all"
      >
        Go back home
      </button>
    </div>
  );
};

export default NotFound;
