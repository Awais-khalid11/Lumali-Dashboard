import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const allNotificationsData = [
  {
    id: 1,
    name: "Drew Cano",
    time: "3 hours ago",
    message: "drew.cano@gmail.com signed up.",
    avatar: "https://i.pravatar.cc/40?img=12",
    unread: true,
    following: true,
  },
  {
    id: 2,
    name: "Zahir Mays",
    time: "4 hours ago",
    message: "Subscription upgraded for user zahir.mays@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=8",
    unread: true,
    following: false,
  },
  {
    id: 3,
    name: "Rene Wells",
    time: "6 hours ago",
    message: "Payment succeeded for user rene.wells@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=5",
    unread: false,
    following: false,
  },
  {
    id: 4,
    name: "Joshua Wilson",
    time: "4 hours ago",
    message: "Subscription upgraded for user joshua.Wilson@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=15",
    unread: false,
    following: true,
  },
  {
    id: 5,
    name: "Loki Bright",
    time: "5 hours ago",
    message: "zahir.mays@gmail.com updated profile information.",
    avatar: "https://i.pravatar.cc/40?img=47",
    unread: false,
    following: false,
  },
  {
    id: 6,
    name: "Lori Bryson",
    time: "15 hours ago",
    message: "Password reset requested by user lori.bryson@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=23",
    unread: false,
    following: false,
  },
  {
    id: 7,
    name: "Anita Cruz",
    time: "4 hours ago",
    message: "Subscription upgraded for user anita.cruz@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=32",
    unread: true,
    following: true,
  },
  {
    id: 8,
    name: "Loki Bright",
    time: "5 hours ago",
    message: "zahir.mays@gmail.com updated profile information.",
    avatar: "https://i.pravatar.cc/40?img=44",
    unread: false,
    following: false,
  },
];

const archivedNotificationsData = [
  {
    id: 101,
    name: "Archived - Name 1",
    time: "2 days ago",
    message: "Old notice archived for user archived1@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=3",
    unread: false,
    following: false,
  },
  {
    id: 102,
    name: "Archived - Name 2",
    time: "3 days ago",
    message: "Old notice archived for user archived2@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=11",
    unread: false,
    following: false,
  },
];

export default function Notifications() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const all = allNotificationsData;
  const following = allNotificationsData.filter((n) => n.following === true);
  const archived = archivedNotificationsData;

  const visible = useMemo(() => {
    if (filter === "following") return following;
    if (filter === "archive") return archived;
    return all;
  }, [filter]);

  const counts = {
    all: all.length,
    following: following.length,
    archive: archived.length,
  };

  return (
    <div className="">
      <div className="">
        <div className="bg-white rounded-xl shadow-md border border-[#F0E6DE] overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-5">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Notifications
            </h1>

            <div className="flex flex-wrap gap-2">
              {/* All */}
              <button
                onClick={() => setFilter("all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none shadow-sm ${
                  filter === "all"
                    ? "bg-[#F6A623] text-white"
                    : "bg-white text-gray-700 border border-[#ECE4DA]"
                }`}
              >
                <span>All</span>
                <span
                  className={`inline-flex items-center justify-center text-xs font-semibold rounded-full w-6 h-6 ${
                    filter === "all"
                      ? "bg-white text-[#F6A623]"
                      : "bg-[#FFF7ED] text-[#F6A623]"
                  }`}
                >
                  {counts.all}
                </span>
              </button>

              <button
                onClick={() => setFilter("following")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none shadow-sm ${
                  filter === "following"
                    ? "bg-[#F6A623] text-white"
                    : "bg-white text-gray-700 border border-[#ECE4DA]"
                }`}
              >
                <span>Following</span>
                <span
                  className={`inline-flex items-center justify-center text-xs font-semibold rounded-full w-6 h-6 ${
                    filter === "following"
                      ? "bg-white text-blue-500"
                      : "bg-blue-50 text-blue-500"
                  }`}
                >
                  {counts.following}
                </span>
              </button>

              {/* Archive */}
              <button
                onClick={() => setFilter("archive")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none shadow-sm ${
                  filter === "archive"
                    ? "bg-[#F6A623] text-white"
                    : "bg-white text-gray-700 border border-[#ECE4DA]"
                }`}
              >
                <span>Archive</span>
                <span
                  className={`inline-flex items-center justify-center text-xs font-semibold rounded-full w-6 h-6 ${
                    filter === "archive"
                      ? "bg-white text-green-500"
                      : "bg-green-50 text-green-500"
                  }`}
                >
                  {counts.archive}
                </span>
              </button>
            </div>
          </div>

          <div className="divide-y divide-[#F1E9E0]">
            {visible.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No notifications in this folder.
              </div>
            ) : (
              visible.map((n) => (
                <div
                  key={n.id}
                  className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={n.avatar}
                      alt={n.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-sm text-gray-900 truncate">
                          {n.name}
                        </span>
                        <span className="text-xs text-gray-400">{n.time}</span>
                      </div>
                      <p className="text-sm text-gray-500 break-words max-w-full sm:max-w-[46rem]">
                        {n.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    {n.unread ? (
                      <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mt-1.5 sm:mt-2.5" />
                    ) : (
                      <div style={{ width: 10 }} />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
