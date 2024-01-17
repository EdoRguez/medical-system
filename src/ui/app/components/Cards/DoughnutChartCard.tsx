"use client";

import { tailwindConfig } from "@/app/utils/Utils";
import DoughnutChart from "../charts/DoughnutChart";

const DoughnutChartCard = () => {
  const chartData = {
    labels: ["United States", "Italy", "Other"],
    datasets: [
      {
        label: "Top Countries",
        data: [35, 30, 35],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-md border border-slate-600">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Top Countries
        </h2>
      </header>
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
};

export default DoughnutChartCard;
