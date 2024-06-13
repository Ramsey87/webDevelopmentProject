import React, { useState } from "react";

function App() {

  const [name, setName] = useState("")

  function handleOnChange (event){
    setName(event.target.value)
  }

  function handleOnClick (){
    console.log("Name is " + name )
  }

  return (
    <div className="container">
      <h1>Hello </h1>
      <input type="text" onChange={handleOnChange} placeholder="UserName" />
      <input type="text" onChange={handleOnChange} placeholder="password" />
      <button onClick={handleOnClick} >Submit</button>
    </div>
  );
}

export default App;
