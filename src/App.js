// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClientPage from "./pages/ClientPage";
import DesignerPage from "./pages/DesignerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/client" element={<ClientPage />} />
        <Route path="/designer" element={<DesignerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
