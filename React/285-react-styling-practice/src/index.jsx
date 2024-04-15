//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

const timingColor = {
    color:"red",
    fontSize: "20px",
    border: "1px solid black"
}

import react from "react";
import reactDOM from "react-dom"

const currentDate = new Date();
const currentHrs = currentDate.getHours();
console.log(currentHrs)

if (currentHrs<=12) {
    reactDOM.render(
        <h1 style={timingColor} > Good Morning</h1>
        , document.getElementById("root")
    ) 
} else if (currentHrs<=18) {
    timingColor.color = "green" 
    reactDOM.render(
        <h1 style={timingColor} >Good Afternoon</h1>
        , document.getElementById("root")
    ) 
} else {
    timingColor.color = "blue" 
    reactDOM.render(
        <h1 style={timingColor}>Good Evening</h1>
        , document.getElementById("root")
    ) 
}




