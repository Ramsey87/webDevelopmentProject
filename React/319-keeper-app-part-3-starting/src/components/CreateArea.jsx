import React, { useState } from "react";



function CreateArea(props) {
  
  const [note, setNote] = useState({
    title:"",
    content:""
  }) 
  const [noteList, setNoteList] = useState([])

  function handleChange (event) {
    const {name, value} = event.target;
    setNote(currentValue =>({
      ...currentValue,
      [name]:value
    }))
  }

  function addNote(event){
    event.preventDefault()
    props.onAdd(note)
    setNote({
      title:"",
      content:""
    });
  }

  return (
    <div>
      <form>
        <input onChange={handleChange}  value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange}  value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
