import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../../appContext/Context";

const AuthenticateRoute = () => {
  const { isSessionValid } = useAppContext();

  return isSessionValid ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthenticateRoute;
