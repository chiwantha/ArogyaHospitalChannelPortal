import React, { useState } from "react";
import { Combobox } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "../../components/Button";

const Channeling = () => {
  const Specialization = [
    "4d Anomaly Scan -12 Weeks Nt",
    "4d Anomaly Scan -20 Weeks And Above",
    "Abdomin Scan",
    "Abpm",
    "Accupuncture",
    "Accupuncture Physician",
    "Acting Consultant Cardiologist",
  ];

  const [Queryfilter, setQueryfilter] = useState({
    doctor_name: "",
    specialization: "",
    gender: "",
    day: "",
  });

  const [query, setQuery] = useState("");

  const filteredSpecializations =
    query === ""
      ? Specialization
      : Specialization.filter((s) =>
          s.toLowerCase().includes(query.toLowerCase())
        );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQueryfilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSpecializationChange = (value) => {
    setQueryfilter((prev) => ({
      ...prev,
      specialization: value,
    }));
  };

  const handleSearch = () => {
    console.log("Search Filters:", Queryfilter);
    // Use Queryfilter object to query your backend or SQL
  };

  return (
    <div className="space-y-4">
      <div
        className="bg-[#0560D9] rounded-lg py-4 px-2 shadow-md grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {/* Doctor Name */}
        <div className="md:col-span-2 space-y-2">
          <div className="text-sm  text-slate-100">Doctor name</div>
          <input
            type="search"
            name="doctor_name"
            className="bg-white rounded-md outline-none w-full px-2 py-2"
            placeholder="Doctor Name ..."
            value={Queryfilter.doctor_name}
            onChange={handleInputChange}
          />
        </div>

        {/* Specialization Combobox */}
        <div className="space-y-2">
          <div className="text-sm  text-slate-100">Specialization</div>
          <Combobox
            value={Queryfilter.specialization}
            onChange={handleSpecializationChange}
          >
            <div className="relative">
              <Combobox.Input
                className="w-full bg-white outline-none rounded-md px-2 py-2"
                placeholder="Specialization"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <FaAngleDown className="w-5 h-5 text-gray-500" />
              </Combobox.Button>
              {filteredSpecializations.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto bg-slate-100 rounded-md shadow-lg">
                  {filteredSpecializations.map((item, i) => (
                    <Combobox.Option
                      key={i}
                      value={item}
                      className={({ active }) =>
                        `cursor-pointer select-none px-4 py-2 ${
                          active ? "bg-blue-500 text-white" : "text-gray-800"
                        }`
                      }
                    >
                      {item}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </div>
          </Combobox>
        </div>

        {/* Gender Select */}
        <div className="space-y-2">
          <div className="text-sm  text-slate-100">Gender</div>
          <select
            className="bg-white outline-none rounded-md w-full px-2 py-2"
            name="gender"
            value={Queryfilter.gender}
            onChange={handleInputChange}
          >
            <option value="">- Select Gender -</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Day Select */}
        <div className="space-y-2">
          <div className="text-sm  text-slate-100">Day</div>
          <select
            className="bg-white outline-none rounded-md w-full px-2 py-2"
            name="day"
            value={Queryfilter.day}
            onChange={handleInputChange}
          >
            <option value="">- Select Day -</option>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="md:col-span-1 sm:col-span-2 content-end">
          <Button
            title={"Search"}
            onClick={handleSearch}
            bg={"bg-[#4CB847] text-center text-white font-normal py-2 w-full"}
          />
        </div>
      </div>
    </div>
  );
};

export default Channeling;
