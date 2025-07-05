import React from "react";
import { Instructions } from "../../constants";

const InstructuonsCard = () => {
  return (
    <div
      className="p-4 bg-[#0560D9] flex flex-col items-center
     justify-center text-center rounded-lg space-y-4"
    >
      {/* Topic */}
      <div className="text-white font-bold text-xl">
        <h2>Instructions / උපදෙස්</h2>
      </div>
      <hr className="border-slate-400 w-4/6" />
      <div className="text-slate-200">
        <p>{Instructions.english}</p>
      </div>
      <hr className="border-slate-400 w-4/6" />
      <div className="text-slate-200 font-semibold">
        <p>{Instructions.sinhala}</p>
      </div>
    </div>
  );
};

export default InstructuonsCard;
