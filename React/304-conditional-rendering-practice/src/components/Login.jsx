import React from "react";
import CreateInput from "./Input"
import Button from "./Button";

function Login() {
  return (
    <form className="form">
      <CreateInput type="text"   placeholder= "Username" />
      <CreateInput type="password"   placeholder= "password" />
      <Button text="Login"/>
    </form>
  );
}



export default Login;
