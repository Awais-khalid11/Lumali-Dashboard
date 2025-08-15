import React, { useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

const ProgressChart = () => {
  const [progressValue] = useState(58);

  const pieChartData = [
    { name: "Progress", value: progressValue },
    { name: "Remaining", value: 100 - progressValue },
  ];

  const fullCircle = [{ name: "Background", value: 100 }];

  return (
    <div className="rounded-[12px] border border-[rgba(0,0,0,0.1)] py-3 px-2 sm:py-[15px] sm:px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight">
          Full Personalized
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2">
          Story Types Distribution
        </p>

        <div className="relative" style={{ width: "150px", height: "150px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                <linearGradient
                  id="progressGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#EBA91D" />
                  <stop offset="100%" stopColor="#EBA91D" />
                </linearGradient>
                <linearGradient
                  id="remainingGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f5f5f5" />
                  <stop offset="100%" stopColor="#e8f5e8" />
                </linearGradient>
              </defs>

              {/* Outer background ring */}
              <Pie
                data={fullCircle}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={65}
                startAngle={0}
                endAngle={360}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#F3F3F6" />
              </Pie>

              {/* Progress ring */}
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={60}
                startAngle={90}
                endAngle={450}
                dataKey="value"
                isAnimationActive={true}
                animationDuration={1000}
                stroke="none"
              >
                <Cell fill="url(#progressGradient)" />
                <Cell fill="url(#remainingGradient)" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-800">
              {progressValue}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
