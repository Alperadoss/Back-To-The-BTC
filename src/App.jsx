//import { useState } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import StockMarket from "./components/StockMarket";
//import Mining from "./components/Mining";
import GameStats from "./components/GameStats";
import "./App.css";

function App() {
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
