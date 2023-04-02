import React from "react";

export default function StockMarket(props) {
  function handleBTCSubmit(event) {
    event.preventDefault();
    props.setUsdbalance(event.target[0].value);
    //let newUsd = props.usdbalance;
  }

  return (
    <div className="stockmarket">
      <h1>Stock Market</h1>
      <h3>Rate: 1230 USD/BTC</h3>

      <div className="buysell">
        <form onSubmit={handleBTCSubmit}>
          BTC: <input type="number" name="btcamount"></input>
          <button type="submit">SELL BTC</button>
        </form>
      </div>
      <br></br>

      <div className="buysell">
        <form onSubmit={handleBTCSubmit}>
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
