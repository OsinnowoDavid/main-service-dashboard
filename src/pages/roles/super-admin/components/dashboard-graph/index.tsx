import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CoreChartOptions,
  ElementChartOptions,
  BarControllerChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
  DatasetChartOptions,
  LineElement,
  PointElement,
} from "chart.js";
import { _DeepPartialObject } from "node_modules/chart.js/dist/types/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

type chart_types = "bar";

type t_chart_options = _DeepPartialObject<
  CoreChartOptions<chart_types> &
    ElementChartOptions<chart_types> &
    BarControllerChartOptions &
    PluginChartOptions<chart_types> &
    ScaleChartOptions<chart_types> &
    DatasetChartOptions<chart_types>
>;

const options: t_chart_options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const data = {
  labels,
  datasets: [
    {
      label: "Total Orders",
      data: [5000, 7000, 8000, 10000, 12000, 11000, 15000, 14000, 13000, 12500, 16000, 17500],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Delivered Orders",
      data: [4500, 6800, 7800, 9500, 11500, 10800, 14500, 13600, 12500, 12000, 15500, 17000],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Cancelled Orders",
      data: [300, 400, 500, 800, 600, 700, 1000, 900, 750, 650, 800, 900],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Revenue Collected ($)",
      data: [25000, 35000, 40000, 50000, 60000, 55000, 75000, 72000, 68000, 65000, 80000, 90000],
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
    {
      label: "Outstanding Debts ($)",
      data: [5000, 7000, 8000, 10000, 9500, 8800, 12000, 11000, 10000, 9800, 12000, 15000],
      backgroundColor: "rgba(153, 102, 255, 0.5)",
    },
  ],
};

export default function DashboardGraph() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Graph</h2>
          <select className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-textcolor">
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-lg border border-textcolor/25 bg-white p-4 shadow-lg">
        <Bar style={{ width: "100%", height: "100%" }} options={options} data={data} />
      </div>
    </>
  );
}
