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
import Download from "@/components/svg/download";

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

type T_chart_types = "bar";

type T_chart_options = _DeepPartialObject<
  CoreChartOptions<T_chart_types> &
    ElementChartOptions<T_chart_types> &
    BarControllerChartOptions &
    PluginChartOptions<T_chart_types> &
    ScaleChartOptions<T_chart_types> &
    DatasetChartOptions<T_chart_types>
>;

const options: T_chart_options = {
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

const years = [
  2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
];

export default function DashboardGraph() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Graph</h2>
          <div className="flex items-center gap-4">
            <button className="btn flex items-center gap-2 text-primary/50">
              <Download className="text-xl" />
              <p className="text-primary/50">Download</p>
            </button>

            <select className="rounded-lg border border-dark/50 bg-textcolor/10 px-4 py-2 text-sm text-textcolor ring-1 ring-textcolor/50">
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-lg border border-textcolor/25 bg-white p-4 shadow-lg">
        <Bar style={{ width: "100%", height: "100%" }} options={options} data={data} />
      </div>
    </>
  );
}
