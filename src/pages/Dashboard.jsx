// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Button from "../components/Button";
import Cards from "../components/Cards";
import LineCharts from "../components/LineCharts";
import ProgressChart from "../components/ProgressChart";

const textData = ["All Time", "This Week", "This Month", "This Year"];

const allCardsData = {
  "All Time": [
    {
      type: "total-users",
      title: "Total Users",
      value: "1,482,345",
      analytics: "+38%",
    },
    {
      type: "active-children",
      title: "Active Children",
      value: "1,220,000",
      analytics: "+15%",
    },
    {
      type: "stories",
      title: "Stories Generated",
      value: "250,000",
      analytics: "+22%",
    },
    {
      type: "subscriptions",
      title: "New Subscriptions",
      value: "68",
      analytics: "+22%",
    },
  ],
  "This Week": [
    {
      type: "total-users",
      title: "Total Users",
      value: "10,000",
      analytics: "+38%",
    },
    {
      type: "active-children",
      title: "Active Children",
      value: "9,500",
      analytics: "+12%",
    },
    {
      type: "stories",
      title: "Stories Generated",
      value: "1,687",
      analytics: "+1.0%",
    },
    {
      type: "subscriptions",
      title: "New Subscriptions",
      value: "21",
      analytics: "+8%",
    },
  ],
  "This Month": [
    {
      type: "total-users",
      title: "Total Users",
      value: "1,482",
      analytics: "+38%",
    },
    {
      type: "active-children",
      title: "Active Children",
      value: "316",
      analytics: "-21%",
    },
    {
      type: "stories",
      title: "Stories Generated",
      value: "500",
      analytics: "+22%",
    },
    {
      type: "subscriptions",
      title: "New Subscriptions",
      value: "88",
      analytics: "+22%",
    },
  ],
  "This Year": [
    {
      type: "total-users",
      title: "Total Users",
      value: "1,200,000",
      analytics: "+25%",
    },
    {
      type: "active-children",
      title: "Active Children",
      value: "950,000",
      analytics: "+10%",
    },
    {
      type: "stories",
      title: "Stories Generated",
      value: "300,000",
      analytics: "+18%",
    },
    {
      type: "subscriptions",
      title: "New Subscriptions",
      value: "4,800",
      analytics: "+22%",
    },
  ],
};

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("This Month");

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  const currentCards = allCardsData[activeButton] || [];

  return (
    <div className="px-2.5 sm:px-4">
      <div className="flex flex-col sm:flex-row justify-between flex-wrap items-start sm:items-center mb-4 sm:mb-[15px] mt-1.5">
        <h1 className="text-xl sm:text-[25px] font-bold text-black leading-[1] mb-4 sm:mb-0">
          Summary Overview
        </h1>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {textData.map((item) => (
            <Button
              key={item}
              text={item}
              isActive={item === activeButton}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </div>

      <div className="mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {currentCards.map((card, index) => (
            <Cards
              key={index}
              type={card.type}
              title={card.title}
              value={card.value}
              analytics={card.analytics}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="mb-5">
        <LineCharts />
      </div>

      <div className="w-full">
        <ProgressChart />
      </div>
    </div>
  );
};

export default Dashboard;
