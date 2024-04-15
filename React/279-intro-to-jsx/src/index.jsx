
import React from "react";
import ReactDOM from "react-dom";


//why it is not working?
// import { React } from "react";
// import { ReactDOM } from "react-dom";


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));// render what , where
//render() takes only one HTML method not two. but you can place them in a Div or Section

//what is JSX?
//JSX is a syntax extension for JavaScript and comes with the full power of JavaScript.
//TO RUN USE npm run dev
// what is babel?
//what is difference between import React from "react"; and import {React} from "react";

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
    </div>
, document.getElementById("root"));

//
