import { createBrowserRouter } from "react-router-dom";
import AuthenticateRoute from "./routeProtect/AuthenticateRoute";
import Login from "../pages/authPages/Login";
import Signup from "../pages/authPages/Signup";
import ForgetPassword from "../pages/authPages/ForgetPassword";
import PageNotFound from "../pages/error/PageNotFound";
import Dashboard from "../pages/dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/",
    element: <AuthenticateRoute />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  // HANDLING UNDEFINED ROUTES
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes;
