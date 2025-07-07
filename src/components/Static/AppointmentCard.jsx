import React from "react";

const AppointmentCard = ({ data }) => {
  const { patient, contact, alternate_contact, email } = data;
  const { doctor_name, session_type, start_time, end_time, fee } = data;
  const { id, date, note, created_at, is_confirmed } = data;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div
      className="rounded-lg shadow-md bg-white border border-blue-500/20
     p-4 flex flex-col gap-4 hover:shadow-md transition"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#0560D9]">
          Appointment #{id ?? "##"}
        </h2>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-lg ${
            is_confirmed
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white animate-pulse"
          }`}
        >
          {is_confirmed ? "Approved" : "Pending"}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Session Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
        <Detail label="Doctor" value={doctor_name || "Unknown"} />
        <Detail label="Session" value={session_type || "Not Set"} />
        <Detail
          label="Available Time"
          value={
            start_time && end_time
              ? `${start_time} - ${end_time}`
              : "00:00:00 - 00:00:00"
          }
        />
        <Detail label="Fee" value={`LKR ${fee || "0.00"}`} />
        <Detail label="On Date" value={date ? formatDate(date) : "Unknown"} />
        <Detail
          label="Created On"
          value={created_at ? formatDate(created_at) : "Unknown"}
        />
      </div>

      <div className="border-t border-gray-200" />

      {/* Patient Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
        <Detail label="Patient" value={patient || "Unknown"} />
        <Detail label="Contact" value={contact || "0"} />
        <Detail label="Alternate Contact" value={alternate_contact || "0"} />
        <Detail label="Email" value={email || "Not Set"} />
        <Detail label="Note" value={note || "Not Set"} />
      </div>
    </div>
  );
};

// Reusable detail display component
const Detail = ({ label, value }) => (
  <div>
    <span className="text-sm font-semibold text-gray-600">{label}: </span>
    <span className="text-sm text-gray-500">{value}</span>
  </div>
);

export default AppointmentCard;
