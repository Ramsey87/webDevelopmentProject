import { useState } from "react";
import Alert from "./Alert";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelection: (item:string)=> void  //on by convension
}

function ListGroup({items, heading, onSelection} : ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {/* {countries.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className= {selectedIndex === index ? "list-group-item active" : "list-group-item"}
            onClick={()=>{setSelectedIndex (index) 
                onSelection(item)
            }  
        } 
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
