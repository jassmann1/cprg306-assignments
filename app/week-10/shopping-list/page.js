"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context"; // Corrected import path
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-services"; // Corrected import path

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user) {
      const loadItems = async () => {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      };
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (item) => {
    if (user) {
      const newItemId = await addItem(user.uid, item);
      setItems([...items, { ...item, id: newItemId }]);
    }
  };

  const handleItemSelect = (item) => {
    const cleanItemName = item.name
      .split(",")[0]
      .replace(/[^a-zA-Z ]/g, "")
      .trim();
    setSelectedItemName(cleanItemName);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10 flex">
      <div className="w-1/2">
        <h1 className="text-8xl text-stone-950 font-bold mb-4 ">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}
