import {
  Eye,
  MoreVertical,
  Trash2,
  ChevronRight,
  ChevronDown,
  Check,
  X,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicTable from "../components/BasicTable";

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
          <button
            onClick={() => navigate(`/user/${userId}`)}
            className="flex justify-between items-center px-3 py-2 w-full hover:bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              View
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          <div className="flex justify-between items-center px-3 py-2 hover:bg-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Active
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-gray-100">
            <Trash2 className="w-4 h-4" />
            Delete
          </div>
        </div>
      )}
    </div>
  );
};

const columns = [
  { key: "id", label: "ID", align: "text-center" },
  { key: "name", label: "Name", align: "text-left" },
  { key: "email", label: "Email", align: "text-left" },
  { key: "children", label: "Children", align: "text-left" },
  { key: "plan", label: "Plan", align: "text-center" },
  { key: "created", label: "Created", align: "text-center" },
  { key: "status", label: "Status", align: "text-center" },
  { key: "action", label: "Actions", align: "text-center" },
];

const data = [
  {
    id: "1001",
    name: "Ralph Edwards",
    email: "georgia.young@example.com",
    children: "Ralph Edwards",
    plan: "Premium",
    created: "12/4/17",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1001" />,
  },
  {
    id: "1002",
    name: "Darrell Steward",
    email: "kenzi.lawson@example.com",
    children: "Darrell Steward",
    plan: "Basic",
    created: "8/30/14",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1002" />,
  },
  {
    id: "1003",
    name: "Jenny Wilson",
    email: "felicia.reid@example.com",
    children: "Jenny Wilson",
    plan: "Freemium",
    created: "5/9/12",
    status: renderStatus("Inactive"),
    action: <CustomDropdown userId="1003" />,
  },
  {
    id: "1004",
    name: "Esther Howard",
    email: "nathan.roberts@example.com",
    children: "Esther Howard",
    plan: "Premium",
    created: "9/4/12",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1004" />,
  },
  {
    id: "1005",
    name: "Arlene McCoy",
    email: "tanya.hill@example.com",
    children: "Arlene McCoy",
    plan: "Basic",
    created: "5/27/15",
    status: renderStatus("Inactive"),
    action: <CustomDropdown userId="1005" />,
  },
];

const UserManagement = () => {
  return (
    <div>
      <BasicTable
        title="Users Management"
        columns={columns}
        data={data}
        showPagination={true}
        showSearch={true}
      />
    </div>
  );
};

export default UserManagement;
