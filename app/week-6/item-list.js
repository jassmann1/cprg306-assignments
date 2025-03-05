"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return (
        a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
      );
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex gap-2 my-4">
        <button
          className={`p-2 ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      {sortBy === "category" ? (
        Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <h2 className="font-bold capitalize mt-4">{category}</h2>
            <ul>
              {items.map((item) => (
                <Item key={item.id} {...item} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
