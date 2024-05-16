import React, { useState } from "react";

function App() {
  const [fname,setFirstname] = useState()
  const [lastName,setLastName] = useState()

  function handleFirstName (event){
    setFirstname(event.target.value)
  }

  function handleLastName (event){
    setLastName(event.target.value)
  }

  return (
    <div className="container">
      <h1>Hello {fname} {lastName}</h1>
      <form>
        <input onChange={handleFirstName} name="fName" placeholder="First Name" />
        <input onChange={handleLastName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
