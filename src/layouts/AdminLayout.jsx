import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/admin/AdminNav";
import Sidebar from "../components/admin/Sidebar";
import { ToastContainer } from "react-toastify";
import { SidebarProvider } from "../Context/SidebarContext";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="space-y-4">
        <AdminNav />
        <div className="mx-auto px-2 max-w-7xl">
          <div className="flex min-h-screen gap-4">
            <div
              className="w-44  sm:block fixed sm:sticky 
          top-[70px] h-full"
            >
              <Sidebar />
            </div>
            <div className="flex-1 h-dvh">
              <Outlet />
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
