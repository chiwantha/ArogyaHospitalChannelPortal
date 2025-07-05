import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import ProfileCard from "../../components/Static/ProfileCard";
import Skeleton from "../../components/Static/Skeliton";
import SessionBar from "../../components/Static/SessionBar";
import InstructuonsCard from "../../components/Static/InstructionsCard";

const DoctorProfile = () => {
  const { id: doctor_id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["DoctorProfile", doctor_id],
    queryFn: async () => {
      const res = await makeRequest.get(
        `/doctors/fullprofile?doctor_id=${doctor_id}`
      );
      return res;
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div className="space-y-4">
        {isLoading ? (
          <Skeleton skfor={"ProfileCard"} />
        ) : (
          !error && data && <ProfileCard ProfileData={data.data[0]} />
        )}
        <InstructuonsCard />
      </div>

      <div className="sm:col-span-3 flex flex-col gap-4">
        {isLoading ? (
          <Skeleton skfor={"SessionBar"} />
        ) : (
          !error &&
          data &&
          data.data[1].map((item, index) => (
            <SessionBar key={index} session_data={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
