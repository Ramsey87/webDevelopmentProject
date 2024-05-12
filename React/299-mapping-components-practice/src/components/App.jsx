import React from "react";
import Term from "./term";
import emojipedia from "../emojipedia";


function createTermCard (emojiData){ //make sure it has return JSX format
  return (
    <Term
    key = {emojiData.id}
    emoji = {emojiData.emoji}
    name = {emojiData.name}
    meaning = {emojiData.meaning}
    />
  ) 
}





function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedia.map(createTermCard)} //pass the callback method
      </dl>
    </div>
  );
}

export default App;
