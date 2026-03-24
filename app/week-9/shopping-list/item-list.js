"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ item, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const sorted = [...item].sort((a,b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
  const style = "bg-blue-900 text-white hover:bg-blue-500 rounded px-7 py-1 m-auto block my-7 py-3 cursor-pointer";
  return(
   <div>
    <button className={`${style} ${sortBy === "name" ? "bg-gray-500 border-3 border-white" : "bg-blue-900"}`} onClick={() => setSortBy("name")}>Sort By Name</button>
    <button className={`${style} ${sortBy === "category" ? "bg-gray-500 border-3 border-white" : "bg-blue-900"}`} onClick={() => setSortBy("category")}>Sort By Category</button>
    <ul>
      {
        sorted.map((item) =>{
          return(
            <Item onSelect={() => onItemSelect(item)} key={item.id} {...item}/>
          )
        })
      }
    </ul>
   </div>
  );
}