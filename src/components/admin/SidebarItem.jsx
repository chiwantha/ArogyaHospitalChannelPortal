import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const SidebarItem = ({ title, link, submenu, icon }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="font-semibold text-sm">
      {!submenu ? (
        <Link to={link}>
          <div
            className="px-4 py-4 hover:bg-slate-100/20
    text-slate-100 flex gap-2 items-center"
          >
            <span className="text-lg ">{icon}</span>
            {title}
          </div>
        </Link>
      ) : (
        <div className="">
          <div
            className="px-4 py-4 hover:bg-slate-100/20 
    text-slate-100 flex justify-between items-center gap-6"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            <div className="">{title}</div>
            {!isOpen ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          {isOpen && (
            <div className="">
              {submenu.map((item, index) => (
                <Link to={item.link} key={index}>
                  <div
                    className="pl-6 pr-4 py-4 hover:bg-slate-100/20
    text-slate-100 flex gap-2 items-center"
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
