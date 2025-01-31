import AtmCard from "@/components/svg/atm-card";
import Cart from "@/components/svg/cart";
import Package from "@/components/svg/package";
import Truck from "@/components/svg/truck";
import { abbreviateNumber, convertCurrency } from "@/utils/format-number";
import { useEffect, useState } from "react";

export default function DashboardStatsCards() {
  const [stats, setStats] = useState([
    {
      title: "Total Orders",
      value: 12340,
      icon: <Cart className="text-xl text-blue-500" />,
      bgColor: "bg-blue-100",
      bdColor: "border-blue-500",
    },
    {
      title: "In-Transit Shipments",
      value: 3210,
      icon: <Truck className="text-xl text-yellow-500" />,
      bgColor: "bg-yellow-100",
      bdColor: "border-yellow-500",
    },
    {
      title: "Orders Delivered",
      value: 9850,
      icon: <Package className="text-xl text-green-500" />,
      bgColor: "bg-green-100",
      bdColor: "border-green-500",
    },
    {
      title: "Total Debt (₦)",
      value: 245456897643,
      isCurrency: true,
      icon: <AtmCard className="text-xl text-purple-500" />,
      bgColor: "bg-purple-100",
      bdColor: "border-purple-500",
    },
  ]);

  // replace one of the data cards with a different values simulating coming back from an api to mutate a data realtime
  useEffect(() => {
    setTimeout(() => {
      setStats((prevStats) => [
        ...prevStats.slice(0, 1),
        {
          title: "In-Transit Shipments",
          value: 60586,
          icon: <Truck className="text-xl text-yellow-500" />,
          bgColor: "bg-yellow-100",
          bdColor: "border-yellow-500",
        },
        ...prevStats.slice(2),
      ]);
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div className="rounded-lg border border-b-4 border-primary/25 p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div key={index} className={`flex gap-4`}>
            <div
              className={`mb-auto flex aspect-square w-10 flex-col items-center justify-center rounded-lg border ${stat.bgColor} ${stat.bdColor}`}
            >
              <span>{stat.icon}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm text-textcolor">{stat.title}</h4>
              <h2 title={stat.value?.toLocaleString()} className="text-2xl font-bold">
                {abbreviateNumber(stat.value).toLocaleString()}
              </h2>
            </div>
          </div>

          {stat.isCurrency && (
            <p className="mt-4 block w-full text-xs text-textcolor">
              {convertCurrency(stat.value, "NGN", "USD").toLocaleString()} (USD)
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// export function DashboardStatsSkeleton() {
//   return (
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//       {Array.from({ length: 4 }).map((_, index) => (
//         <div
//           key={index}
//           className={`flex items-center gap-4 rounded-lg border border-b-4 border-primary/25 p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
//         >
//           <div
//             className={`mb-auto flex aspect-square w-10 flex-col items-center justify-center rounded-lg border bg-gray-100`}
//           >
//             <span className="animate-pulse text-xl text-gray-300">...</span>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h4 className="h-4 w-20 animate-pulse bg-gray-100 text-sm text-textcolor"></h4>
//             <h2 className="h-6 w-20 animate-pulse bg-gray-100 text-2xl font-bold"></h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
