import { useState } from "react";
import Button from "./Button";
import DatePicker from "react-datepicker";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const ChannelForm = ({ session_id, day, setStatus }) => {
  const dayMap = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const allowedDay = dayMap[day];

  const formLayout = document.getElementById("formLayout");
  const successLayout = document.getElementById("successLayout");

  const [formData, setFormData] = useState({
    session_id: session_id,
    patient: "",
    contact: "",
    alternate_contact: "",
    date: "",
    email: "",
    note: "",
  });

  const clear = () => {
    setFormData({
      session_id: session_id,
      patient: "",
      contact: "",
      alternate_contact: "",
      date: "",
      email: "",
      note: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date?.toISOString().split("T")[0] || "",
    });
  };

  const validate = () => {
    if (formData.patient == "") {
      toast.error("Patient Name Required !");
      return false;
    }
    if (formData.contact == "") {
      toast.error("Contact Number Required !");
      return false;
    }
    if (formData.date == "") {
      toast.error("Appointment Date Required !");
      return false;
    }
    return true;
  };

  const mutation = useMutation({
    mutationKey: ["newAppointment"],
    mutationFn: async (data) => {
      const res = await makeRequest.post("/appointment/new", data);
      console.log(res);
    },
    onSuccess: () => {
      toast.success("Appointment Submitted !");
      formLayout.classList.add("hidden");
      successLayout.classList.remove("hidden");
    },
    onError: () => {
      toast.error("Submination Failed !");
    },
  });

  const handleSubmit = async () => {
    // e.preventDefault();
    if (!validate()) {
      return;
    }
    mutation.mutate(formData);
    clear();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="p-4 mt-4 rounded-lg border
      shadow-md border-[#0560D9]/50 "
    >
      <div className="" id="formLayout">
        {/* Top Strip */}
        <div className="w-full flex justify-between mb-4 items-center">
          <div className="">
            <span className="text-2xl font-black uppercase text-gray-500">
              Channel /{" "}
              <span className="text-[#0560D9]">{day ? day : "Unknown"}</span>
            </span>
          </div>
          <Button
            title={"X"}
            bg={"bg-red-500 text-white py-1 hover:bg-red-600"}
            onClick={() => {
              setStatus(false);
            }}
          />
        </div>
        {/* Action Form Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* patient name */}
          <div className="flex flex-col space-y-1 sm:col-span-2">
            <label className="pl-1 font-semibold text-sm text-gray-800">
              Patient Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              maxLength={200}
              type="text"
              name="patient"
              className="bg-slate-100 rounded-md outline-none w-full px-2 py-2
          border border-gray-300"
              placeholder="eg :- R A Thilina Lakshan"
              value={formData.patient}
              onChange={handleChange}
            />
          </div>

          {/* patient contact */}
          <div className="flex flex-col space-y-1">
            <label className="pl-1 font-semibold text-sm text-gray-800">
              Contact <span className="text-red-500">*</span>
            </label>
            <input
              required
              maxLength={10}
              type="text"
              name="contact"
              className="bg-slate-100 rounded-md outline-none w-full px-2 py-2
          border border-gray-300"
              placeholder="eg :- 0768806989"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          {/* patient alternate contact */}
          <div className="flex flex-col space-y-1">
            <label className="pl-1 font-semibold text-sm text-gray-800">
              Other Contact (Optional)
            </label>
            <input
              maxLength={10}
              type="text"
              name="alternate_contact"
              className="bg-slate-100 rounded-md outline-none w-full px-2 py-2
          border border-gray-300"
              placeholder="eg :- 0771234567"
              value={formData.alternate_contact}
              onChange={handleChange}
            />
          </div>

          {/* patient date */}
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
              filterDate={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date.getDay() === allowedDay && date >= today;
              }}
              dateFormat="yyyy-MM-dd"
            />
          </div>

          {/* patient email */}
          <div className="flex flex-col space-y-1">
            <label className="pl-1 font-semibold text-sm text-gray-800">
              Email (Optional)
            </label>
            <input
              maxLength={100}
              type="email"
              name="email"
              className="bg-slate-100 rounded-md outline-none w-full px-2 py-2
          border border-gray-300"
              placeholder="eg :- yourmail@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* note textarea */}
          <div className="flex flex-col space-y-1 sm:col-span-2">
            <label className="pl-1 font-semibold text-sm text-gray-800">
              Note (Optional)
            </label>
            <textarea
              name="note"
              rows={4}
              className="bg-slate-100 rounded-md outline-none w-full px-2 py-2
          border border-gray-300"
              placeholder="Any additional information"
              value={formData.note}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Action Bar */}
        <div className="flex gap-4 mt-4">
          <Button
            title={"Make Appointment"}
            bg={"py-2 bg-[#0460D9] text-white hover:bg-[#1b3961]"}
            onClick={() => {
              handleSubmit();
            }}
          />
          <Button
            title={"Clear"}
            bg={"py-2 bg-red-700 text-white hover:bg-red-600"}
            onClick={() => {
              clear();
            }}
          />
        </div>
      </div>

      <div className="text-center hidden" id="successLayout">
        <h1>OK SUCCESS !</h1>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default ChannelForm;
