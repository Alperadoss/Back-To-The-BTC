import React from "react";
import TimeCounter from "./TimeCounter";

export default function Mining() {
  return (
    <div className="mineboard">
      <h1>MiningBoard</h1>
      <TimeCounter />
      <p>Currently mining...</p>
      <p> 15 BTC/month</p>
      <p>Total: 25 BTC</p>
      <br />
      <p>Cash Money</p>
      <p>16.000 USD </p>
    </div>
  );
}
