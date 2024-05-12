import React from "react";
import Register from "./Form";
import Login from "./Login"


var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered && <Login />}
      {!userIsRegistered && <Register />}
    </div>
  );
}

export default App;
