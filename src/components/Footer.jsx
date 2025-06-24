import React from "react";
import { Company } from "../constants";

const Footer = () => {
  const Likns = [
    {
      title: "Main Web",
      link: "https://www.arogyahospitals.lk",
    },
    {
      title: "Arogya Channeling",
      link: "https://channling.arogyahospitals.lk",
    },
    {
      title: "About Arogya",
      link: "https://www.arogyahospitals.lk/about/",
    },
    {
      title: "Services",
      link: "https://www.arogyahospitals.lk/services/",
    },
  ];

  const Contact = [
    "Lan : 033 222 4592",
    "WhatsApp : 070 745 5505",
    "Mail : info@argyahospitals.lk",
    "Address : No.250 Colombo Rd, Gampaha",
  ];

  return (
    <footer className="w-full border-t-2 shadow-md border-gray-500">
      {/* top strip */}
      <div className="bg-[#0460D9] py-4 ">
        <div
          className="mx-auto max-w-7xl px-2 flex flex-col items-center 
        justify-center space-y-4"
        >
          {/* Description */}
          <p className="text-neutral-200 max-w-4xl text-center">
            {Company.description}
          </p>
          {/* separator */}
          <hr className="border-gray-300/50 w-full" />
          {/* breef boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {/* hospital breef */}
            <div
              className="flex flex-col items-center justify-center 
            space-y-3 bg-[#FFC935] p-3 rounded-lg text-center"
            >
              <img src={Company.logo} width={100} height={100} alt="" />
              {/* <hr className="border-gray-500/50  w-1/2" /> */}
              <p className="text-gray-800">{Company.proud}</p>
            </div>
            {/* important links */}
            <div className="flex flex-col items-end text-right">
              <h2 className="text-2xl text-[#FFC935] font-black uppercase mb-1">
                Arogya Links
              </h2>
              {Likns.map((item, index) => (
                <span className="text-neutral-200 mb-1" key={index}>
                  <a href={item.link}>{item.title} -</a>
                </span>
              ))}
            </div>
            {/* Contact */}
            <div
              className="flex flex-col items-start text-left
            border-neutral-300/50 md:border-l md:pl-4"
            >
              <h2 className="text-2xl text-[#FFC935] font-black uppercase mb-1">
                Contact Arogya
              </h2>
              {Contact.map((item, index) => (
                <span className="text-neutral-200 mb-1" key={index}>
                  - {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* bottom strip */}
      <div className="bg-[#0349A4] py-4">
        <div className="mx-auto max-w-7xl px-2 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-300 text-center gap-2">
          <span>
            © {new Date().getFullYear()} Arogya Hospitals (Pvt) Ltd. All rights
            reserved.
          </span>
          <span>
            System Design & Developed by{" "}
            <strong className="text-white">
              <a href="https://www.kchord.com">K-Chord (Pvt) Ltd</a>
            </strong>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
