import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Product One",
      data: [23, 45, 60, 40, 80, 70, 50, 60, 90, 100, 75, 85],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      fill: true,
    },
    {
      label: "Product Two",
      data: [30, 50, 65, 45, 85, 75, 55, 65, 95, 105, 80, 90],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      fill: true,
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

function LineChart() {
  return (
    <div className="h-72">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
