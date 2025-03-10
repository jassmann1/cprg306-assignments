"use client";
import { useState } from "react";

export default function NewItem({ setItems }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Other");

  const handleAddItem = () => {
    if (!name.trim()) return;

    const newItem = {
      id: Date.now(),
      name,
      quantity: parseInt(quantity),
      category,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setName("");
    setQuantity(1);
    setCategory("Other");
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="border p-2 mr-2"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 mr-2"
      >
        <option value="Fruit">Fruit</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Other">Other</option>
      </select>
      <button onClick={handleAddItem} className="bg-blue-500 text-white p-2">
        Add Item
      </button>
    </div>
  );
}
