"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ itemName }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!itemName) return;

    // Meal ideas for different items
    const mealSuggestions = {
      bananas: ["Banana Pancakes", "Banana Smoothie", "Banana Bread"],
      bread: ["Grilled Cheese Sandwich", "French Toast", "Garlic Bread"],
      broccoli: [
        "Beef Sunday Roast",
        "Broccoli & Stilton Soup",
        "Chicken Alfredo Primavera",
        "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
      ],
      "chicken breasts, 1 kg": [
        "Grilled Chicken Salad",
        "Chicken Parmesan",
        "Butter Chicken",
        "BBQ Chicken Wraps",
      ],
    };

    setMeals(
      mealSuggestions[itemName.toLowerCase()] || ["No meal ideas found"]
    );
  }, [itemName]);

  return (
    <div className="mt-6 p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">Meal Ideas</h2>
      <p className="mb-2">
        Here are some meal ideas using{" "}
        <span className="font-bold">{itemName}</span>:
      </p>
      <ul className="list-none">
        {meals.map((meal, index) => (
          <li
            key={index}
            className="p-2 border border-gray-600 rounded-md mb-2 bg-gray-700"
          >
            {meal}
          </li>
        ))}
      </ul>
    </div>
  );
}
