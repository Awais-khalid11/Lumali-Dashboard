import {
  Eye,
  MoreVertical,
  Trash2,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicTable from "../components/BasicTable";
import SubscriptionModal from "../components/SubscriptionModal";
import ViewIcon from "../assets/icons/edit.svg";
import CancelIcon from "../assets/icons/close.svg";

const renderStatus = (status) => {
  const styles = {
    Active: "bg-[#0676471A] text-[#067647] border-[#067647]",
    Inactive: "bg-[#F900001A] text-[#F90000] border-[#F90000]",
  };

  return (
    <span className={`text-sm px-3 py-1 rounded-full border ${styles[status]}`}>
      {status}
    </span>
  );
};

const CustomDropdown = ({ userId }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)}>
        <MoreVertical className="h-4 w-4 text-gray-600" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
          <button className="flex justify-between items-center px-3 py-2 w-full hover:bg-gray-100">
            <div className="flex items-center gap-2">
              <img src={ViewIcon} alt="View/Edit" className="w-4 h-4" />
              Edit
            </div>
          </button>
          <div className="flex items-center gap-2 px-3 py-2    hover:bg-gray-100">
            <img src={CancelIcon} alt="Cancel" className="w-4 h-4" />
            Cancel
          </div>
        </div>
      )}
    </div>
  );
};

const columns = [
  { key: "id", label: "ID", align: "text-center" },
  { key: "name", label: "Name", align: "text-left" },
  { key: "plan", label: "Plan", align: "text-center" },
  { key: "startDate", label: "Start Date", align: "text-center" },
  { key: "expireDate", label: "Expire Date", align: "text-center" },
  { key: "children", label: "Children", align: "text-center" },
  { key: "status", label: "Status", align: "text-center" },
  { key: "action", label: "Actions", align: "text-center" },
];

const data = [
  {
    id: "1001",
    name: "Ralph Edwards",
    plan: "Premium",
    startDate: "5/27/15",
    expireDate: "12/4/17",
    children: "2",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1001" />,
  },
  {
    id: "1002",
    name: "Darrell Steward",
    plan: "Basic",
    startDate: "9/23/16",
    expireDate: "8/30/14",
    children: "2",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1002" />,
  },
  {
    id: "1003",
    name: "Jenny Wilson",
    plan: "Freemium",
    startDate: "8/16/13",
    expireDate: "5/9/12",
    children: "0",
    status: renderStatus("Inactive"),
    action: <CustomDropdown userId="1003" />,
  },
  {
    id: "1004",
    name: "Esther Howard",
    plan: "Premium",
    startDate: "12/10/13",
    expireDate: "9/4/12",
    children: "1",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1004" />,
  },
  {
    id: "1005",
    name: "Arlene McCoy",
    plan: "Basic",
    startDate: "1/28/17",
    expireDate: "5/27/15",
    children: "3",
    status: renderStatus("Inactive"),
    action: <CustomDropdown userId="1005" />,
  },
  {
    id: "1006",
    name: "Annette Black",
    plan: "Premium",
    startDate: "1/15/12",
    expireDate: "10/28/12",
    children: "2",
    status: renderStatus("Inactive"),
    action: <CustomDropdown userId="1006" />,
  },
  {
    id: "1007",
    name: "Dianne Russell",
    plan: "Freemium",
    startDate: "10/28/12",
    expireDate: "7/18/17",
    children: "1",
    status: renderStatus("Inactive"),
    action: <CustomDropdown userId="1007" />,
  },
  {
    id: "1008",
    name: "Guy Hawkins",
    plan: "Premium",
    startDate: "5/19/12",
    expireDate: "6/2/19",
    children: "0",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1008" />,
  },
  {
    id: "1009",
    name: "Cameron Williamson",
    plan: "Basic",
    startDate: "5/7/16",
    expireDate: "7/27/13",
    children: "3",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1009" />,
  },
  {
    id: "1010",
    name: "Bessie Cooper",
    plan: "Premium",
    startDate: "5/30/14",
    expireDate: "5/7/16",
    children: "2",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1010" />,
  },
];

const SubscriptionManagement = () => {
  const [showModal, setShowModal] = useState(false); // ✅ Manage modal state

  return (
    <div>
      <BasicTable
        title="Subscriptions Management"
        columns={columns}
        data={data}
        showPagination={true}
        showSearch={true}
        onFilterClick={() => setShowModal(true)} // ✅ Trigger modal on filter click
      />

      {showModal && (
        <SubscriptionModal
          onClose={() => setShowModal(false)}
          onApply={() => {
            // Add your filtering logic here
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default SubscriptionManagement;
