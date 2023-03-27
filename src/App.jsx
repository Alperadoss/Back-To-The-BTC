import React from "react";
//import { useState } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameStats from "./components/GameStats";
import "./App.css";

function App() {
  let gameData = {
    totalBTC: null,
    totalUSD: null,
    MinedBTCperMonth: null,
    currentDate: null,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" index element={<StartScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/stats" element={<GameStats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
