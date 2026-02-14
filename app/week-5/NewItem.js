"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      name : name,
      quantity : quantity,
      category : category
    };
    console.log(item);
    alert(`Added: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return(
    <form className="max-w-md mx-auto bg-white px-7 py-10 rounded-2xl" onSubmit={handleSubmit}>
      <input className="w-full p-2 rounded text-center border-2 border-gray-700" type="text" value={name} placeholder="Item Name.." onChange={(event) => setName(event.target.value)} required />
      <div className="flex flex-col gap-4 my-4">
        <input className="text-center border-2 border-gray-700 rounded p-2" type="number" min={1} max={99} value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} />
        <select className="text-center border-2 border-gray-700 rounded p-2" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-900 text-white hover:bg-blue-500 rounded px-7 py-1 m-auto block">+</button>
    </form>
  );
}