import React, {useState} from "react";

function App() {
  const [initialCount, nextCount] = useState(0)

  function increase () {
    return nextCount(recentCount => recentCount + 1)
  }

  function decrease () {
    return nextCount(recentCount => recentCount - 1)
  }

  return (
    <div className="container">
    <h1>{initialCount}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>
  );
}

export default App;


