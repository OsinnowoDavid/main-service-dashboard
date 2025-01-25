import DashboardGraph from "./components/dashboard-graph";
import DashboardStatsCards from "./components/dashboard-stats-cards";

export default function SuperAdmin() {
  return (
    <div className="px-6 py-2">
      <div className="mb-7 border-b-2 py-4 pt-2">
        <h2 className="mb-1 text-2xl font-bold">Good Evening, John</h2>
        <p className="text-textcolor">
          Glad to have you back, here's an overview of your operations today
        </p>
      </div>
      <DashboardStatsCards />
      <div className="mt-8 flex w-full flex-col gap-7">
        <DashboardGraph />
      </div>
    </div>
  );
}
