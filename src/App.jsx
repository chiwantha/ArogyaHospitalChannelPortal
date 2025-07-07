import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Static/Navbar";
import Footer from "./components/Static/Footer";
import Home from "./pages/users/Home";
import Channeling from "./pages/users/Channeling";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DoctorProfile from "./pages/users/DoctorProfile";
import MyAppointment from "./pages/users/MyAppointment";

const App = () => {
  const queryClient = new QueryClient({});
  const currentUser = true;

  const ProtectRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/home"} />;
    }
    return children;
  };

  const Layout = () => {
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoute>
          <Layout />
        </ProtectRoute>
      ),
      children: [
        {
          path: "/",
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
