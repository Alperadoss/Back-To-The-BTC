import React from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import GameStats from "./components/GameStats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
