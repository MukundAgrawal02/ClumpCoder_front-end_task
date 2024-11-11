import React from "react";
import TopMetrics from "./TopMetrics";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import RegionMap from "./RegionMap";


function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    {/* Top Metrics */}
    <TopMetrics />

    <div className="grid grid-cols-3 gap-4 mt-6">
      {/* Line Chart */}
      <div className="col-span-2 bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-blue-500">Total Revenue</h2>
        <LineChart />
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold">Profit this week</h2>
        <BarChart />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mt-6">
      {/* Donut Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <DonutChart />
      </div>

      {/* Region Map */}
      <div className="bg-white p-6 rounded-lg shadow">
        <RegionMap />
      </div>
    </div>
  </div>
  );
}

export default Dashboard;
