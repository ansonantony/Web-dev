import {  useState } from "react";

interface Props{
  items: string[]
  heading: string
  OnSelectItem: (item: string) =>(void)
}

function ListGroup({items,heading,OnSelectItem}: Props) {
  

  const [selectedIndex,setsSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length===0 && <p>No items</p> }
        {items.map((item,index) =>(
            <li className={selectedIndex===index ?"list-group-item active":"list-group-item"} key={item} 
            onClick = {() =>{
            setsSelectedIndex(index);
            OnSelectItem(item);
            }}>{item}</li>
        ))}
      </ul>
    </> //Using this to when more than one html element is present in the code.
  );
}

export default ListGroup;









// const handleClick = (event: MouseEvent)=> console.log(event);