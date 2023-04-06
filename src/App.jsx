import React from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import Intro from "./components/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" index element={<StartScreen />} />
        <Route path="intro" element={<Intro />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
