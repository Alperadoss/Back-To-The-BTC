import React, { useState } from "react";
import Mining from "./Mining";
import StockMarket from "./StockMarket";
import Upgrades from "./Upgrades";

export default function GameScreen() {
  const [usdbalance, setUsdbalance] = useState(500);
  const [btcbalance, setBtcbalance] = useState(10);
  const [btcUsdRatio, SetBtcUsdRatio] = useState(1230);

  return (
    <div className="gamepage">
      <Mining />
      <Upgrades />
      <StockMarket
        usdbalance={usdbalance}
        setUsdbalance={setUsdbalance}
        btcbalance={btcbalance}
        setBtcbalance={setBtcbalance}
        btcUsdRatio={btcUsdRatio}
      />
    </div>
  );
}
