import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BalloonPopPage from "./components/BalloonPopPage";
import PresentPage from "./components/PresentPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/balloon-pop" element={<BalloonPopPage />} />
        <Route path="/present" element={<PresentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
