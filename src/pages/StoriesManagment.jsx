import { MoreVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import BasicTable from "../components/BasicTable";
import StoriesManagementModal from "../components/SroriesManagmentModal";
import PlayStoryModal from "../components/PlayStoryModal";
import PlayIcon from "../assets/icons/play.svg";
import RegenerateIcon from "../assets/icons/regenerate.svg";
import DeleteIcon from "../assets/icons/trash.svg";

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

const ActionsDropdown = ({ storyId, onPlay }) => {
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
            <button
              onClick={() => {
                onPlay();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-100"
            >
              <img src={PlayIcon} alt="Play" className="w-4 h-4" />
              <span>Play</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-100">
              <img src={RegenerateIcon} alt="Regenerate" className="w-4 h-4" />
              <span>Regenerate</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-100">
              <img src={DeleteIcon} alt="Delete" className="w-4 h-4" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const columns = [
  { key: "id", label: "ID", align: "text-center" },
  { key: "children", label: "Children", align: "text-left" },
  { key: "type", label: "Type", align: "text-center" },
  { key: "theme", label: "Theme", align: "text-center" },
  { key: "duration", label: "Duration", align: "text-center" },
  { key: "createdDates", label: "Created Dates", align: "text-center" },
  { key: "status", label: "Status", align: "text-center" },
  { key: "actions", label: "Actions", align: "text-center" },
];

const StoriesManagement = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showPlayModal, setShowPlayModal] = useState(false);

  const handleFilterClick = () => {
    setShowFilterModal(true);
  };

  const handlePlayClick = () => {
    setShowPlayModal(true);
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
      actions: <ActionsDropdown storyId="1001" onPlay={handlePlayClick} />,
    },
    {
      id: "1002",
      children: "Darrell Steward",
      type: "Semi",
      theme: "Space",
      duration: "2:34",
      createdDates: "8/30/14",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1002" onPlay={handlePlayClick} />,
    },
    {
      id: "1003",
      children: "Jenny Wilson",
      type: "Full",
      theme: "Fantasy",
      duration: "2:34",
      createdDates: "5/19/12",
      status: renderStatus("Incomplete"),
      actions: <ActionsDropdown storyId="1003" onPlay={handlePlayClick} />,
    },
    {
      id: "1004",
      children: "Esther Howard",
      type: "Semi",
      theme: "Ocean",
      duration: "2:34",
      createdDates: "9/4/12",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1004" onPlay={handlePlayClick} />,
    },
    {
      id: "1005",
      children: "Arlene McCoy",
      type: "Full",
      theme: "Jungle",
      duration: "2:34",
      createdDates: "5/27/15",
      status: renderStatus("Incomplete"),
      actions: <ActionsDropdown storyId="1005" onPlay={handlePlayClick} />,
    },
    {
      id: "1006",
      children: "Annette Black",
      type: "Full",
      theme: "Ocean",
      duration: "2:34",
      createdDates: "10/28/12",
      status: renderStatus("Incomplete"),
      actions: <ActionsDropdown storyId="1006" onPlay={handlePlayClick} />,
    },
    {
      id: "1007",
      children: "Dianne Russell",
      type: "Semi",
      theme: "Ocean",
      duration: "2:34",
      createdDates: "7/18/17",
      status: renderStatus("Incomplete"),
      actions: <ActionsDropdown storyId="1007" onPlay={handlePlayClick} />,
    },
    {
      id: "1008",
      children: "Guy Hawkins",
      type: "Full",
      theme: "Jungle",
      duration: "2:34",
      createdDates: "6/1/12",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1008" onPlay={handlePlayClick} />,
    },
    {
      id: "1009",
      children: "Cameron Williamson",
      type: "Semi",
      theme: "Jungle",
      duration: "2:34",
      createdDates: "7/27/13",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1009" onPlay={handlePlayClick} />,
    },
    {
      id: "1010",
      children: "Bessie Cooper",
      type: "Full",
      theme: "Jungle",
      duration: "2:34",
      createdDates: "5/7/16",
      status: renderStatus("Completed"),
      actions: <ActionsDropdown storyId="1010" onPlay={handlePlayClick} />,
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

      {showFilterModal && (
        <StoriesManagementModal
          onClose={() => setShowFilterModal(false)}
          onApply={(filters) => {
            console.log("Applied filters:", filters);
            setShowFilterModal(false);
          }}
        />
      )}

      {showPlayModal && (
        <PlayStoryModal onClose={() => setShowPlayModal(false)} />
      )}
    </div>
  );
};

export default StoriesManagement;
