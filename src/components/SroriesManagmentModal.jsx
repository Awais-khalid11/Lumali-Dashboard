import React, { useState } from "react";
import { X, Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StoriesManagementModal = ({ onClose, onApply }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-[320px] p-5 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-base font-semibold mb-5">Filter Stories</h2>

        {/* Children */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Children</p>
          {["All", "Children Only", "Boys", "Girls"].map((label) => (
            <label key={label} className="block text-sm mb-1">
              <input type="checkbox" className="mr-2" /> {label}
            </label>
          ))}
        </div>

        {/* Story Type */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Story Type</p>
          {["All", "Semi Personalized", "Full Personalized"].map((label) => (
            <label key={label} className="block text-sm mb-1">
              <input type="checkbox" className="mr-2" /> {label}
            </label>
          ))}
        </div>

        {/* Theme */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Theme</p>
          {["Jungle", "Space", "Fantasy", "Ocean"].map((label) => (
            <label key={label} className="block text-sm mb-1">
              <input type="checkbox" className="mr-2" /> {label}
            </label>
          ))}
        </div>

        {/* Date Range */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Date Range</p>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <button className="text-sm border border-gray-200 px-2 py-1 rounded">
              Last 7 days
            </button>
            <button className="text-sm border border-gray-200 px-2 py-1 rounded">
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
              className="w-full text-sm border border-gray-200 pl-10 pr-2 py-1 rounded"
            />
            <Calendar className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={onApply}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full mt-4"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default StoriesManagementModal;
