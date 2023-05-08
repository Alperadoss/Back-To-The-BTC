import React from "react";
import gamelogo from "../assets/gamelogo.png";
import delorean from "../assets/delorean.gif";

export default function StartScreen() {
  return (
    <div className="flexcont">
      <img id="gamelogo" src={gamelogo} />
      <img id="deloreanlogo" src={delorean} />
      <a className="button" href="/intro">
        <div id="text">
          <h1>
            <span id="offset">START THE GAME</span>
          </h1>
        </div>
      </a>
    </div>
  );
}
