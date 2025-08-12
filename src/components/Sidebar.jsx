import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Logo from "../assets/images/Logo.svg";
import DashboardA from "../assets/icons/dashboard-a.svg";
import DashboardB from "../assets/icons/dashboard-b.svg";
import UserA from "../assets/icons/user-a.svg";
import UserB from "../assets/icons/user-b.svg";
import StoriesA from "../assets/icons/sm-a.svg";
import StoriesB from "../assets/icons/sm-b.svg";
import SubsA from "../assets/icons/subscription-a.svg";
import SubsB from "../assets/icons/subscription-b.svg";
import SettingA from "../assets/icons/setting-a.svg";
import SettingB from "../assets/icons/setting-b.svg";
import Logout from "../assets/icons/logout.svg";

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    {
      id: 1,
      name: "Dashboard",
      iconA: DashboardA,
      iconB: DashboardB,
      link: "/dashboard",
    },
    {
      id: 2,
      name: "User Managment",
      iconA: UserA,
      iconB: UserB,
      link: "/user",
    },
    {
      id: 3,
      name: "Stories Managment",
      iconA: StoriesA,
      iconB: StoriesB,
      link: "/stories",
    },
    {
      id: 4,
      name: "Subscriptions",
      iconA: SubsA,
      iconB: SubsB,
      link: "/subscriptions",
    },
    {
      id: 7,
      name: "Settings",
      iconA: SettingA,
      iconB: SettingB,
      link: "/settings",
    },
  ];

  const logoutButton = (
    <NavLink
      to="/logout"
      className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg transition border border-[#FFFFFF33] hover:bg-white/10 bg-[#EFE1BC1A] text-white"
      onClick={onClose}
    >
      <ReactSVG src={Logout} className="w-5 h-5" />
      <span>Logout</span>
    </NavLink>
  );

  return (
    <div
      className={`fixed md:relative z-50 transition-all duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 pl-0 pt-0 md:pl-2.5 md:pt-2.5`}
    >
      <div
        className="h-screen md:h-[calc(100vh-32px)] w-66 text-white px-5 py-6 flex flex-col rounded-[10px]"
        style={{ backgroundColor: "#081E35" }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <ReactSVG src={Logo} className="h-10 w-auto" />
        </div>

        {/* Nav Items */}
        <nav className="space-y-2 mt-5">
          {navItems.map(({ id, name, link, iconA, iconB }) => (
            <NavLink
              key={id}
              to={link}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition border border-[#FFFFFF33] ${
                  isActive
                    ? "bg-[#EBA91D] text-white font-semibold"
                    : "hover:bg-white/10"
                }`
              }
              onClick={onClose}
            >
              {({ isActive }) => (
                <>
                  <ReactSVG
                    src={isActive ? iconA : iconB}
                    className="w-5 h-5"
                  />
                  <span>{name}</span>
                </>
              )}
            </NavLink>
          ))}

          {/* ✅ Mobile Logout */}
          <div className="block md:hidden">{logoutButton}</div>
        </nav>

        {/* ✅ Desktop Logout */}
        <div className="hidden md:block mt-auto">{logoutButton}</div>
      </div>
    </div>
  );
};

export default Sidebar;
