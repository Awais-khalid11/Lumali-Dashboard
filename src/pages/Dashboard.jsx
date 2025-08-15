// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Button from "../components/Button";
import Cards from "../components/Cards";
import LineCharts from "../components/LineCharts";
import ProgressChart from "../components/ProgressChart";
import BasicTable from "../components/BasicTable";

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

// Tables: columns and data
const themeUsageColumns = [
  { key: "theme", label: "Theme" },
  { key: "count", label: "Count" },
  { key: "percentage", label: "% of Total Stories" },
];

const themeUsageData = [
  { theme: "Jungle", count: "62,430", percentage: "24.9%" },
  { theme: "Space", count: "51,210", percentage: "20.4%" },
  { theme: "Fantasy", count: "47,980", percentage: "19.1%" },
  { theme: "Ocean", count: "39,665", percentage: "15.8%" },
  { theme: "Adventure", count: "49,320", percentage: "19.7%" },
];

const recentStoriesColumns = [
  { key: "storyId", label: "Story ID" },
  { key: "child", label: "Child" },
  { key: "type", label: "Type" },
  { key: "theme", label: "Theme" },
  { key: "date", label: "Date" },
];

const recentStoriesData = [
  {
    storyId: "10234",
    child: "Bessie Cooper",
    type: "Full",
    theme: "Jungle",
    date: "2025-07-06",
  },
  {
    storyId: "10233",
    child: "Jerome Bell",
    type: "Semi",
    theme: "Space",
    date: "2025-07-06",
  },
  {
    storyId: "10232",
    child: "Ronald Richards",
    type: "Full",
    theme: "Fantasy",
    date: "2025-07-06",
  },
  {
    storyId: "10231",
    child: "Robert Fox",
    type: "Semi",
    theme: "Ocean",
    date: "2025-07-06",
  },
  {
    storyId: "10230",
    child: "Theresa Webb",
    type: "Full",
    theme: "Adventure",
    date: "2025-07-06",
  },
];

const recentActivityData = [
  {
    activity: "Alice Johnson signed up as a consumer",
    time: "2 hrs ago",
    avatar: "https://randomuser.me/api/portraits/thumb/women/10.jpg",
  },
  {
    activity: "Offer Approved: Offer #456 approved for Bliss Beauty",
    time: "2 hrs ago",
    avatar: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
  },
  {
    activity: "Carol Williams updated offer #452 (Price changed)",
    time: "2 hrs ago",
    avatar: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
  },
  {
    activity: "David Brown added payment method (Visa •••• 8821)",
    time: "1 hr ago",
    avatar: "https://randomuser.me/api/portraits/thumb/men/13.jpg",
  },
];

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

      <div className="mb-5 bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Usage Trends
        </h3>
        <div className="w-full" style={{ minHeight: "300px" }}>
          <LineCharts />
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Themes by Usage
          </h3>
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="w-full xl:w-[65%]">
              <BasicTable
                columns={themeUsageColumns}
                data={themeUsageData}
                showSearch={false}
                showFilter={false}
                showPagination={true}
                itemsPerPage={5}
                showExportBtn={false}
                showHeader={false}
              />
            </div>

            <div className="w-full xl:w-[35%] flex items-center justify-center">
              <ProgressChart />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-3/5">
              <BasicTable
                title="Recent Stories"
                columns={recentStoriesColumns}
                data={recentStoriesData}
                showSearch={false}
                showFilter={false}
                showPagination={true}
                itemsPerPage={5}
                showExportBtn={false}
              />
            </div>

            <div className="w-full xl:w-2/5">
              <div className="border border-gray-200 rounded-md p-4 h-full flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Activity
                </h3>

                {/* Scrollable list */}
                <div
                  className="space-y-4 overflow-y-auto pr-2"
                  style={{ maxHeight: "400px" }}
                >
                  {recentActivityData.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <img
                        src={item.avatar}
                        alt="User"
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-1"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 leading-5 font-medium">
                          {item.activity}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
