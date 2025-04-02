"use client";

import { useState, useEffect } from "react";
import Item from "./item";

export default function ItemList({ items = [], onItemSelect }) {
  // Provide a default value for items
  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    const sortItems = (items) => {
      if (!Array.isArray(items)) return; // Ensure items is an array
      let sorted = [...items];
      if (sortBy === "name") {
        sorted.sort((item1, item2) => item1.name.localeCompare(item2.name));
      } else if (sortBy === "category") {
        sorted.sort((item1, item2) =>
          item1.category.localeCompare(item2.category)
        );
      }
      setSortedItems(sorted);
    };

    sortItems(items);
  }, [items, sortBy]);

  const sortByName = () => setSortBy("name");
  const sortByCategory = () => setSortBy("category");

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={sortByName}
          className={`py-2 px-4 rounded-l-lg ${
            sortBy === "name" ? "bg-blue-500" : "bg-gray-500"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={sortByCategory}
          className={`py-2 px-4 rounded-r-lg ${
            sortBy === "category" ? "bg-blue-500" : "bg-gray-500"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="bg-black shadow-lg p-4 rounded-lg w-1/2 text-white">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>
    </div>
  );
}
