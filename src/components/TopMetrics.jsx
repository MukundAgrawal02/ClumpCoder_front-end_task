import React from "react";

const metrics = [
  { label: "Total Views", value: "3.456K", change: "0.43%", up: true },
  { label: "Total Profit", value: "$45.2K", change: "4.35%", up: true },
  { label: "Total Product", value: "2,450", change: "2.59%", up: true },
  { label: "Total Users", value: "3,456", change: "0.95%", up: false },
];

function TopMetrics() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
        >
          <div className="text-2xl font-bold">{metric.value}</div>
          <div className="text-sm text-gray-500">{metric.label}</div>
          <div className={`text-sm ${metric.up ? "text-green-500" : "text-red-500"}`}>
            {metric.change} {metric.up ? "↑" : "↓"}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopMetrics;
