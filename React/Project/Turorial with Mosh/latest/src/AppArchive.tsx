
import ListGroup from "./components/ListGroup";

function App(){

  const countries = [
    "New York",
    "Boston",
    "country03",
    "country04",
    "country05",
  ];

  return <div><ListGroup items={countries} heading="cities" onSelection={(item:string) => {console.log(item)}}  /></div>
}



export default App;



interface greetingProp{
  text:string
}

function Greeting ({text}:prop)


