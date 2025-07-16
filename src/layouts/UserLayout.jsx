import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import { ToastContainer } from "react-toastify";

const UserLayout = () => {
  return (
    <div className="space-y-4">
      <Navbar />
      <div className="mx-auto px-2 max-w-7xl">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default UserLayout;
