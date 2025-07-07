import { useState, useEffect } from "react";
import { makeRequest } from "../../axios";
import Button from "../../components/Static/Button";
import { useMutation } from "@tanstack/react-query";
import AppointmentCard from "../../components/Static/AppointmentCard";

const MyAppointment = () => {
  const initialQuery =
    JSON.parse(localStorage.getItem("appoimentNumber")) || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const {
    data,
    isPending,
    error,
    mutate: reachData,
  } = useMutation({
    mutationFn: async () => {
      const res = await makeRequest.get(
        `/appointment/reach?contact=${searchQuery}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (initialQuery && initialQuery.trim() !== "") {
      reachData();
    }
  }, [initialQuery, reachData]);

  const handleSearch = () => {
    if (searchQuery && searchQuery.trim() !== "") {
      reachData();
    }
  };

  return (
    <div className="space-y-4">
      <div className="w-full grid grid-cols-4 p-2 py-4 gap-4 bg-[#0460D9] shadow-md rounded-lg">
        <div className="sm:col-span-3 col-span-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1 col-span-2">
            <label className="pl-1 font-semibold text-sm text-slate-200">
              Search With Contact No <span className="text-red-500">*</span>
            </label>
            <input
              required
              maxLength={200}
              type="search"
              name="contact"
              value={searchQuery}
              className="bg-white rounded-md outline-none w-full px-2 py-2"
              placeholder="eg :- 0788806670"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-end sm:col-span-1 col-span-4">
          <Button
            title={isPending ? "Searching..." : "Search"}
            bg="bg-[#4CB847] text-center text-white font-normal py-2 w-full"
            onClick={handleSearch}
            disabled={isPending}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {isPending && <div>Pending...</div>}
        {error && <div className="text-red-500">Error: {error.message}</div>}
        {data &&
          data.map((item, index) => (
            <AppointmentCard key={index} data={item} />
          ))}
      </div>
    </div>
  );
};

export default MyAppointment;
