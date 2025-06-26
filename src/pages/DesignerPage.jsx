import React from "react";

export default function DesignerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">🎨 Страница дизайнера</h1>
      <p className="mb-4">
        Здесь вы можете загрузить свои работы, создать портфолио и управлять
        своими проектами.
      </p>

      <div className="mt-8">
        <label className="block mb-2 font-semibold">Название работы:</label>
        <input
          type="text"
          placeholder="Например: Обложка YouTube"
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white mb-4"
        />

        <label className="block mb-2 font-semibold">Описание:</label>
        <textarea
          placeholder="Краткое описание проекта"
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white mb-4"
        ></textarea>

        <label className="block mb-2 font-semibold">Изображение превью:</label>
        <input
          type="file"
          className="mb-4 text-sm text-gray-400 file:bg-blue-600 file:text-white file:rounded file:px-4 file:py-1"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
          💾 Сохранить работу
        </button>
      </div>
    </div>
  );
}
