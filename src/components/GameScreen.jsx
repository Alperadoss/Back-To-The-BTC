import React, { useState, useEffect } from "react";
import StockMarket from "./StockMarket";
import Upgrades from "./Upgrades";

export default function GameScreen() {
  const [usdbalance, setUsdbalance] = useState(2500);
  const [btcbalance, setBtcbalance] = useState(0);
  const [btcUsdRatio, SetBtcUsdRatio] = useState(1230);
  const [miningPower, setMiningPower] = useState(0.01);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  //--- TimeCounter Functionalities ---
  // state to store time
  useEffect(() => {
    let intervalId;
    //Calendar and miningpower functions use same setInterval
    function timeFunc() {
      setTime(time + 1);
    }
    function secCounter() {
      setBtcbalance(Math.round((btcbalance + miningPower) * 100) / 100);
    }
    if (isRunning) {
      // setting time from 0 to 1 every 500 ms
      intervalId = setInterval(function () {
        timeFunc();
        secCounter();
      }, 500);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  //simulated time calculation
  const day = 1 + Math.floor(time % 30);
  const month = 1 + Math.floor((time % 360) / 30);
  const year = 2012 + Math.floor(time / 360);

  // Method to start and pause timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };
  ///////
  return (
    <div className="gamepage">
      <div className="mineboard">
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
      </div>
      <Upgrades
        usdbalance={usdbalance}
        setUsdbalance={setUsdbalance}
        setMiningPower={setMiningPower}
        miningPower={miningPower}
      />
      <StockMarket
        usdbalance={usdbalance}
        setUsdbalance={setUsdbalance}
        btcbalance={btcbalance}
        setBtcbalance={setBtcbalance}
        btcUsdRatio={btcUsdRatio}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
    </div>
  );
}
