import React from "react";

export default function StockMarket({ usdbalance, setUsdbalance }) {
  function handleSubmit(event) {
    event.preventDefault();
    setUsdbalance(SELLBTC);
    console.log("i work");
  }

  return (
    <div className="stockmarket">
      <h1>Stock Market</h1>
      <h3>Rate: 1230 USD/BTC</h3>
      <div className="buysell">
        <form>
          <label>
            BTC: <input type="number" name="btcAmount" />
          </label>
          <input onClick={handleSubmit} type="submit" value="SELLBTC" />
        </form>
      </div>
      <br></br>
      <div className="buysell">
        <form>
          <label>
            USD: <input type="number" name="btcAmount" />
          </label>
          <input type="submit" value="BUY BTC" />
        </form>
      </div>
      <br></br>
      <br></br>
      <p>USD Balance: {usdbalance} USD</p>
      <p>BTC Balance: BTC</p>
    </div>
  );
}
