// import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SubMenu from "./SubMenu";
import { Company } from "../constants";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [IsSubMenu, setIsSubMenu] = useState(false);

  const click = () => {
    alert("clicked !");
  };
  return (
    <nav className="w-full border-b  py-1 shadow-md border-[#0460D9]/50">
      <div
        className="bg-white px-2 mx-auto max-w-7xl h-[45px] 
      flex items-center justify-between"
      >
        <div className="flex items-center gap-5">
          {/* <span className="text-[#0460D9] text-2xl font-bold">AROGYA</span> */}
          <Link to={"/"}>
            <img src={Company.logo} width={100} height={100} alt="" />
          </Link>
          <div className="sm:flex items-center gap-5 hidden">
            <span
              className="text-[#0463DF] hover:text-[#044ba8]
            font-medium"
            >
              My-Appoiments
            </span>
            <span
              className="text-[#0463DF] hover:text-[#044ba8]
            font-medium"
            >
              Visit-Main
            </span>
          </div>
        </div>
        <div className="">
          <span className="text-[#0460D9] sm:hidden text-2xl font-bold">
            <FaBars />
          </span>
          <div className="sm:flex gap-2 items-center hidden">
            <Button
              title={`Sign In`}
              onClick={() => {
                click();
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
