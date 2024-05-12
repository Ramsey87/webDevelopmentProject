import React from "react";
import CreateInput from "./Input"
import Button from "./Button";

function Register() {
  return (
    <form className="form">
      <CreateInput type="text"   placeholder= "Username" />
      <CreateInput type="password"   placeholder= "password" />
      <CreateInput type="password"   placeholder= "Confirm Password" />
      <Button text="Register"/>
    </form>
  );
}

export default Register;
