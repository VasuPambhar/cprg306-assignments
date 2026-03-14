"use client";
import ItemList from "./item-list";
import data from "./items.json";
import { useState } from "react";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";


export default function Page() {
  const [items, setItems] = useState(data);
  const [selectedItemName,setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev,newItem]);
  };

  const handleItemSelect = (item) =>{
    // setSelectedItemName(item.name);
    let cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");

    setSelectedItemName(cleanedName);

  }

  return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 font-bold">
        <header className="w-full p-10">
          <h1 className="text-white text-3xl font-bold text-center">Shopping List</h1>
        </header>
        <section className="flex gap-8">
          <div>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList item={items} onItemSelect={handleItemSelect}/>
          </div>
          <MealIdeas ingredient={selectedItemName} />
        </section>
      </main>
  );
}
