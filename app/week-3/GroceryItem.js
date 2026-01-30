export default function GroceryItem({name,quantity,category,divTextColor="dark:text-gray-100 text-gray-600 text-xl font-bold py-1"}) {
  return(
    <li className="flex flex-col border-2 mx-7 my-10 py-5 text-center rounded-3xl">
      <div className={`${divTextColor}`}>Name:{name}</div>
      <div className={`${divTextColor}`}>Quantity:{quantity}</div>
      <div className={`${divTextColor}`}>Category:{category}</div>
    </li>
  ); 
}