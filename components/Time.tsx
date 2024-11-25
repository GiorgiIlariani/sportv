"use client";

import { useEffect, useState } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    // Initial clock update and setInterval
    updateClock();
    const timer = setInterval(updateClock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return <div className="text-lg font-semibold">{currentTime}</div>;
};

export default Time;
