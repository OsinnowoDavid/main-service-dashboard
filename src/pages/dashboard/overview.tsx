import { useAppSelector } from "@/store/hooks/redux-hook";
import SuperAdminOverview from "../roles/super-admin/overview";
import AdminOverview from "../roles/branch/overview";
import BranchOverview from "../roles/branch/overview";

export default function DashboardOverview() {
  const { auth } = useAppSelector((state) => state.auth);

  return (
    <>
      {(() => {
        switch (auth?.adminRole) {
          case "superadmin":
            return <SuperAdminOverview />;
          case "admin":
            return <AdminOverview />;
          case "manager":
            return <BranchOverview />;
          default:
            return <h1>404 - Page Not Found</h1>;
        }
      })()}
    </>
  );
}
