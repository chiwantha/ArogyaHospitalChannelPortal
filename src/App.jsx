import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// User Pages
import Home from "./pages/users/Home";
import Channeling from "./pages/users/Channeling";
import DoctorProfile from "./pages/users/DoctorProfile";
import MyAppointment from "./pages/users/MyAppointment";

// Admin Pages
import AppointmentCheckList from "./pages/admin/AppointmentCheckList";

import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

const App = () => {
  const queryClient = new QueryClient({});
  const currentUser = true;

  const ProtectRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/home"} />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoute>
          <UserLayout />
        </ProtectRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "channeling",
          element: <Channeling />,
        },
        {
          path: "doctor/:id",
          element: <DoctorProfile />,
        },
        {
          path: "myappointment",
          element: <MyAppointment />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <ProtectRoute>
          <AdminLayout />
        </ProtectRoute>
      ),
      children: [
        {
          index: true,
          element: <AppointmentCheckList />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="select-none">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
