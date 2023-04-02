import React from "react";

export default function Upgrades() {
  const upgradeItems = [
    {
      id: "01",
      name: "2nd hand PC",
      info: "$100 - A second hand computer (0.01x mining power)",
      price: 100,
      power: 0.01,
      owned: 1,
    },
    {
      id: "02",
      name: "Cool gaming PC",
      info: "$200 - PC with powerful graphic card (0.05x mining power)",
      price: 200,
      power: 0.05,
      owned: 0,
    },
    {
      id: "03",
      name: "Gaming PC with RGB LEDs",
      info: "$300 - RGB LEDs add extra GPU power (0.07x mining power)",
      price: 300,
      power: 0.07,
      owned: 0,
    },
    {
      id: "04",
      name: "Mining Rig S6 Pro",
      info: "$1000 - Mining Rig (1x mining power)",
      price: 1000,
      power: 1,
      owned: 0,
    },
    {
      id: "05",
      name: "S6 Pro Max",
      info: "$1200 - same with S6 Pro, marketed for fanboys (1x mining power)",
      price: 1200,
      power: 1,
      owned: 0,
    },
    {
      id: "06",
      name: "Crypto Trading Website",
      info: "$100.000 - manipulate the market, earn more! (5x mining power)",
      price: 100000,
      power: 5,
      owned: 0,
    },
    {
      id: "07",
      name: "MVidia",
      info: "$10M - Now all factory is producing GPUs just for you!  (100x mining power)",
      price: 10000000,
      power: 100,
      owned: 0,
    },
  ];
  let ownedItems = upgradeItems.filter((item) => item.owned == true);

  return (
    <div className="upgrades">
      <ul>
        {upgradeItems.slice(0, ownedItems.length + 1).map((item) => (
          <li key={item.id}>
            <div className="itemheader">{item.name}</div>
            <div className="iteminfo">{item.info}</div>
            <div>You have {item.owned}</div>
            <button>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
