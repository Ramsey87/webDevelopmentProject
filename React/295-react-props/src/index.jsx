import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card"

ReactDOM.render(
  <

  >
   

    <Card
      name = "Ramsey"
      imgSource = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt = "Ramsey palying"
      tel = "+123 456 789"
      email = "b@beyonce.com"
    />

<Card
      name = "Ahmed"
      imgSource = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt = "Ahmed palying"
      tel = "+123 456 789"
      email = "b@beyonce.com"
    />



  </>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
