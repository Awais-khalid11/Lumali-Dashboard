import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts";

const pieChartData = [
  { name: "Fat Loss", value: 200, color: "#003333" },
  { name: "Muscle Gain", value: 150, color: "#00C49F" },
  { name: "Longevity", value: 100, color: "#6A0DAD" },
  { name: "Sleep Optimization", value: 50, color: "#FFBB28" },
  { name: "Other", value: 20, color: "#98FB98" },
];

const PieCharts = () => {
  const totalValue = pieChartData.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="p-4 sm:p-5 rounded-[20px] shadow-sm bg-white">
      <div className="text-xl sm:text-[25px] font-bold text-black mb-4">
        <h1 className="leading-[1]">Goal Pie Chart</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="relative" style={{ width: "200px", height: "200px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                isAnimationActive={false}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="font-bold text-xl sm:text-2xl text-[#333]">
              Total
            </span>
            <span className="font-bold text-2xl sm:text-3xl text-[#333]">
              100%
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          {pieChartData.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-start mb-2">
              <span
                className="w-3 h-3 rounded-full mr-2 mt-1"
                style={{ backgroundColor: entry.color }}
              ></span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-gray-700">
                  {entry.name}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  {((entry.value / totalValue) * 100).toFixed(0)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
