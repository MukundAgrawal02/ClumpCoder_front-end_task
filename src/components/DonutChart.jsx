import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
  datasets: [
    {
      data: [65, 34, 45, 12],
      backgroundColor: ["#3b82f6", "#6366f1", "#38bdf8", "#0ea5e9"],
      hoverBackgroundColor: ["#3b82f6", "#6366f1", "#38bdf8", "#0ea5e9"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

function DonutChart() {
  return (
    <div className="h-72 flex flex-col items-center">
      <h2 className="text-lg font-semibold">Visitors Analytics</h2>
      <Doughnut data={data} options={options} />
      <div className="flex justify-around w-full mt-4">
        {data.labels.map((label, index) => (
          <div key={index} className="text-center">
            <div className="text-sm font-semibold">{label}</div>
            <div className="text-sm">{data.datasets[0].data[index]}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonutChart;
