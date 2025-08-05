import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Button from "./Button";

const allChartData = {
  "12 Months": [
    { name: "Jan", pv: 400 },
    { name: "Feb", pv: 300 },
    { name: "Mar", pv: 500 },
    { name: "Apr", pv: 700 },
    { name: "May", pv: 600 },
    { name: "Jun", pv: 800 },
    { name: "Jul", pv: 750 },
    { name: "Aug", pv: 900 },
    { name: "Sep", pv: 850 },
    { name: "Oct", pv: 700 },
    { name: "Nov", pv: 650 },
    { name: "Dec", pv: 950 },
  ],
  "30 Days": [
    { name: "3 Jul", pv: 200 },
    { name: "5 Jul", pv: 350 },
    { name: "7 Jul", pv: 450 },
    { name: "10 Jul", pv: 300 },
    { name: "13 Jul", pv: 500 },
    { name: "16 Jul", pv: 600 },
    { name: "19 Jul", pv: 400 },
    { name: "22 Jul", pv: 700 },
    { name: "25 Jul", pv: 550 },
    { name: "28 Jul", pv: 800 },
    { name: "30 Jul", pv: 700 },
  ],
  "7 Days": [
    { name: "Mon", pv: 250 },
    { name: "Tue", pv: 400 },
    { name: "Wed", pv: 300 },
    { name: "Thu", pv: 550 },
    { name: "Fri", pv: 480 },
    { name: "Sat", pv: 620 },
    { name: "Sun", pv: 500 },
  ],
  "24 Hours": [
    { name: "00:00", pv: 100 },
    { name: "04:00", pv: 250 },
    { name: "08:00", pv: 400 },
    { name: "12:00", pv: 600 },
    { name: "16:00", pv: 500 },
    { name: "20:00", pv: 700 },
    { name: "24:00", pv: 650 },
  ],
};

const chartTabLabels = ["12 Months", "30 Days", "7 Days", "24 Hours"];

const LineCharts = () => {
  const [activeChartTab, setActiveChartTab] = useState("30 Days");
  const currentChartData = allChartData[activeChartTab] || [];

  const handleChartTabClick = (tabLabel) => setActiveChartTab(tabLabel);

  return (
    <div className="bg-white rounded-[12px] shadow-sm p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 justify-between items-start sm:items-center">
        <h1 className="text-xl sm:text-[25px] font-bold text-black leading-[1]">
          User Grow Chart
        </h1>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {chartTabLabels.map((item) => (
            <Button
              key={item}
              text={item}
              isActive={item === activeChartTab}
              onButtonClick={handleChartTabClick}
            />
          ))}
        </div>
      </div>

      {/* 📱 Mobile - Horizontal Scrollable Chart */}
      <div className="block md:hidden overflow-x-auto pb-2">
        <div className="min-w-[700px] h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={currentChartData}
              syncId="anyId"
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A9C87B" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#B0ED5600" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke="rgba(0, 0, 0, 0.05)"
                strokeDasharray="1 1"
              />
              <XAxis dataKey="name" stroke="#999" />
              <YAxis
                domain={[0, 1000]}
                ticks={[0, 200, 400, 600, 800, 1000]}
                stroke="#999"
              />
              <Tooltip />

              <Area
                type="linear"
                dataKey="pv"
                stroke="#B0ED56"
                strokeWidth={2}
                fill="url(#greenGradient)"
                dot={{
                  r: 4,
                  stroke: "#B0ED56",
                  strokeWidth: 2,
                  fill: "#ffffff",
                }}
                activeDot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 💻 Desktop - Full Width Chart */}
      <div className="hidden md:block w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={currentChartData}
            syncId="anyId"
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A9C87B" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#B0ED5600" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="rgba(0, 0, 0, 0.05)" strokeDasharray="1 1" />
            <XAxis dataKey="name" stroke="#999" />
            <YAxis
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
              stroke="#999"
            />
            <Tooltip />

            <Area
              type="linear"
              dataKey="pv"
              stroke="#B0ED56"
              strokeWidth={2}
              fill="url(#greenGradient)"
              dot={{
                r: 4,
                stroke: "#B0ED56",
                strokeWidth: 2,
                fill: "#ffffff",
              }}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineCharts;
