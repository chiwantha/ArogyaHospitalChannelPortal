import React from "react";
import SidebarItem from "./SidebarItem";
import { RiDashboardFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { useSidebar } from "../../Context/SidebarContext";

const sideBar = [
  {
    title: "Dashboard",
    link: "/admin/dashboard",
    icon: <RiDashboardFill />,
  },
  {
    title: "Appointments",
    submenu: [
      {
        title: "List",
        link: "/admin/adminap",
        icon: <HiDocumentText />,
      },
      {
        title: "Removed",
        link: "/admin/adminaprm",
        icon: <FaTrashAlt />,
      },
    ],
  },
  {
    title: "User Home",
    link: "/",
    icon: <GoHomeFill />,
  },
];

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <div
      className={`bg-[#0463DF]  rounded-lg
  flex flex-col ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-80 sm:translate-x-0"
  }`}
    >
      {sideBar.map((item, index) => (
        <SidebarItem
          key={index}
          title={item.title}
          link={item.link}
          icon={item.icon}
          submenu={item.submenu}
        />
      ))}
    </div>
  );
};

export default Sidebar;
