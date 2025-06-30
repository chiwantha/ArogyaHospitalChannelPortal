import { useParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";
import Timetable from "../../components/Timetable";
import Skeleton from "../../components/Skeliton";
import { useEffect } from "react";

const DoctorProfile = () => {
  const { id: doctor_id } = useParams(); // Destructure params more cleanly

  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [doctor_id]); // Add doctor_id as dependency to scroll when doctor changes

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["DoctorProfile", doctor_id], // Include doctor_id in query key to separate cache entries
    queryFn: async () => {
      const res = await makeRequest.get(
        `/doctors/profile?doctor_id=${doctor_id}`
      );
      return res.data[0]; // Return just the doctor data to simplify usage
    },
    staleTime: 5 * 60 * 1000, // 5 minutes before data becomes stale
  });

  // Combined loading state (initial load or fetching new doctor)
  const loading = (isLoading || isFetching) && !data;

  // console.log(loading && `loading`);
  // console.log(data && data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div className="space-y-4">
        {loading ? (
          <Skeleton skfor={"DoctorProfile"} />
        ) : (
          data && (
            <div
              className="p-4 bg-white border border-[#0460D9]/50 rounded-lg 
          flex items-center justify-center flex-col space-y-4 shadow-md"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36">
                <img
                  src={`/doctors/${data.image || "default.png"}`}
                  alt={data.name || "Unknown"}
                  className="w-full h-full object-cover rounded-full border-2 border-[#0560D9]"
                />
              </div>
              <div className="text-center space-y-2 w-full flex-grow flex flex-col items-center justify-center">
                {data.gender && (
                  <p className="uppercase text-xs sm:text-sm text-gray-500 tracking-wide">
                    {data.gender}
                  </p>
                )}

                <h3
                  className="uppercase leading-5 text-lg sm:text-lg 
              font-semibold text-gray-700"
                >
                  {data.name}
                </h3>

                <hr className="w-1/4 border-gray-300" />
                <p className="uppercase text-xs sm:text-sm text-gray-500 tracking-wide">
                  {data.specialization}
                </p>
                <hr className="w-1/4 border-gray-300" />
                <p className="uppercase text-[12px] text-gray-500 tracking-wide">
                  {data.description}
                </p>
                <hr className="w-1/4 border-gray-300" />
                <p className="uppercase text-xs sm:text-sm text-gray-500 tracking-wide">
                  {data.hospital}
                </p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="sm:col-span-3">
        <Timetable doctor_id={doctor_id} name={data?.name || "Unknown"} />
      </div>
    </div>
  );
};

export default DoctorProfile;
