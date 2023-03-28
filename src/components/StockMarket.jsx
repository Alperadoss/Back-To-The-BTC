import React from "react";

export default function StockMarket() {
  return (
    <div className="stockmarket">
      <h1>Stock Market</h1>
      <h3>Rate: 1230 USD/BTC</h3>
      <div className="buysell">
        <form>
          <label>
            BTC: <input type="number" name="btcAmount" />
          </label>
          <input type="submit" value="SELL BTC" />
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
      <p>USD Balance: 4700 USD</p>
      <p>BTC Balance: 8 BTC</p>
    </div>
  );
}
