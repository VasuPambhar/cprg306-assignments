"use client";
import { useEffect } from "react";
import { useState } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`);
    if (!response.ok) {
      throw new Error(`HTTP ERROR: Status ${response.status}`);
    }
  
    const data = await response.json();
    console.log(data);
    return data.meals || [];
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
export default function MealIdeas({ingredient}){
  const [meals,setMeals] = useState([]);
  const [error, setError] = useState(null);

  
  async function loadMealIdeas() {
    try {
      setError(null);
      if (!ingredient) {
        setMeals([]);
        return;
      }
      const data = await fetchMealIdeas(ingredient);
      setMeals(data);
    } catch (error) {
      setError(error.message);
      setMeals([]);
    }

  }

  useEffect(() => {
    loadMealIdeas();
  },[ingredient])

  if (error) {
    return(
      <div className="bg-red-500 text-white text-2xl h-fit rounded-2xl p-4">
        <h2>Error Loading Meal Ideas</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!ingredient) {
  return (
    <div className="bg-gray-700 text-white rounded-xl p-6 w-96 shadow-lg h-fit">
      <h1 className="text-2xl text-center">Meal Ideas:</h1>
      <p className="text-gray-300 text-center mt-3">
        Select an item to see meal ideas
      </p>
    </div>
  );
}

  return(
    <div className="bg-gray-700 text-white rounded-xl p-6 w-96 shadow-lg h-fit">
      <header className="text-2xl font-semibold mb-4 text-center">
        <h1>Meal Ideas:</h1>
      </header>

      <section className="flex flex-col gap-3">

      {
        meals.map((meal) => (
          <p
            className="border border-gray-600 rounded-lg p-3 hover:bg-gray-700 transition"
            key={meal.idMeal}
            >
            {meal.strMeal}
          </p>
        ))
      }

      </section>

    </div>
  );
}