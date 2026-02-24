"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id : crypto.randomUUID(),
      name : name,
      quantity : quantity,
      category : category
    };
    console.log(item);
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return(
    <form className="max-w-md mx-auto bg-white px-7 py-10 rounded-2xl" onSubmit={handleSubmit}>
      <label htmlFor="item-name" className="dark:text-gray-900">Name:</label>
      <input className="w-full p-2 rounded text-center border-2 border-gray-700 dark:text-gray-900" id="item-name" name="item-name" type="text" value={name} onChange={(event) => setName(event.target.value)} required />
      <div className="flex flex-col gap-4 my-4">
        <label htmlFor="quantity" className="dark:text-gray-900">Quantity:</label>
        <input className="text-center border-2 border-gray-700 rounded p-2 dark:text-gray-900" id="quantity" name="quantity" type="number" min={1} max={99} value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} />
        <label htmlFor="category" className="dark:text-gray-900">Category:</label>
        <select className="text-center border-2 border-gray-700 rounded p-2 dark:text-gray-900" id="category" name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
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