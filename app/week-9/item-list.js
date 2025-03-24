"use client";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function ItemList({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="mt-4 p-4 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Shopping List</h2>
      <ul className="list-none">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-3 border border-gray-700 rounded-md mb-2 cursor-pointer hover:bg-gray-800"
            onClick={() => setSelectedItem(item.name)}
          >
            <span className="font-bold text-lg">{item.name}</span> -{" "}
            {item.quantity} ({item.category})
          </li>
        ))}
      </ul>

      {selectedItem && <MealIdeas itemName={selectedItem} />}
    </div>
  );
}
