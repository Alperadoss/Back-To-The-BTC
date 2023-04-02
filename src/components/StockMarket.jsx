import React from "react";

export default function StockMarket(props) {
  //pauser to prevent conflict with timecounter component
  function Pauser() {
    props.setIsRunning(false);
  }
  function Player() {
    props.setIsRunning(true);
  }

  function handleBTCSubmit(event) {
    event.preventDefault();
    Pauser();
    let formAmount = event.target[0].value;
    let earlierUSD = props.usdbalance;
    let earlierBTC = props.btcbalance;
    if (props.btcbalance >= formAmount) {
      props.setUsdbalance(earlierUSD + props.btcUsdRatio * formAmount);
      props.setBtcbalance(earlierBTC - formAmount);
    }
    event.target[0].value = "";
    setTimeout(Player, 300);
  }

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

  return (
    <div className="stockmarket">
      <h1>Stock Market</h1>
      <h3>Rate: {props.btcUsdRatio} USD/BTC</h3>

      <div className="buysell">
        <form onSubmit={handleBTCSubmit}>
          BTC: <input type="number" name="btcamount"></input>
          <button type="submit">SELL BTC</button>
        </form>
      </div>
      <br></br>

      <div className="buysell">
        <form onSubmit={handleUSDSubmit}>
          USD: <input type="number" name="usdamount"></input>
          <button type="submit">SELL USD</button>
        </form>
      </div>
      <br></br>
      <br></br>
      <p>USD Balance: {props.usdbalance} USD</p>
      <p>BTC Balance: {props.btcbalance} BTC</p>
    </div>
  );
}
