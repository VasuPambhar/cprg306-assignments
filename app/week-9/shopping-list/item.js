export default function Item({ name, quantity, category, onSelect, divTextColor=" text-gray-100 text-xl font-bold py-1" }) {
  return(
    <li className="flex flex-col border-2 border-gray-50 mx-7 my-10 py-5 text-center rounded-3xl cursor-pointer" onClick={() => onSelect()}>
      <div className={`${divTextColor}`}>Name:{name}</div>
      <div className={`${divTextColor}`}>Quantity:{quantity}</div>
      <div className={`${divTextColor}`}>Category:{category}</div>
    </li>
  );
}