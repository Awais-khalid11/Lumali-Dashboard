import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar, FiX } from "react-icons/fi";

const UserFilterModal = ({ isOpen, onClose, onApply }) => {
  const [status, setStatus] = useState([]);
  const [plan, setPlan] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const toggleOption = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter((v) => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleApply = () => {
    onApply({ status, plan, dateRange });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl max-w-full w-full max-h-[90vh] overflow-y-auto sm:w-[400px] p-5 relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <FiX className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold mb-5">Filter</h2>

        {/* Status Filter */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Filter By Latest Update</p>
          <div className="grid grid-cols-2 gap-2">
            {["All", "Pending", "Approved", "Rejected"].map((item) => (
              <label key={item} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={status.includes(item)}
                  onChange={() => toggleOption(status, setStatus, item)}
                  className="mr-2"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Plan Filter */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Plan Type</p>
          <div className="grid grid-cols-2 gap-2">
            {["Freemium", "Basic", "Premium"].map((item) => (
              <label key={item} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={plan.includes(item)}
                  onChange={() => toggleOption(plan, setPlan, item)}
                  className="mr-2"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Date Range Picker - Updated to match StoriesManagementModal style */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Date Range</p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              onClick={() => {
                const end = new Date();
                const start = new Date();
                start.setDate(start.getDate() - 7);
                setDateRange([start, end]);
              }}
              className="text-xs sm:text-sm border border-gray-200 px-2 py-1.5 rounded hover:bg-gray-50"
            >
              Last 7 days
            </button>
            <button
              onClick={() => {
                const end = new Date();
                const start = new Date();
                start.setDate(start.getDate() - 30);
                setDateRange([start, end]);
              }}
              className="text-xs sm:text-sm border border-gray-200 px-2 py-1.5 rounded hover:bg-gray-50"
            >
              Last 30 days
            </button>
          </div>
          <div className="relative">
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              placeholderText="From - To"
              className="w-full text-xs sm:text-sm border border-gray-200 pl-9 pr-2 py-1.5 rounded"
            />
            <FiCalendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApply}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full mt-4 text-sm sm:text-base"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default UserFilterModal;
