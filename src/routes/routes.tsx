import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protected";
import { LoadingPopUp } from "@/layout/loading";

import Login from "@/pages/auth/login";
import ForgotPassword from "@/pages/auth/forgot-password";

// PROTECTED ROUTES
const Branch = lazy(() => import("@/pages/roles/branch"));
const SuperAdmin = lazy(() => import("@/pages/roles/super-admin"));
const Admin = lazy(() => import("@/pages/roles/admin"));

export default function Router() {
  return (
    <>
      <Suspense fallback={<LoadingPopUp />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/super-admin" element={<SuperAdmin />} />
            <Route path="/super-admin/:id" element={<SuperAdmin />} />

            <Route path="admin" element={<Admin />} />
            <Route path="admin/:id" element={<Admin />} />

            <Route path="branch" element={<Branch />} />
            <Route path="branch/:id" element={<Branch />} />

            <Route path="setting/*" element={<Branch />} />
            <Route path="*" element={<p>404 - Not Found</p>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
