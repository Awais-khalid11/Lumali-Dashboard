import { ReactSVG } from "react-svg";
import { FiMenu } from "react-icons/fi";
import NotificationIcon from "../assets/icons/notification.svg";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onMenuClick, isSidebarOpen }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNotifications]);

  const handleNotificationToggle = () => {
    setShowNotifications((prev) => !prev);
  };

  return (
    <div className="h-25 rounded-[20px] shadow-md bg-white m-2.5 px-6 flex justify-between items-center border border-[#00000012] relative">
      {/* Left section with title */}
      <div className="flex items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-black hidden [@media(min-width:963px)]:block [@media(max-width:963px)]:hidden">
            👋 Hey! Arlene McCoy
          </h1>
          <p className="text-sm text-gray-600 hidden [@media(min-width:963px)]:block [@media(max-width:963px)]:hidden">
            Here's an overview of platform activity.
          </p>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Search */}
        <div className="hidden sm:block w-64 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Notification icon with dropdown */}
        <div className="relative" ref={notificationRef}>
          <div
            className="p-2 hover:bg-gray-100 rounded-full cursor-pointer relative"
            onClick={handleNotificationToggle}
          >
            <ReactSVG src={NotificationIcon} className="w-6 h-6" />
            {/* Notification badge */}
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* Notification dropdown - now properly positioned */}
          {showNotifications && (
            <div
              className={`absolute top-full right-0 mt-2 ${
                isMobile ? "w-72 max-w-[calc(100vw-2rem)]" : "w-96"
              } bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden transform translate-x-0`}
              style={{
                right: isMobile ? "auto" : "0",
                left: isMobile ? "50%" : "auto",
                transform: isMobile ? "translateX(-50%)" : "none",
                maxWidth: isMobile ? "calc(100vw - 2rem)" : "none",
              }}
            >
              {/* Notifications List */}
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i}>
                  <div className="flex items-start gap-3 px-4 py-3">
                    <img
                      src="https://i.pravatar.cc/40?img=3"
                      alt="Avatar"
                      className={`${
                        isMobile ? "w-8 h-8" : "w-10 h-10"
                      } rounded-full object-cover flex-shrink-0`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-gray-800">
                          Drew Cano
                        </span>
                        <span className="text-xs text-gray-500">
                          3 Hours Ago
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        markfathlkj@gmail.com
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                  </div>
                  {i < 3 && <div className="border-t border-gray-200" />}
                </div>
              ))}

              {/* Footer */}
              <div className="border-t border-gray-300 bg-orange-100">
                <div className="text-center py-3">
                  <button
                    onClick={() => {
                      setShowNotifications(false);
                      navigate("/notifications");
                    }}
                    className="text-yellow-500 font-medium text-sm hover:underline"
                  >
                    See All Notifications
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile image */}
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-12.5 h-12.5 rounded-full p-[4px] border-2 border-[#E6EBF2]"
        />

        {/* Hamburger icon */}
        <button className="block md:hidden text-gray-600" onClick={onMenuClick}>
          <FiMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
