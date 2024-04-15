import React from "react";
import ReactDOM from "react-dom";
import Header from "./Component/Heading";
import List from "./Component/List"

ReactDOM.render(
  <div>
    <Header />
    <List />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
