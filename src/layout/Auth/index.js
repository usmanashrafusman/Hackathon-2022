import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import PageLayout from "../../components/CustomPage";
import { useAuth } from "../../customHooks/useAuthenticate";

export default function Auth() {
  const location = useLocation();
  return !useAuth() ? (
    <>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  ) : (
    <Navigate to="/admin/signin" state={{ from: location }} replace />
  );
}
