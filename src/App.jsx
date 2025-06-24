import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/users/Home";
import Channeling from "./pages/users/Channeling";

const App = () => {
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
      ],
    },
  ]);

  return (
    <div className="select-none">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
