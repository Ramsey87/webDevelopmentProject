import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
const [alertVisilbe , setAlertVisibility] = useState(false)

  return (
    <>
    <div>
      {alertVisilbe && <Alert onClose={setAlertVisibility(false)}>Hi there</Alert>}
    </div>
    <div> <Button onClick={() => {setAlertVisibility(true)}}>primary buton</Button></div>
    </>
  );
}

export default App;
