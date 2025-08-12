import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiInboxIn } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";

const BasicTable = ({
  title,
  columns,
  data,
  showSearch = true,
  showFilter = true,
  showPagination = false,
  showDatePicker = false,
  filterButtonText = "Filters",
  itemsPerPage = 10,
  showExportBtn = false,
  customButton,
  onFilterClick,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = showPagination
    ? filteredData.slice(startIndex, endIndex)
    : filteredData;

  const goToPage = (page) =>
    page >= 1 && page <= totalPages && setCurrentPage(page);
  const goToPrevious = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          {title}
        </h1>

        {(showSearch || showFilter || customButton) && (
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto">
            {showSearch && (
              <div className="relative w-full md:w-[300px]">
                <input
                  type="search"
                  name="tablesearch"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 pl-10 text-sm focus:border-blue-500 focus:outline-none"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              </div>
            )}

            <div className="flex flex-row items-center gap-2.5">
              {showFilter && (
                <button
                  onClick={onFilterClick}
                  className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                >
                  <IoFilterOutline className="text-[#EBA91D]" />
                  <span className="text-gray-800 font-medium hidden md:inline">
                    {filterButtonText}
                  </span>
                </button>
              )}

              {showDatePicker && (
                <div className="relative bg-white rounded-lg border border-gray-200">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="w-full py-2.5 pl-11 pr-3.5 text-sm rounded-lg outline-none"
                    placeholderText="Pick a date"
                    dateFormat="yyyy-MM-dd"
                  />
                  <img
                    src="/assets/icons/calendar.svg"
                    alt="Calendar"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                </div>
              )}

              {customButton && <div>{customButton}</div>}
            </div>
          </div>
        )}
      </div>

      {/* Table Container */}
      <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
        <div className="overflow-x-auto">
          {/* Use border-collapse for crisp grid borders */}
          <table className="w-full min-w-[800px] border-collapse">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className={`px-6 py-3 ${
                      col.align ?? "text-left"
                    } text-xs font-bold text-gray-900 uppercase tracking-wider border border-gray-200`}
                  >
                    {typeof col.label === "string" ? col.label : col.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Remove divide-y; add per-cell borders instead */}
            <tbody className="bg-white">
              {currentData.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-gray-50">
                  {columns.map((col, colIdx) => (
                    <td
                      key={colIdx}
                      className={`px-6 py-4 whitespace-nowrap text-sm ${
                        col.align ?? "text-left"
                      } border border-gray-200`}
                    >
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showExportBtn && (
          <div className="px-6 py-4 border-t border-gray-200">
            <button className="w-full bg-gray-900 flex justify-center items-center gap-2.5 rounded-lg text-white text-center py-2.5 px-4 hover:bg-gray-800 transition-colors">
              <CiInboxIn />
              Export CSV
            </button>
          </div>
        )}

        {showPagination && totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                  currentPage === 1
                    ? "text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50"
                    : "text-gray-700 border-gray-300 hover:bg-gray-50 bg-white"
                }`}
              >
                Previous
              </button>

              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                  currentPage === totalPages
                    ? "text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50"
                    : "text-gray-700 border-gray-300 hover:bg-gray-50 bg-white"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicTable;
