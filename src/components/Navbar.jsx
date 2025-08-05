import { ReactSVG } from "react-svg";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <div className="h-25 rounded-[20px] shadow-md bg-white m-2.5 px-6 flex justify-between items-center border border-[#00000012]">
      {/* Left section with title */}
      <div className="flex items-center">
        {/* Title - visible only on md+ screens */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-black hidden [@media(min-width:963px)]:block [@media(max-width:963px)]:hidden">
            👋 Hey! Arlene McCoy
          </h1>
          <p className="text-sm text-gray-600 hidden [@media(min-width:963px)]:block [@media(max-width:963px)]:hidden">
            Here's an overview of platform activity
          </p>
        </div>
      </div>

      {/* Right section (mobile-first) */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Search - only on sm+ screens */}
        <div className="hidden sm:block w-64 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ReactSVG
              src="/assets/icons/search.svg"
              className="w-5 h-5 text-gray-400"
            />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Notification icon */}
        <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <ReactSVG src="/assets/icons/notification.svg" className="w-6 h-6" />
        </div>

        {/* Profile image */}
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-12.5 h-12.5 rounded-full p-[4px] border-2 border-[#E6EBF2]"
        />

        {/* Hamburger - visible only on mobile */}
        <button className="block md:hidden text-gray-600" onClick={onMenuClick}>
          <FiMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
