import React, { useState, useRef, useEffect } from "react";

const DropDownButton = ({
  btnText = "Options",
  btnIcon,
  options = [],
  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setOpen(false);
    onSelect?.(option);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 text-black rounded-lg border border-[#2525251A]"
      >
        {btnIcon}
        {btnText}
      </button>

      {open && (
        <div
          className={`
          absolute 
          ${isMobile ? "left-0" : "right-0"}
          mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-[9999] 
          animate-in fade-in-0 zoom-in-95
        `}
        >
          <ul className="py-1 text-sm text-gray-700">
            {options.length > 0 ? (
              options.map((option, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {option.label || option}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-400">No options</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
