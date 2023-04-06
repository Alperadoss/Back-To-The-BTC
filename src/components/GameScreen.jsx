import React, { useState, useEffect, useMemo } from "react";
import StockMarket from "./StockMarket";
import Upgrades from "./Upgrades";
import stockmarketdata from "../assets/stockmarketdata.png";

export default function GameScreen() {
  const [usdbalance, setUsdbalance] = useState(300);
  const [btcbalance, setBtcbalance] = useState(0);
  const [btcUsdRatio, setBtcUsdRatio] = useState(4.9);
  const [miningPower, setMiningPower] = useState(0.005);
  const [isRunning, setIsRunning] = useState(true);
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
      setBtcbalance(Math.round((btcbalance + miningPower) * 1000) / 1000);
    }
    if (isRunning) {
      // setting time from 0 to 1 every 500 ms
      intervalId = setInterval(function () {
        timeFunc();
        secCounter();
      }, 300);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  //simulated time calculation
  const day = 1 + Math.floor(time % 30);
  const month = 1 + Math.floor((time % 360) / 30);
  const year = 2012 + Math.floor(time / 360);
  const term = Math.floor(time / 90);

  //Exchange rate update functionality
  //setBtcUsdRatio(exchangeRateData[term]);

  // Method to start and pause timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="gamepage">
      <div className="statsboard">
        <p className="stopwatch-time">
          {year.toString()} / {month.toString().padStart(2, "0")} /{" "}
          {day.toString().padStart(2, "0")}
        </p>
        <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
      <img className="datatable" src={stockmarketdata}></img>
      <StockMarket
        usdbalance={usdbalance}
        setUsdbalance={setUsdbalance}
        btcbalance={btcbalance}
        setBtcbalance={setBtcbalance}
        btcUsdRatio={btcUsdRatio}
        setIsRunning={setIsRunning}
        setBtcUsdRatio={setBtcUsdRatio}
        term={term}
      />
      <Upgrades
        usdbalance={usdbalance}
        setUsdbalance={setUsdbalance}
        setMiningPower={setMiningPower}
        miningPower={miningPower}
      />
    </div>
  );
}
