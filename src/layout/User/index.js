import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import DashboardNavbar from "../../components/CustomNavbar";

export default function User() {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
    </>
  );
}
