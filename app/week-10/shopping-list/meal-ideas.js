"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState({});
  const [selectedMealId, setSelectedMealId] = useState(null);

  useEffect(() => {
    const fetchMealIdeas = async (ingredient) => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    };

    fetchMealIdeas(ingredient);
  }, [ingredient]);

  useEffect(() => {
    const fetchMealDetails = async (mealId) => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      return data.meals[0];
    };

    const loadMealDetails = async () => {
      const details = {};
      for (const meal of meals) {
        const mealDetail = await fetchMealDetails(meal.idMeal);
        details[meal.idMeal] = mealDetail;
      }
      setMealDetails(details);
    };

    if (meals.length > 0) {
      loadMealDetails();
    }
  }, [meals]);

  const getIngredients = (mealDetail) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealDetail[`strIngredient${i}`];
      const measure = mealDetail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  const handleMealClick = (mealId) => {
    setSelectedMealId(mealId === selectedMealId ? null : mealId);
  };

  return (
    <div className="p-4 border rounded-lg max-w-sm mx-auto text-center">
      <h2 className="text-lg font-semibold mb-2">
        Meal Ideas with {ingredient}
      </h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-2">
            <p
              className="text-md font-bold cursor-pointer"
              onClick={() => handleMealClick(meal.idMeal)}
            >
              {meal.strMeal}
            </p>
            {selectedMealId === meal.idMeal && mealDetails[meal.idMeal] && (
              <ul>
                {getIngredients(mealDetails[meal.idMeal]).map(
                  (ingredient, index) => (
                    <li key={index} className="text-sm">
                      {ingredient}
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
