import SidebarItem from "./SidebarItem";
import { RiDashboardFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { MdEventNote, MdAssessment } from "react-icons/md";
import { useSidebar } from "../../Context/SidebarContext";

const sideBar = [
  {
    title: "Portal",
    link: "/",
    icon: <GoHomeFill />,
  },
  {
    title: "Dashboard",
    link: "/admin",
    icon: <RiDashboardFill />,
  },
  {
    title: "Appointments",
    submenu: [
      {
        title: "List",
        link: "appointments",
        icon: <MdEventNote />,
      },
      {
        title: "Removed",
        link: "removed",
        icon: <FaTrashAlt />,
      },
    ],
  },
  {
    title: "Reports",
    submenu: [
      {
        title: "Appointments",
        link: "appointments",
        icon: <MdAssessment />,
      },
      {
        title: "Financial",
        link: "appointments",
        icon: <HiDocumentText />,
      },
    ],
  },
  {
    title: "Settings",
    link: "/admin/settings",
    icon: <FiSettings />,
  },
];

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <div
      className={`
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-80 sm:translate-x-0"}
     transition-transform duration-300 flex flex-col gap-4 z-50 overflow-y-auto`}
    >
      {/* top part */}
      <div className="rounded-lg bg-[#0463DF] p-4 space-y-4 flex flex-col justify-center items-center">
        <img
          src={"/doctors/default.png"}
          className="rounded-full aspect-square"
          width={100}
          height={100}
          alt="admin.png"
        />
        <div className="flex flex-col">
          <span className="text-center uppercase text-sm text-white font-semibold">
            Kasun Chiwantha
          </span>
          <span className="text-center uppercase text-xs text-slate-300 ">
            ADMIN
          </span>
        </div>
      </div>
      {/* sidebarlinks */}
      <div
        className={`bg-slate-50 rounded-lg text-[#0463DF]
        flex flex-col overflow-hidden
        
      `}
      >
        {sideBar.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            link={item.link}
            icon={item.icon}
            submenu={item.submenu}
            color={item.bg ? item.bg : false}
          />
        ))}
      </div>
      {/* bottom part */}
      <div className="rounded-lg bg-[#0463DF] p-4 space-y-4">
        <p className="text-sm text-slate-200">
          This is a beta version of the Admin Panel for the Channeling
          Management Portal
        </p>
        <div className="flex flex-col">
          <span className="text-slate-300">Developed By</span>
          <span className="text-[#00C950] font-bold">K-Chord (Pvt) Ltd</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
