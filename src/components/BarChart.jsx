import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "Sales",
      data: [50, 60, 80, 70, 60, 50, 80],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
    {
      label: "Revenue",
      data: [70, 80, 90, 60, 50, 40, 90],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function BarChart() {
  return (
    <div className="h-72">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
