import React, { useState } from "react";
import TimeCounter from "./TimeCounter";
import StockMarket from "./StockMarket";
import Upgrades from "./Upgrades";

export default function GameScreen() {
  const [usdbalance, setUsdbalance] = useState(2500);
  const [btcbalance, setBtcbalance] = useState(0);
  const [btcUsdRatio, SetBtcUsdRatio] = useState(1230);
  const [miningPower, setMiningPower] = useState(0.01);
  // state to check timeCounter running or not
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="gamepage">
      <div className="mineboard">
        <h1>Stats</h1>
        <TimeCounter
          btcbalance={btcbalance}
          setBtcbalance={setBtcbalance}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          miningPower={miningPower}
        />
        <p>Currently mining...</p>
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
