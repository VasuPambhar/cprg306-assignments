import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="dark:text-gray-200 text-gray-100 text-5xl font-bold text-center m-7 p-10 dark:bg-gray-600 bg-gray-600 rounded-2xl">Shopping List</h1>
      <ItemList/>
    </main>
  );
}