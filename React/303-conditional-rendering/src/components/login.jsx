import React from "react";


function Login (prop){
    return(
        <form className="form">
            <Input 
            type="text"
            placeholder= "username"/>

            <Input 
            type="password"
            placeholder= "password"/>

            <button type="submit">Login</button>
      </form>
    )
}

function Input (props){
    return (
    <>
        <input type={props.type} placeholder={props.placeholder} />
    </>)
}







export default Login;



