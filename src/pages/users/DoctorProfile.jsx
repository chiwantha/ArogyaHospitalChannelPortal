import { useParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "../../components/Static/Skeliton";
import { useEffect } from "react";
import Sessions from "../../components/Sessions";

const DoctorProfile = () => {
  const { id: doctor_id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [doctor_id]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["DoctorProfile"],
    queryFn: async () => {
      const res = await makeRequest.get(
        `/doctors/profile?doctor_id=${doctor_id}`
      );
      return res;
    },
  });

  const doctor = data?.data?.[0];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div className="space-y-4">
        {isLoading && !data ? (
          <Skeleton skfor="DoctorProfile" />
        ) : error ? (
          <div className="p-4 text-red-600 bg-red-100 border border-red-300 rounded">
            Failed to load doctor profile. Please try again later.
          </div>
        ) : doctor ? (
          <div className="p-4 bg-white border border-[#0460D9]/50 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
            <div className="w-32 h-32 sm:w-36 sm:h-36">
              <img
                src={`/doctors/${doctor.image || "default.png"}`}
                alt={doctor.name || "Unknown"}
                className="w-full h-full object-cover rounded-full border-2 border-[#0560D9]"
              />
            </div>
            <div className="text-center items-center flex flex-col space-y-2 w-full">
              <h3 className="uppercase text-lg font-semibold text-gray-700">
                {doctor.name}
              </h3>
              <hr className="w-1/4 border-gray-300" />
              <p className="uppercase text-xs sm:text-sm text-gray-500">
                {doctor.specialization}
              </p>
              <hr className="w-1/4 border-gray-300" />
              <p className="uppercase text-[12px] text-gray-500">
                {doctor.description}
              </p>
              <hr className="w-1/4 border-gray-300" />
              <p className="uppercase text-xs sm:text-sm text-gray-500">
                {doctor.hospital}
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4 text-gray-500 bg-gray-100 rounded border border-gray-300">
            Doctor profile not found.
          </div>
        )}
      </div>

      <div className="sm:col-span-3">
        <Sessions doctor_id={doctor_id} />
      </div>
    </div>
  );
};

export default DoctorProfile;
