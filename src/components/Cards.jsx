import React from "react";
// import TrendUpIcon from "../../public/assets/icons/trend-up.svg";
// import TrendDownIcon from "../../public/assets/icons/trend-down.svg";

const Cards = ({ icon, users, userNumber, analytics, total }) => {
  const analyticsColorClass =
    analytics === "stable"
      ? "text-green-600"
      : analytics && analytics.startsWith("+")
      ? "text-green-600"
      : analytics && analytics.startsWith("-")
      ? "text-red-600"
      : "text-gray-600";

  let displayAnalyticsIcon = null;

  if (analytics === "stable") {
    displayAnalyticsIcon = (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1"
      >
        <circle cx="6" cy="6" r="4" fill="#10B981" />
      </svg>
    );
  } else if (analytics && analytics.startsWith("-")) {
    displayAnalyticsIcon = (
      <img
        src={TrendDownIcon}
        alt="Trend Down Icon"
        className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
      />
    );
  } else if (analytics && analytics.startsWith("+")) {
    displayAnalyticsIcon = (
      <img
        src={TrendUpIcon}
        alt="Trend Up Icon"
        className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
      />
    );
  }

  return (
    <div
      className="w-full p-3 sm:p-4 md:p-5 flex flex-col gap-2 sm:gap-3 border border-[rgba(37,37,37,0.07)]
        bg-white rounded-[10px] sm:rounded-[12px] shadow-sm hover:shadow-md transition-shadow
        text-gray-900"
    >
      <div>
        <img
          src={icon}
          alt={`${users} Icon`}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11"
        />
      </div>

      <div className="opacity-80 text-sm sm:text-[15px] md:text-[16px] leading-[1] font-semibold">
        <p>{users}</p>
      </div>

      <div className="flex gap-1 sm:gap-2 items-center">
        <h1 className="text-xl sm:text-2xl font-bold mb-0 leading-[1]">
          {userNumber}
        </h1>
        {analytics && (
          <p className="flex items-center text-xs sm:text-sm">
            {displayAnalyticsIcon}
            <span className={`${analyticsColorClass} font-medium`}>
              {analytics}
            </span>
          </p>
        )}
      </div>

      {total && (
        <div className="text-xs sm:text-sm leading-[1] opacity-80 line-clamp-1">
          <p>{total}</p>
        </div>
      )}
    </div>
  );
};

export default Cards;
