"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json" assert { type: "json" };

export default function Page() {
  const [items, setItems] = useState(itemsData);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItem setItems={setItems} />
      <ItemList items={items} />
    </div>
  );
}
