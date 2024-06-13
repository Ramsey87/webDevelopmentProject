import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  const [submitBtn, setSubmitBtn] = useState("Submit")

  function handleFullName(event) {
    const { value, name } = event.target;

    setFullName(previousValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value,
        };
      }
    });
  }

  function handleSubmitBtn(event) {
    setSubmitBtn("Submitted");
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input
          value={fullName.fName}
          onChange={handleFullName}
          name="fName"
          placeholder="First Name"
        />
        <input value={fullName.lName} onChange={handleFullName} name="lName" placeholder="Last Name" />
        <button onClick={handleSubmitBtn}>{submitBtn}</button>
      </form>
    </div>
  );
}

export default App;
