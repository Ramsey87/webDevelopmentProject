import React, { useState } from "react";

function App() {

//1. When new text is written into the input, its state should be saved.

  const [listItem, setListItem] = useState("");
  const [items, setItems]= useState([]);


  function handleChange (event){
    const {value} = event.target;
    setListItem(value);
    console.log("listItem: " + listItem)
  }

  function handleClick (){
    setItems((previousValue) => {
      return [...previousValue , listItem ];
    });
    setListItem("");
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">

        <input type="text" value={listItem} placeholder="Type here"  onChange={handleChange} name="listitems" />

        <button onClick={handleClick}>
          <span>Add</span>
        </button>

      </div>
      <div>
        <ul>
          {items.map((item, index) => (<li key={index}>{item}</li>)
          )}

        </ul>
      </div>
    </div>
  );
}

export default App;
