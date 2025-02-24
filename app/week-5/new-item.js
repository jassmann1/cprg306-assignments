"use client";
import { useState } from "react";

export default function NewItem() {
  // State variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1); // Already handled in Week 4
  const [category, setCategory] = useState("produce");

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { name, quantity, category };

    console.log("New Item:", newItem);
    alert(
      `Added Item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-6 max-w-md mx-auto mt-6"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Item</h2>

      {/* Name Field */}
      <label className="block mb-2 font-medium">Item Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full border rounded p-2 mb-4"
      />

      {/* Quantity Field (from Week 4) */}
      <label className="block mb-2 font-medium">Quantity:</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        required
        className="w-full border rounded p-2 mb-4"
      />

      {/* Category Field */}
      <label className="block mb-2 font-medium">Category:</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border rounded p-2 mb-4"
      >
        {[
          "Produce",
          "Dairy",
          "Bakery",
          "Meat",
          "Frozen Foods",
          "Canned Goods",
          "Dry Goods",
          "Beverages",
          "Snacks",
          "Household",
          "Other",
        ].map((cat) => (
          <option key={cat} value={cat.toLowerCase()}>
            {cat}
          </option>
        ))}
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
}
