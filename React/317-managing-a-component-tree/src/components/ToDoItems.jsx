import React, {useState} from "react";



function ListItems (props){
    const [isDone, setIsDone] = useState(false)

    function onClickHandler(){
        setIsDone(!isDone)
    }
    
    return (
        
            <li
            onClick={() => {props.onChecked(props.id)}} 
            style = {{textDecoration: isDone ? "line-through" : "none"}}
            >{props.todoItem}</li>
      
        
    )
}

export default ListItems;