import React from "react";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import AppointmentCard from "../../components/common/AppointmentCard";

const AppointmentCheckList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["appointmentListAdmin"],
    queryFn: async () => {
      const res = await makeRequest.get("/appointment/reachAdmin");
      return res.data;
    },
  });

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {isLoading && <div>Loading ...</div>}
        {error && <div className="text-red-500">Error: {error.message}</div>}
        {data &&
          data.map((item, index) => (
            <AppointmentCard key={index} data={item} admin={true} />
          ))}
      </div>
    </div>
  );
};

export default AppointmentCheckList;
