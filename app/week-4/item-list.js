import Item from "./item";
import data from "./items.json";
export default function ItemList() {
  return(
    <ul>
      {
        data.map((item) =>{
          return(
            <Item key={item.id} {...item}/>
          )
        })
      }
    </ul>
  );
}