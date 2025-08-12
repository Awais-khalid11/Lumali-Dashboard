import React, { useState } from "react";
import { FiX, FiCalendar } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SubscriptionModal = ({ onClose, onApply }) => {
  const [planType, setPlanType] = useState([]);
  const [status, setStatus] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const toggleOption = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter((v) => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handlePreset = (days) => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - days);
    setDateRange([start, end]);
  };

  const handleApply = () => {
    onApply({ planType, status, dateRange });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-xl w-full max-w-xs p-5 relative shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FiX size={18} />
        </button>

        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Filter Subscriptions
        </h2>

        {/* Plan Type */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Plan Type</p>
          {["Freemium", "Basic", "Premium"].map((item) => (
            <div key={item} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={planType.includes(item)}
                onChange={() => toggleOption(planType, setPlanType, item)}
                className="form-checkbox text-orange-500"
              />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Status</p>
          {["Active", "Expire", "Trial"].map((item) => (
            <div key={item} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={status.includes(item)}
                onChange={() => toggleOption(status, setStatus, item)}
                className="form-checkbox text-orange-500"
              />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Date Presets */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <button
            onClick={() => handlePreset(7)}
            className="border text-sm rounded-md px-2 py-1 hover:bg-gray-100"
          >
            Last 7 days
          </button>
          <button
            onClick={() => handlePreset(30)}
            className="border text-sm rounded-md px-2 py-1 hover:bg-gray-100"
          >
            Last 30 days
          </button>
          <button
            onClick={() => handlePreset(90)}
            className="border text-sm rounded-md px-2 py-1 hover:bg-gray-100"
          >
            Last 90 days
          </button>
          <button
            onClick={() => setDateRange([null, null])}
            className="border text-sm rounded-md px-2 py-1 hover:bg-gray-100"
          >
            All Time
          </button>
        </div>

        {/* Date Picker */}
        <div className="relative mb-6">
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            isClearable
            placeholderText="From - To"
            className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring focus:border-orange-400"
            popperPlacement="bottom"
            withPortal
          />
          <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
        </div>

        {/* Apply Now Button */}
        <button
          onClick={handleApply}
          className="w-full bg-orange-500 text-white text-sm font-semibold py-2.5 rounded-full hover:bg-orange-600 transition"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionModal;
