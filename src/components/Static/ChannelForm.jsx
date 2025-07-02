import { useState } from "react";
import Button from "./Button";

const ChannelForm = ({ session_id, day }) => {
  console.log(session_id, day);

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

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div
      className="p-4 mt-4 rounded-lg border border-gray-300 
      shadow-md hover:border-[#0560D9]/50
      "
    >
      {/* Action Form Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* patient name */}
        <div className="flex flex-col space-y-1 col-span-2">
          <label className="pl-1 font-semibold text-sm text-gray-800">
            Patient Name *
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
            Contact *
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
            Date *
          </label>
          <input
            required
            type="date"
            name="date"
            className="bg-slate-100 rounded-md outline-none w-full px-2 py-2
          border border-gray-300"
            value={formData.date}
            onChange={handleChange}
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
        <div className="flex flex-col space-y-1 col-span-2">
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
  );
};

export default ChannelForm;
