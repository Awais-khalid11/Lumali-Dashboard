import React, { useState } from "react";
import { X, Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StoriesManagementModal = ({ onClose, onApply }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl max-w-full w-full max-h-[90vh] overflow-y-auto sm:w-[400px] p-5 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold mb-5">Filter Stories</h2>

        {/* Children */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Children</p>
          <div className="grid grid-cols-2 gap-2">
            {["All", "Children Only", "Boys", "Girls"].map((label) => (
              <label key={label} className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> {label}
              </label>
            ))}
          </div>
        </div>

        {/* Story Type */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Story Type</p>
          <div className="grid grid-cols-2 gap-2">
            {["All", "Semi Personalized", "Full Personalized"].map((label) => (
              <label key={label} className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> {label}
              </label>
            ))}
          </div>
        </div>

        {/* Theme */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Theme</p>
          <div className="grid grid-cols-2 gap-2">
            {["Jungle", "Space", "Fantasy", "Ocean"].map((label) => (
              <label key={label} className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> {label}
              </label>
            ))}
          </div>
        </div>

        {/* Date Range */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Date Range</p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button className="text-xs sm:text-sm border border-gray-200 px-2 py-1.5 rounded hover:bg-gray-50">
              Last 7 days
            </button>
            <button className="text-xs sm:text-sm border border-gray-200 px-2 py-1.5 rounded hover:bg-gray-50">
              Last 30 days
            </button>
          </div>
          <div className="relative">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              placeholderText="From - To"
              className="w-full text-xs sm:text-sm border border-gray-200 pl-9 pr-2 py-1.5 rounded"
            />
            <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={onApply}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full mt-4 text-sm sm:text-base"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default StoriesManagementModal;
