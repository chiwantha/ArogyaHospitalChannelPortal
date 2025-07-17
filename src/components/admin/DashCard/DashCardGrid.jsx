import React from "react";
import DashValueCard from "./DashValueCard";
import { makeRequest } from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import Pending from "../../../assets/res/dash/pending.png";
import Reject from "../../../assets/res/dash/reject.png";
import Approve from "../../../assets/res/dash/approve.png";
import Total from "../../../assets/res/dash/total.png";
import Doctor from "../../../assets/res/dash/doctor.png";
import Doctors_No_Session from "../../../assets/res/dash/doctors_no_session.png";
import Session from "../../../assets/res/dash/session.png";
import Sale from "../../../assets/res/dash/sale.png";
import Skeleton from "../../common/Skeliton";

const DashCardGrid = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["dashCounts"],
    queryFn: async () => {
      const res = await makeRequest.get("/dashboard/counts");
      return res.data;
    },
  });

  return (
    <div className="flex flex-col space-y-4">
      {/* Appointment */}
      <div className="flex flex-col space-y-2">
        <span className="text-gray-500 uppercase text-sm">Appointment</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {isLoading ? (
            <>
              <Skeleton skfor={"dashCard"} />
              <Skeleton skfor={"dashCard"} />
              <Skeleton skfor={"dashCard"} />
              <Skeleton skfor={"dashCard"} />
            </>
          ) : (
            <>
              {/* Appointment Pending */}
              <DashValueCard
                link={true}
                icon={Pending}
                title={"Pending"}
                value={data.pending}
              />
              {/* Appointment Addroved */}
              <DashValueCard
                link={true}
                icon={Approve}
                title={"Approved"}
                value={data.approved}
              />
              {/* Appointment Rejected */}
              <DashValueCard
                link={true}
                icon={Reject}
                title={"Removed"}
                value={data.reject}
              />
              {/* Appointment Total */}
              <DashValueCard
                link={true}
                icon={Total}
                title={"Total"}
                value={data.total}
              />
            </>
          )}
        </div>
      </div>
      {/* Doctor */}
      <div className="flex flex-col space-y-2">
        <span className="text-gray-500 uppercase text-sm">Doctor</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {isLoading ? (
            <>
              <Skeleton skfor={"dashCard"} />
              <Skeleton skfor={"dashCard"} />
              <Skeleton skfor={"dashCard"} />
              <Skeleton skfor={"dashCard"} />
            </>
          ) : (
            <>
              {/* All Doctors */}
              <DashValueCard
                link={true}
                icon={Doctor}
                title={"All"}
                value={data.doctors}
              />
              {/* Doctors No Sessions */}
              <DashValueCard
                link={true}
                icon={Doctors_No_Session}
                title={"outSession"}
                value={data.doctors_no_session}
              />
              {/* Active Sessions */}
              <DashValueCard
                link={true}
                icon={Session}
                title={"Sessions"}
                value={data.active_stssion}
              />
              {/* Sale */}
              <DashValueCard
                link={true}
                icon={Sale}
                title={"Sale"}
                value={data.sale}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashCardGrid;
