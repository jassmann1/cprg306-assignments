"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddItem({ name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-3">
        <label className="block font-semibold">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block font-semibold">Quantity:</label>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            −
          </button>
          <span className="px-4 py-1 border">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            +
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label className="block font-semibold">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option>Produce</option>
          <option>Dairy</option>
          <option>Bakery</option>
          <option>Frozen Foods</option>
          <option>Meat</option>
          <option>Pantry</option>
          <option>Beverages</option>
          <option>Snacks</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
}
