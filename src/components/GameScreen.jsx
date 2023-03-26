import React from "react";
import Mining from "./Mining";
import StockMarket from "./StockMarket";
import Upgrades from "./Upgrades";

export default function GameScreen() {
  return (
    <div className="gamepage">
      <Mining />
      <Upgrades />
      <StockMarket />
    </div>
  );
}
