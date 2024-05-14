import React, {useState} from "react";

function App() {
  const initialTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(initialTime)
// 
  function getTime(){
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime)  
  } 

  setInterval(() => {
    getTime()
  }, 5000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick = {getTime}>Get Time</button>
    </div>
  );
}

export default App;
