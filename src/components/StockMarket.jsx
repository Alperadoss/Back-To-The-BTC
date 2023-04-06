import React from "react";

export default function StockMarket(props) {
  //pauser to prevent conflict with timecounter component
  function Pauser() {
    props.setIsRunning(false);
  }
  function Player() {
    props.setIsRunning(true);
  }

  // BTC sell - USD buy Functionality
  function handleBTCSubmit(event) {
    event.preventDefault();
    Pauser();
    let formAmount = event.target[0].value;
    let earlierUSD = props.usdbalance;
    let earlierBTC = props.btcbalance;
    if (props.btcbalance >= formAmount) {
      props.setUsdbalance(
        Math.round((earlierUSD + props.btcUsdRatio * formAmount) * 1000) / 1000
      );
      props.setBtcbalance(Math.round((earlierBTC - formAmount) * 1000) / 1000);
    }
    event.target[0].value = "";
    setTimeout(Player, 300);
  }

  // USD sell - BTC buy Functionality
  function handleUSDSubmit(event) {
    event.preventDefault();
    Pauser();

    let formAmount = event.target[0].value;
    let earlierUSD = props.usdbalance;
    let earlierBTC = props.btcbalance;
    if (props.usdbalance >= formAmount) {
      props.setBtcbalance(earlierBTC + formAmount / props.btcUsdRatio);
      props.setUsdbalance(earlierUSD - formAmount);
    }
    event.target[0].value = "";
    setTimeout(Player, 300);
  }
  //Exchange Rate Update Functionality
  const exchangeRateData = [
    4.9, 6.7, 12.4, 13.5, 33, 130, 120, 190, 700, 500, 600, 320, 240, 280, 420,
    400, 440, 600, 650, 720, 1200, 2100, 4700, 13000, 9000, 7000, 6000, 4000,
    3800, 10000, 8300, 7000, 6600, 9400, 11500, 28000, 45000, 58000, 47000,
    61000, 43000, 32000, 20000, 18000,
  ];
  props.setBtcUsdRatio(exchangeRateData[props.term]);

  return (
    <div className="stockmarket">
      <h1>Stock Market</h1>
      <h3>Exchange Rate: {props.btcUsdRatio} USD/BTC</h3>

      <div className="buysell">
        <form onSubmit={handleBTCSubmit}>
          BTC:{" "}
          <input className="inputbox" type="number" name="btcamount"></input>
          <button className="stockbtn" type="submit">
            SELL BTC
          </button>
        </form>
      </div>
      <div className="buysell">
        <form onSubmit={handleUSDSubmit}>
          USD:{" "}
          <input className="inputbox" type="number" name="usdamount"></input>
          <button className="stockbtn" type="submit">
            SELL USD
          </button>
        </form>
      </div>

      <p>USD Balance: {props.usdbalance} USD</p>
      <p>BTC Balance: {props.btcbalance} BTC</p>
    </div>
  );
}
