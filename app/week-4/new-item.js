"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg">
        {/* Quantity Display */}
        <span className="text-3xl font-bold">{quantity}</span>

        {/* Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            -
          </button>
          <button
            onClick={increment}
            disabled={quantity === 20}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
