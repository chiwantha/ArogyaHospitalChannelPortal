import { useState } from "react";
import Button from "../common/Button";
import DatePicker from "react-datepicker";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import SubmitSuccessfull from "./SubmitSuccessfull";
import "react-datepicker/dist/react-datepicker.css";

const dayMap = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const ChannelForm = ({ session_id, day, setStatus }) => {
  const allowedDay = dayMap[day];
  const [isSuccess, setisSuccess] = useState(false);
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    session_id,
    patient: "",
    contact: "",
    alternate_contact: "",
    date: "",
    email: "",
    note: "",
  });

  const clear = () => {
    setFormData({
      session_id,
      patient: "",
      contact: "",
      alternate_contact: "",
      date: "",
      email: "",
      note: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    if (!date) {
      setFormData((prev) => ({ ...prev, date: "" }));
      return;
    }

    // Create a new date object to avoid timezone issues
    const adjustedDate = new Date(date);
    const year = adjustedDate.getFullYear();
    const month = String(adjustedDate.getMonth() + 1).padStart(2, "0");
    const day = String(adjustedDate.getDate()).padStart(2, "0");

    setFormData((prev) => ({
      ...prev,
      date: `${year}-${month}-${day}`,
    }));
  };

  const validate = () => {
    if (!formData.patient.trim()) {
      toast.error("Patient Name Required!");
      return false;
    }
    if (!formData.contact.trim()) {
      toast.error("Contact Number Required!");
      return false;
    }
    if (!formData.date) {
      toast.error("Appointment Date Required!");
      return false;
    }
    return true;
  };

  const { isPending, mutate: submitForm } = useMutation({
    mutationKey: ["newAppointment"],
    mutationFn: async (data) => {
      await makeRequest.post("/appointment/new", data);
    },
    onSuccess: () => {
      localStorage.setItem("appoimentNumber", JSON.stringify(formData.contact));
      setisSuccess(true);
      clear();
      queryClient.invalidateQueries(["appointmentListAdmin", "dashCounts"]);
    },
    onError: () => {
      toast.error("Submission Failed!");
    },
  });

  const handleSubmit = () => {
    if (!validate()) return;
    submitForm(formData);
  };

  const filterDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.getDay() === allowedDay && date >= today;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="p-4 mt-4 rounded-lg border shadow-md border-[#0560D9]/50"
      >
        {!isSuccess ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Strip */}
            <div className="w-full flex justify-between mb-4 items-center">
              <div>
                <span className="text-2xl font-black uppercase text-gray-500">
                  Channel /{" "}
                  <span className="text-[#0560D9]">{day || "Unknown"}</span>
                </span>
              </div>
              <Button
                title={"X"}
                bg={"bg-red-500 text-white py-1 hover:bg-red-600"}
                onClick={() => setStatus(false)}
              />
            </div>

            {/* Form Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Patient name */}
              <div className="flex flex-col space-y-1 sm:col-span-2">
                <label className="pl-1 font-semibold text-sm text-gray-800">
                  Patient Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  maxLength={200}
                  type="text"
                  name="patient"
                  className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                  placeholder="eg :- R A Thilina Lakshan"
                  value={formData.patient}
                  onChange={handleChange}
                />
              </div>

              {/* Contact fields */}
              <div className="flex flex-col space-y-1">
                <label className="pl-1 font-semibold text-sm text-gray-800">
                  Contact <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  maxLength={10}
                  type="tel"
                  name="contact"
                  className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                  placeholder="eg :- 0768806989"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="pl-1 font-semibold text-sm text-gray-800">
                  Other Contact (Optional)
                </label>
                <input
                  maxLength={10}
                  type="tel"
                  name="alternate_contact"
                  className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                  placeholder="eg :- 0771234567"
                  value={formData.alternate_contact}
                  onChange={handleChange}
                />
              </div>

              {/* Date Picker */}
              <div className="flex flex-col space-y-1">
                <label className="pl-1 font-semibold text-sm text-gray-800">
                  Date <span className="text-red-500">*</span>
                </label>
                <DatePicker
                  required
                  selected={formData.date ? new Date(formData.date) : null}
                  onChange={handleDateChange}
                  className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                  placeholderText="Select a date"
                  filterDate={filterDate}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  showDisabledMonthNavigation
                  shouldCloseOnSelect
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1">
                <label className="pl-1 font-semibold text-sm text-gray-800">
                  Email (Optional)
                </label>
                <input
                  maxLength={100}
                  type="email"
                  name="email"
                  className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                  placeholder="eg :- yourmail@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Note */}
              <div className="flex flex-col space-y-1 sm:col-span-2">
                <label className="pl-1 font-semibold text-sm text-gray-800">
                  Note (Optional)
                </label>
                <textarea
                  name="note"
                  rows={4}
                  className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                  placeholder="Any additional information"
                  value={formData.note}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              {isPending ? (
                <Button
                  title={"Wait ..... !"}
                  bg={
                    "py-2 bg-[#4DB847] text-white hover:bg-[#00A63E] cursor-not-allowed animate-pulse"
                  }
                />
              ) : (
                <Button
                  title={"Make Appointment"}
                  bg={"py-2 bg-[#0460D9] text-white hover:bg-[#1b3961]"}
                  onClick={handleSubmit}
                />
              )}
              <Button
                title={"Clear"}
                bg={"py-2 bg-red-700 text-white hover:bg-red-600"}
                onClick={clear}
              />
            </div>
          </motion.div>
        ) : (
          <SubmitSuccessfull />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ChannelForm;
