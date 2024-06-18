import React, { useState } from "react";
import ListItems from "./ToDoItems";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function removeItems(index){
    console.log("removeItems")
    setItems(prevItems => {
      prevItems.pop(index)
      console.log(prevItems)
      return prevItems
      
    }
      
      
    )
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ListItems key={index} id={index} todoItem={todoItem} onChecked = {removeItems}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
