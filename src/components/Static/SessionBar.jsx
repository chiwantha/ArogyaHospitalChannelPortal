import React from "react";
import Button from "./Button";
import { Company } from "../../constants";

const SessionBar = ({
  startTime,
  endTime,
  fee,
  doctorId,
  sessionId,
  session,
}) => {
  return (
    <div
      className="w-full grid md:grid-cols-4 rounded-lg shadow-md border bg-slate-50 
     hover:border-[#0460D9]/50 border-gray-300 transition-colors duration-300 grid-cols-1 "
    >
      {/* HospitalImage */}
      {/* <div className="md:rounded-l-lg md:rounded-r-none rounded-lg bg-[#FFC935] p-2 flex items-center justify-center">
        <img
          src={Company.logo}
          width={100}
          height={100}
          className="aspect-auto  object-center "
          alt="logo.png"
        />
      </div> */}
      <div
        className="flex flex-col items-center justify-center
        border-gray-300 sm:border-r"
      >
        <span className="text-xl font-black text-[#0560D9]">Monday</span>
      </div>
      <div
        className="col-span-3 grid grid-cols-2 sm:grid-cols-3 p-4 space-y-4
      md:space-y-0"
      >
        {/* Time */}
        <div
          className="flex items-center flex-col justify-center
        border-gray-300 border-r"
        >
          <span className="text-sm text-gray-700  font-medium">Time</span>
          <span className="text-[18px] font-black text-[#0560D9]">
            15:00 : 17:00
          </span>
          <span className="text-sm font-semibold text-gray-600">
            Morning Session
          </span>
        </div>
        {/* Prices */}
        <div
          className="flex flex-col items-center justify-center
        border-gray-300 sm:border-r"
        >
          <span className="text-sm font-medium text-gray-700">Fee</span>
          <span className="text-[18px] font-bold text-green-600">
            Rs 2600.00
          </span>
        </div>
        {/* Book */}
        <div className="flex flex-col items-center justify-center col-span-full sm:col-span-1">
          <Button
            title={"Book Now"}
            bg={"bg-[#4DB847] text-white  px-2 hover:bg-green-600 py-1"}
          />
        </div>
      </div>
    </div>
  );
};

export default SessionBar;
