import React from "react";

const Skeleton = ({ skfor }) => {
  if (skfor === "DoctorCard") {
    return (
      <div
        className="rounded-xl p-6 w-full sm:max-w-sm md:max-w-md lg:max-w-sm flex flex-col
       justify-between items-center border border-[#0560D9]/20 bg-white shadow-md animate-pulse
    hover:shadow-lg hover:border transition-shadow duration-300 space-y-4"
      >
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gray-200 animate-pulse border-2 border-[#cccccc]" />

        <div className="text-center space-y-2 w-full flex-grow flex flex-col items-center justify-center">
          <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
          <div className="h-2 w-4/6 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-8 w-full bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }

  if (skfor === "DoctorProfile") {
    return (
      <div className="p-4 bg-white border border-[#0460D9]/50 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-md">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gray-200 animate-pulse border-2 border-[#0560D9]" />

        <div className="text-center space-y-2 w-full flex-grow flex flex-col items-center justify-center">
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />

          <div className="h-6 w-40 bg-gray-300 rounded animate-pulse" />

          <hr className="w-1/4 border-gray-300" />

          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />

          <hr className="w-1/4 border-gray-300" />

          <div className="h-2 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-2 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-2 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-2 w-full bg-gray-200 rounded animate-pulse" />

          <hr className="w-1/4 border-gray-300" />

          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (skfor === "Timetable") {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div className="h-3 w-48 bg-gray-200 rounded mb-4"></div>
        <hr className="my-2 border-gray-300" />
        <table className="w-full mt-2">
          <tbody>
            {/* Two skeleton rows */}
            {[...Array(2)].map((_, index) => (
              <tr key={index}>
                <td className="px-2 py-1">
                  <div className="h-2 w-20 bg-gray-200 rounded-lg"></div>
                </td>
                <td>
                  <div className="flex gap-2">
                    <div className="h-2 w-24 bg-gray-200 rounded-lg"></div>
                    <div className="h-2 w-24 bg-gray-200 rounded-lg"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <div>No Skeleton!</div>;
};

export default Skeleton;
