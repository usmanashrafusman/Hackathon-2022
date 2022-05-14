import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import DashboardNavbar from "../../components/CustomNavbar";
import { useAuth } from "../../customHooks/useAuthenticate";

export default function Admin() {
  const location = useLocation();
  return useAuth() ? (
    <>
      <DashboardNavbar isAdmin />
      <Outlet />
    </>
  ) : (
    <Navigate to="/auth/signin" state={{ from: location }} replace />
  );
}
