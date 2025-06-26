import React from "react";

export default function ClientPage() {
  const works = [
    {
      title: "Обложка YouTube-канала",
      image: "https://via.placeholder.com/300x180.png?text=Preview+1",
      description: "Современный дизайн для канала о путешествиях",
    },
    {
      title: "Оформление Telegram",
      image: "https://via.placeholder.com/300x180.png?text=Preview+2",
      description: "Минималистичный стиль с акцентом на читаемость",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">🧑 Страница клиента</h1>
      <p className="mb-8">Выберите понравившийся дизайн и свяжитесь с автором.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
          >
            <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{work.title}</h2>
              <p className="text-gray-300">{work.description}</p>
              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded">
                Связаться
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
