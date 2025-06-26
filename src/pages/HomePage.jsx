// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-6">Добро пожаловать в FlexDesign</h1>
      <p className="mb-4">Выберите, как вы хотите использовать платформу:</p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/client")}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Я заказчик
        </button>
        <button
          onClick={() => navigate("/designer")}
          className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Я дизайнер
        </button>
      </div>
    </div>
  );
}

export default HomePage;
