import React from "react";
import TotalUsersIcon from "../assets/icons/totaluser.svg";
import ActiveChildrenIcon from "../assets/icons/little-Kid.svg";
import StoriesIcon from "../assets/icons/reels.svg";
import SubscriptionsIcon from "../assets/icons/crown.svg";
import TrendUpIcon from "../assets/icons/trend-up.svg";
import TrendDownIcon from "../assets/icons/trend-up.svg";

const Cards = ({
  type = "total-users",
  title,
  value,
  analytics,
  description,
}) => {
  const getIcon = () => {
    switch (type) {
      case "total-users":
        return TotalUsersIcon;
      case "active-children":
        return ActiveChildrenIcon;
      case "stories":
        return StoriesIcon;
      case "subscriptions":
        return SubscriptionsIcon;
      default:
        return TotalUsersIcon;
    }
  };

  const getAnalyticsDisplay = () => {
    if (!analytics) return null;

    let colorClass = "text-gray-600";
    let icon = null;

    if (analytics === "stable") {
      colorClass = "text-green-600";
      icon = <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>;
    } else if (analytics.startsWith("+")) {
      colorClass = "text-green-600";
      icon = <img src={TrendUpIcon} alt="Trend Up" className="w-3 h-3 mr-1" />;
    } else if (analytics.startsWith("-")) {
      colorClass = "text-red-600";
      icon = (
        <img src={TrendDownIcon} alt="Trend Down" className="w-3 h-3 mr-1" />
      );
    }

    return { colorClass, icon };
  };

  const analyticsDisplay = getAnalyticsDisplay();

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start gap-3">
        {/* Icon on left */}
        <img src={getIcon()} alt={`${title} Icon`} className="w-10 h-10 mt-1" />

        {/* Content on right */}
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>

          {/* Value + Analytics in a row */}
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
            {analytics && analyticsDisplay && (
              <div className="flex items-center">
                {analyticsDisplay.icon}
                <span
                  className={`text-xs font-medium ${analyticsDisplay.colorClass}`}
                >
                  {analytics}
                </span>
              </div>
            )}
          </div>

          {description && (
            <p className="text-xs text-gray-500">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
