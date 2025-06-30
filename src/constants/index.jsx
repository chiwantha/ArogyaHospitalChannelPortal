import arogya_logo from "../assets/company/logo.png";
import arogya_banner from "../assets/company/banner.png";
import channeling from "../assets/icons/channeling.png";
import channel_history from "../assets/icons/channel_history.png";
import pharmacy from "../assets/icons/pharmacy.png";
import lab from "../assets/icons/lab.png";
import prescription from "../assets/icons/prescription.png";
import help from "../assets/icons/help.png";

import {
  FaUserMd,
  FaTooth,
  FaFlask,
  FaXRay,
  FaProcedures,
} from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";

import { FaPills } from "react-icons/fa";

export const Company = {
  name: "Arogya Hospitals (Pvt) Ltd",
  description: `Arogya Hospitals is committed to providing quality healthcare with
            compassion and excellence. Our online channeling portal allows you
            to easily book appointments with trusted doctors from anywhere`,
  proud: `Proud to be Sri Lanka’s most trusted hospital for 
            compassionate and quality healthcare`,
  logo: arogya_logo,
  banner: arogya_banner,
  services: [
    {
      service: "Channeling",
      icon: <FaUserMd />,
    },
    {
      service: "OPD",
      icon: <MdOutlineLocalHospital />,
    },
    {
      service: "Dental",
      icon: <FaTooth />,
    },
    {
      service: "Labrotary",
      icon: <FaFlask />,
    },
    {
      service: "Pharmacy",
      icon: <FaPills />,
    },
    {
      service: "Digital X-Ray",
      icon: <FaXRay />,
    },
    {
      service: "Inward Care",
      icon: <FaProcedures />,
    },
  ],
};

export const Menu = [
  {
    title: "Channeling",
    icon: channeling,
    subtitle: "Channel a doctor",
    help: "Book doctor appointments from your phone or computer.",
    badge: "New !",
    badgeColor: "hot",
    link: "/channeling",
  },
  {
    title: "E-Channel History",
    icon: channel_history,
    subtitle: "Browse your history",
    help: "See your previous appointments and doctor visit records.",
    badge: "New !",
    badgeColor: "hot",
    link: "",
  },
  {
    title: "Online Pharmacy",
    icon: pharmacy,
    subtitle: "Buy medicine online",
    help: "Order your medications online and get doorstep delivery.",
    badge: "Comming Soon !",
    badgeColor: "warning",
    link: "",
  },
  {
    title: "Lab Appointments",
    icon: lab,
    subtitle: "Book lab tests",
    help: "Schedule lab tests online without waiting in line.",
    badge: "Comming Soon !",
    badgeColor: "warning",
    link: "",
  },
  {
    title: "Online Prescriptions",
    icon: prescription,
    subtitle: "Your e-prescriptions",
    help: "View prescriptions issued through your channeling visits.",
    badge: "Comming Soon !",
    badgeColor: "warning",
    link: "",
  },
  {
    title: "Help Desk",
    icon: help,
    subtitle: "How to use",
    help: "Read documents and guides for easy navigation and system use.",
    badge: "Try Now !",
    badgeColor: "success",
    link: "",
  },
];

export const Doctors = [
  {
    id: 1,
    name: "Dr. Suneth Karunarathna",
    specialization: "Cardiologist",
    gender: "male",
    image: "default.png",
  },
  {
    id: 2,
    name: "Dr. Roshan Gunarathna",
    specialization: "Cardiologist",
    gender: "male",
    image: "default.png",
  },
  {
    id: 3,
    name: "Dr. Damith Rodrigo",
    specialization: "Chest Physician",
    gender: "male",
    image: "default.png",
  },
  {
    id: 4,
    name: "Dr. Nandika Harischandra",
    specialization: "Chest Physician",
    gender: "female",
    image: "default.png",
  },
  {
    id: 5,
    name: "Dr. Saman Kularathna",
    specialization: "Chest Physician",
    gender: "male",
    image: "default.png",
  },
  {
    id: 6,
    name: "Dr. D.M. Amarathunga",
    specialization: "Dermatologist",
    gender: "male",
    image: "default.png",
  },
  {
    id: 7,
    name: "Dr. Fathima Hasmiya",
    specialization: "Dermatologist",
    gender: "female",
    image: "default.png",
  },
  {
    id: 8,
    name: "Dr. Sanjeewa Hulangamuwa",
    specialization: "Dermatologist",
    gender: "female",
    image: "default.png",
  },
];
