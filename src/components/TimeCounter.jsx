import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 ms using JS setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  //simulated time calculation
  const day = 1 + Math.floor((time % 1500) / 50);
  const month = 1 + Math.floor((time % 18000) / 1500);
  const year = 2012 + Math.floor(time / 18000);

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        year:{year.toString()} / month:{month.toString().padStart(2, "0")} /
        day:
        {day.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
