// import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Company } from "../../constants";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const Navbar = () => {
  const [IsSubMenu, setIsSubMenu] = useState(false);

  const click = () => {
    toast.info("Comming Soon !", {
      position: "top-center",
    });
  };
  return (
    <nav className="w-full border-b  py-1 shadow-md border-[#0460D9]/50">
      <div
        className="bg-white px-2 mx-auto max-w-7xl h-[45px] 
      flex items-center justify-between"
      >
        {/* <span className="text-[#0460D9] text-2xl font-bold">AROGYA</span> */}
        <Link to={"/admin"}>
          <img src={Company.logo} width={100} height={100} alt="" />
        </Link>

        <div className="">
          <span
            className="text-[#0460D9] sm:hidden text-2xl font-bold"
            onClick={() => {
              setIsSubMenu(!IsSubMenu);
            }}
          >
            {IsSubMenu ? <IoClose /> : <FaBars />}
          </span>
          <div className="sm:flex gap-2 items-center hidden">
            <Button
              bg={`bg-slate-200 text-[#0560D9]`}
              title={`Hi, Admin`}
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
