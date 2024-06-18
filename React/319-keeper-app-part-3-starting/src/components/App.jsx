import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

const [noteList, setNoteList] = useState([]);

function addNote (newNote){
  setNoteList((preValues) => {
    return [...preValues, newNote];
  })
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteList.map((noteItem, index) => {
       return <Note key={index} title={noteItem.title} content={noteItem.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
