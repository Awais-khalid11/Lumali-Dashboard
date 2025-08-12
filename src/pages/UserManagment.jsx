import { useState } from "react";
import BasicTable from "../components/BasicTable";
import UserFilterModal from "../components/UserFilterModal"; // New filter modal

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

import {
  Eye,
  MoreVertical,
  Trash2,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            <div className="flex items-center gap-2">View</div>
          </button>
          <div className="flex items-center gap-2 px-3 py-2    hover:bg-gray-100">
            Active
          </div>
          <div className="flex items-center gap-2 px-3 py-2    hover:bg-gray-100">
            Deactivate
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

const rawData = [
  {
    id: "1001",
    name: "Ralph Edwards",
    email: "georgia.young@example.com",
    children: "Ralph Edwards",
    plan: "Premium",
    created: "2017-12-04",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1001" />,
  },
  {
    id: "1002",
    name: "Darrell Steward",
    email: "kenzi.lawson@example.com",
    children: "Darrell Steward",
    plan: "Basic",
    created: "2014-08-30",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1002" />,
  },
  {
    id: "1003",
    name: "Jenny Wilson",
    email: "felicia.reid@example.com",
    children: "Jenny Wilson",
    plan: "Freemium",
    created: "2012-05-09",
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
  {
    id: "1006",
    name: "Arlene McCoy",
    email: "tanya.hill@example.com",
    children: "Arlene McCoy",
    plan: "Basic",
    created: "5/27/15",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1005" />,
  },
  {
    id: "1007",
    name: "Arlene McCoy",
    email: "tanya.hill@example.com",
    children: "Arlene McCoy",
    plan: "Basic",
    created: "5/27/15",
    status: renderStatus("Inactive"),
    action: <CustomDropdown userId="1005" />,
  },
  {
    id: "1008",
    name: "Arlene McCoy",
    email: "tanya.hill@example.com",
    children: "Arlene McCoy",
    plan: "Basic",
    created: "5/27/15",
    status: renderStatus("Inactive"),
    action: <CustomDropdown userId="1005" />,
  },
  {
    id: "1009",
    name: "Jenny Wilson",
    email: "tanya.hill@example.com",
    children: "Jenny Wilson",
    plan: "Basic",
    created: "5/27/15",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1005" />,
  },
  {
    id: "1010",
    name: "Arlene McCoy",
    email: "tanya.hill@example.com",
    children: "Arlene McCoy",
    plan: "Basic",
    created: "5/27/15",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1005" />,
  },
  {
    id: "1011",
    name: "Jenny Wilson",
    email: "tanya.hill@example.com",
    children: "Jenny Wilson",
    plan: "Basic",
    created: "5/27/15",
    status: renderStatus("Active"),
    action: <CustomDropdown userId="1005" />,
  },
  // ... Add the rest of your user data here
];

const UserManagement = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState(null);

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
  };

  const filterData = () => {
    if (!filters) return rawData;

    return rawData.filter((item) => {
      const { status, category, plan, dateRange } = filters;

      const matchStatus =
        !status.length ||
        status.includes("All") ||
        status.some((s) =>
          item.status?.props?.children?.toLowerCase().includes(s.toLowerCase())
        );

      const matchPlan = !plan.length || plan.includes(item.plan);

      const matchDate =
        !dateRange[0] ||
        !dateRange[1] ||
        (new Date(item.created) >= new Date(dateRange[0]) &&
          new Date(item.created) <= new Date(dateRange[1]));

      return matchStatus && matchPlan && matchDate;
    });
  };

  return (
    <div>
      <BasicTable
        title="Users Management"
        columns={columns}
        data={filterData()}
        showPagination={true}
        showSearch={true}
        showFilter={true}
        filterButtonText="Filters"
        onFilterClick={() => setIsFilterOpen(true)}
      />

      <UserFilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={handleApplyFilters}
      />
    </div>
  );
};

export default UserManagement;
