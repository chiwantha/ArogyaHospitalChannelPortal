import React from "react";
import { Company } from "../../../constants";
import Button from "../../../components/common/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const Navigate = useNavigate();

  const [formData, setformData] = useState({
    username: "",
    password: "",
    role: 1,
  });

  console.log(formData);

  return (
    <div className="h-screen w-full flex items-center justify-center px-4">
      <div className="bg-slate-100 p-2 rounded-lg shadow-lg border border-gray-200">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          {/* Image */}
          <div
            className="md:aspect-square flex items-center
           bg-[#FFC935] rounded-lg justify-center p-8 md:p-4"
          >
            <img
              src={Company.logo}
              alt="ArogyaHospitals.png"
              width={100}
              height={100}
              className="w-[250px]"
            />
          </div>
          {/* Inputs */}
          <div className="flex flex-col justify-center items-center bg-white rounded-lg space-y-6 p-6">
            <span className="text-4xl font-bold text-[#0560D9] uppercase">
              Log-In
            </span>
            <div className="flex flex-col gap-2 w-full">
              {/* username */}
              <input
                required
                maxLength={50}
                type="text"
                className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                placeholder="username"
                name="username"
                onChange={(e) => {
                  setformData({ ...formData, [e.target.name]: e.target.value });
                }}
              />
              {/* password */}
              <input
                required
                maxLength={100}
                type="password"
                className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                name="password"
                onChange={(e) => {
                  setformData({ ...formData, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-2">
              <Button
                title={"Home"}
                pd={"px-4 py-2"}
                bg={"bg-[#4CB847] text-white hover:bg-green-600"}
              />
              <Button
                title={"Login"}
                pd={"px-4 py-2"}
                onClick={() => {
                  Navigate("/admin");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
