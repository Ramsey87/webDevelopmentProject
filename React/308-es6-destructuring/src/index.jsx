// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice"

const leastpopular = cars[0].coloursByPopularity[cars[0].coloursByPopularity.length-1];
console.log(`least poplular car is ${leastpopular}`)



const [test , tesla] = cars;
// const {coloursByPopularity:[color1, color2, color3,color4,color5],speedStats:{topSpeed:hondaTopSpeed}} = test;
const {coloursByPopularity:[ , ,hondaTopColour],speedStats:{topSpeed:hondaTopSpeed}} = test;
const {coloursByPopularity:[teslaTopColour],speedStats:{topSpeed:teslaTopSpeed}} = tesla;
// console.log(color5)


 



ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{test.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
