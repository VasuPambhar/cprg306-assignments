"use client";
import ItemList from "./item-list";
import data from "./items.json";
import { useState } from "react";
import NewItem from "./NewItem";


export default function Page() {
  const [items, setItems] = useState(data);

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev,newItem]);
  };

  return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 font-bold">
        <header className="w-full p-10">
          <h1 className="text-white text-3xl font-bold text-center">Shopping List</h1>
        </header>
        <section>
          <NewItem onAddItem={handleAddItem}/>
          <ItemList item={items} />
        </section>
      </main>
  );
}
