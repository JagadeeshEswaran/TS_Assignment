import { createBrowserRouter } from "react-router-dom";
import AuthenticateRoute from "./routeProtect/AuthenticateRoute";
import Login from "../pages/authPages/Login";
import Signup from "../pages/authPages/Signup";
import ForgetPassword from "../pages/authPages/ForgetPassword";
import PageNotFound from "../pages/error/PageNotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Root from "../pages/Root";

// LOADERS
import { LineChartLoader } from "../pages/dashboard/Dashboard";

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
				index: true,
				element: <Root />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
				loader: LineChartLoader,
			},
		],
	},
	{
		path: "*",
		element: <PageNotFound />,
	},
]);

export default routes;
