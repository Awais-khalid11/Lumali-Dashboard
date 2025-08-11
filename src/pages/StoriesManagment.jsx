import { MoreVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import BasicTable from "../components/BasicTable";

const renderStatus = (status) => {
  const statusStyles = {
    Completed: "bg-green-100 text-green-800",
    Incomplete: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
        statusStyles[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
};

const ActionsDropdown = ({ storyId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <MoreVertical className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
              View Details
            </button>
            <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
              Edit Story
            </button>
            <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
              Duplicate
            </button>
            <hr className="my-1" />
            <button className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "children",
    label: "Children",
  },
  {
    key: "type",
    label: "Type",
  },
  {
    key: "theme",
    label: "Theme",
  },
  {
    key: "duration",
    label: "Duration",
  },
  {
    key: "createdDates",
    label: "Created Dates",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const StoriesManagement = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleFilterClick = () => {
    setShowFilterModal(true);
    // Here you would open your filter modal
    console.log("Opening filter modal...");
  };

  const data = [
    {
      id: "1001",
      children: "Ralph Edwards",
      type: "Full",
      theme: "Jungle",
      duration: "2:34",
      createdDates: "12/4/17",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1001" />,
    },
    {
      id: "1002",
      children: "Darrell Steward",
      type: "Semi",
      theme: "Space",
      duration: "2:34",
      createdDates: "8/30/14",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1002" />,
    },
    {
      id: "1003",
      children: "Jenny Wilson",
      type: "Full",
      theme: "Fantasy",
      duration: "2:34",
      createdDates: "5/19/12",
      status: renderStatus("Incomplete"),
      actions: <ActionsDropdown storyId="1003" />,
    },
    {
      id: "1004",
      children: "Esther Howard",
      type: "Semi",
      theme: "Ocean",
      duration: "2:34",
      createdDates: "9/4/12",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1004" />,
    },
    {
      id: "1005",
      children: "Arlene McCoy",
      type: "Full",
      theme: "Jungle",
      duration: "2:34",
      createdDates: "5/27/15",
      status: renderStatus("Incomplete"),
      actions: <ActionsDropdown storyId="1005" />,
    },
    {
      id: "1006",
      children: "Annette Black",
      type: "Full",
      theme: "Ocean",
      duration: "2:34",
      createdDates: "10/28/12",
      status: renderStatus("Incomplete"),
      actions: <ActionsDropdown storyId="1006" />,
    },
    {
      id: "1007",
      children: "Dianne Russell",
      type: "Semi",
      theme: "Ocean",
      duration: "2:34",
      createdDates: "7/18/17",
      status: renderStatus("Incomplete"),
      actions: <ActionsDropdown storyId="1007" />,
    },
    {
      id: "1008",
      children: "Guy Hawkins",
      type: "Full",
      theme: "Jungle",
      duration: "2:34",
      createdDates: "6/1/12",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1008" />,
    },
    {
      id: "1009",
      children: "Cameron Williamson",
      type: "Semi",
      theme: "Jungle",
      duration: "2:34",
      createdDates: "7/27/13",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1009" />,
    },
    {
      id: "1010",
      children: "Bessie Cooper",
      type: "Full",
      theme: "Jungle",
      duration: "2:34",
      createdDates: "5/7/16",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1010" />,
    },
    {
      id: "1011",
      children: "Bessie Cooper",
      type: "Full",
      theme: "Jungle",
      duration: "2:34",
      createdDates: "5/7/16",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1010" />,
    },
  ];

  return (
    <div>
      <BasicTable
        title="Stories Management"
        columns={columns}
        data={data}
        showPagination={true}
        showDatePicker={false}
        onFilterClick={handleFilterClick}
        itemsPerPage={10}
      />

      {/* Filter Modal would go here */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Filter Options</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select className="w-full p-2 border border-gray-200 rounded-md">
                  <option value="">All</option>
                  <option value="completed">Completed</option>
                  <option value="incomplete">Incomplete</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select className="w-full p-2 border border-gray-200 rounded-md">
                  <option value="">All</option>
                  <option value="full">Full</option>
                  <option value="semi">Semi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select className="w-full p-2 border border-gray-200 rounded-md">
                  <option value="">All</option>
                  <option value="jungle">Jungle</option>
                  <option value="space">Space</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="ocean">Ocean</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowFilterModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Apply filters logic here
                  setShowFilterModal(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoriesManagement;
