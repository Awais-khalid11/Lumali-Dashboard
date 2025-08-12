import React, { useState, useEffect } from "react";
import { X, Play, Pause, Volume2 } from "lucide-react";

const songs = [
  {
    title: "Fluttersoup's School for Unicorn",
    artist: "Jungle",
    duration: 264,
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop",
  },
];

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const PlayStoryModal = ({ onClose }) => {
  const [song] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(89);
  const [volume, setVolume] = useState(60);

  useEffect(() => {
    let interval;
    if (isPlaying && progress < song.duration) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress, song]);

  const progressPercent = Math.round((progress / song.duration) * 100);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-end bg-black/50 p-4">
      {/* Modal container */}
      <div className="relative rounded-xl shadow-xl w-full max-w-3xl bg-white mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-white hover:text-orange-300 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-4 flex flex-col sm:flex-row sm:items-center gap-4 w-full">
          {/* Left - Album Art + Info */}
          <div className="flex items-center gap-3 w-full sm:w-48 flex-shrink-0">
            <img
              src={song.image}
              alt="Album Art"
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 truncate">
                {song.title}
              </h3>
              <p className="text-xs text-gray-600 truncate">{song.artist}</p>
            </div>
          </div>

          {/* Center - Play/Pause + Progress */}
          <div className="flex-1 flex flex-col items-center px-4 min-w-0">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors mb-2"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" />
              )}
            </button>

            {/* Progress Bar */}
            <div className="w-full relative">
              <div className="h-1.5 bg-gray-200 rounded-full w-full">
                <div
                  className="h-full bg-orange-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(song.duration)}</span>
              </div>
            </div>
          </div>

          {/* Right - Volume Control */}
          <div className="flex items-center gap-2 w-full sm:w-32 flex-shrink-0">
            <Volume2 className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStoryModal;
