import React from "react";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Skeleton from "./Static/Skeliton";

const Timetable = ({ doctor_id, name }) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["TimeTable"],
    queryFn: async () => {
      const res = await makeRequest.get(
        `/doctors/timetable?doctor_id=${doctor_id}`
      );
      return res;
    },
  });

  // Group time slots by day
  const groupedTimeSlots = data?.data?.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(`${item.start_time} - ${item.end_time}`);
    return acc;
  }, {});

  return (
    <div className="">
      {(isLoading || isFetching) && !data ? (
        <Skeleton skfor={"Timetable"} />
      ) : (
        <div className="bg-white rounded-lg shadow-md p-4">
          <span className="text-xl font-medium text-gray-600">
            {name.split(" ").slice(0, 2).join(" ")}'s Timetable
          </span>
          <hr className="my-2 border-gray-300" />

          <table className="w-full mt-2">
            <tbody>
              {groupedTimeSlots &&
                Object.entries(groupedTimeSlots).map(
                  ([day, timeSlots], index) => (
                    <motion.tr
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.6 * index,
                        ease: "easeInOut",
                      }}
                      key={index}
                    >
                      <td className="py-1 rounded-lg bg-blu">
                        <span className="px-2 py-1 bg-[#FFC935] rounded-lg text-gray-700">
                          {day}
                        </span>
                      </td>
                      <td>
                        {timeSlots.map((time, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#0560D9] rounded-lg text-white mr-2 mb-1 inline-block"
                          >
                            {time}
                          </span>
                        ))}
                      </td>
                    </motion.tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Timetable;
