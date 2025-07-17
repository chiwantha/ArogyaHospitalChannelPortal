import React from "react";
import DashValueCard from "./DashValueCard";
// import { makeRequest } from "../../../axios";
// import { useQuery } from "@tanstack/react-query";
import Pending from "../../../assets/res/dash/pending.png";
import Reject from "../../../assets/res/dash/reject.png";
import Approve from "../../../assets/res/dash/approve.png";
import Total from "../../../assets/res/dash/total.png";

const DashCardGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Appointment Pending */}
      <DashValueCard link={true} icon={Pending} title={"Pending"} />
      {/* Appointment Addroved */}
      <DashValueCard link={true} icon={Approve} title={"Approved"} />
      {/* Appointment Rejected */}
      <DashValueCard link={true} icon={Reject} title={"Removed"} />
      {/* Appointment Total */}
      <DashValueCard link={true} icon={Total} title={"Total"} />
    </div>
  );
};

export default DashCardGrid;
