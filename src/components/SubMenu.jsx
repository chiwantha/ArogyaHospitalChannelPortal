import React from "react";
import { Link } from "react-router-dom";

const SubMenu = () => {
  const subMenu = [
    {
      title: "My Appointments",
      link: "/",
    },
    {
      title: "Back to Main Site",
      alink: "https://www.arogyahospitals.lk",
    },
    {
      title: "About Portal",
      link: "/",
    },
  ];

  return (
    <div className="w-full px-2 fixed">
      <div
        className="mx-auto max-w-7xl p-2 bg-gray-100 shadow-md
      border border-[#0560D9] rounded-lg flex flex-col items-center"
      >
        {subMenu.map((item, index) => (
          <span key={index} className="hover:font-bold">
            {item.alink ? (
              <a href={item.alink} target="">
                {item.title}
              </a>
            ) : (
              <Link to={item.link}>{item.title}</Link>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
