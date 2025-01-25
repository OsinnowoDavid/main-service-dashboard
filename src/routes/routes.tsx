import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protected";
import { LoadingPopUp } from "@/layout/loading";

import Login from "@/roles/auth/login";

// PROTECTED ROUTES
const Branch = lazy(() => import("@/roles/branch"));
const SuperAdmin = lazy(() => import("@/roles/super-admin"));
const Admin = lazy(() => import("@/roles/admin"));

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingPopUp />}>
          <Routes>
            <Route path="/" element={<Login />} />

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
      </BrowserRouter>
    </>
  );
}
