import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Helloooo");
  const [btnColor, setbtnColor] = useState(false);
  const [name, setname] = useState ("");

  function headingClick (){
    setHeadingText("Submitted")
  }

 function handleMouseout () {
  setbtnColor(false)

 }
 function handleMouseOver () {
  setbtnColor(true)
 }

 function handleChange(event){
  setname(event.target.value);
 }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input 
        onChange={handleChange}
        type="text" 
        placeholder="What's your name?" />
      <button 
        onClick={() => {
          headingClick();
          handleChange();
        }}
        onMouseOut={handleMouseout}
        onMouseOver={handleMouseOver}
        style={{backgroundColor: btnColor ? "black" : "yellow"}}
      >Submit {name}</button>
    </div>
  );
}

export default App;
