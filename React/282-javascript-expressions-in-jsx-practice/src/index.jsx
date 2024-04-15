//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import react from "react";
import reactDOM from "react-dom"
const userName = "Ramsey"
const currentDate = new Date();
const curentYear = currentDate.getFullYear()

reactDOM.render(
    <div>
        <p>Created by {userName}</p>
        <p>Copyright {curentYear}</p>
    </div>
    , document.getElementById("root")
)