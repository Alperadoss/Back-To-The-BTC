import React, { useState, useEffect } from "react";

const TimeCounter = (props) => {
  // state to store time
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    //Calendar and miningpower functions use same setInterval
    function timeFunc() {
      setTime(time + 1);
    }

    function secCounter() {
      props.setBtcbalance(
        Math.round((props.btcbalance + props.miningPower) * 100) / 100
      );
    }

    if (props.isRunning) {
      // setting time from 0 to 1 every 10 ms using JS setInterval method
      intervalId = setInterval(function () {
        timeFunc();
        secCounter();
      }, 500);
    }
    return () => clearInterval(intervalId);
  }, [props.isRunning, time]);

  //simulated time calculation
  const day = 1 + Math.floor(time % 30);
  const month = 1 + Math.floor((time % 360) / 30);
  const year = 2012 + Math.floor(time / 360);

  // Method to start and pause timer
  const startAndStop = () => {
    props.setIsRunning(!props.isRunning);
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
          {props.isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default TimeCounter;
