import React from "react";
import gamelogo from "../assets/gamelogo.png";
import movieposter from "../assets/movieposter.jpeg";

export default function StartScreen() {
  return (
    <div className="flexcont">
      <img src={gamelogo} />
      <a className="button" href="/game">
        start the game
      </a>
      <img src={movieposter} />
    </div>
  );
}
