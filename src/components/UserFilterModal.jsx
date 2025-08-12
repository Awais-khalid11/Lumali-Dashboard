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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[320px] md:w-[360px] rounded-xl p-5 relative shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FiX size={18} />
        </button>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter</h2>

        {/* Status Filter */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Filter By Latest Update
          </label>
          {["All", "Pending", "Approved", "Rejected"].map((item) => (
            <div key={item} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={status.includes(item)}
                onChange={() => toggleOption(status, setStatus, item)}
                className="form-checkbox text-blue-600"
              />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Plan Filter */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Plan Type
          </label>
          {["Freemium", "Basic", "Premium"].map((item) => (
            <div key={item} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={plan.includes(item)}
                onChange={() => toggleOption(plan, setPlan, item)}
                className="form-checkbox text-blue-600"
              />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Date Range Picker */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Date Range
          </label>
          <div className="relative">
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              isClearable
              placeholderText="From - To"
              className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
              popperPlacement="bottom"
              withPortal
            />
            <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
          </div>
        </div>

        {/* Single Button */}
        <button
          onClick={handleApply}
          className="w-full bg-orange-500 text-white text-sm font-medium py-2.5 rounded-full hover:bg-orange-600 transition-colors"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default UserFilterModal;
