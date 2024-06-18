
### what is react?
- React is a popular JavaScript library for building user interfaces, particularly for web applications. It was developed by Facebook and later open-sourced. React allows developers to create reusable UI components and manage their state efficiently.
- React is often used in conjunction with other tools and libraries, such as **Redux** for state management, ***React Router*** for routing within single-page applications, and ***React Native*** for building mobile applications.

#### Local Set up
- ``npm create vite@latest my-react-app --template react``
- ``npm install``
- ``npm run dev``

#### JSX and Babel
- JSX (JavaScript XML) is a syntax extension for JavaScript often used with React. It allows you to ***write HTML-like code*** within JavaScript, making it easier to describe the structure of UI components.
  - we are also able to insert javascript into html called temlate literals
- Babel is a JavaScript compiler that converts modern JavaScript code (including JSX) into backward-compatible versions of JavaScript that can run in older browsers. It allows developers to use the latest features of JavaScript without worrying about compatibility issues.

#### index.jsx
```
import react from "react";
import reactDOM from "react-dom"

reactDOM.render(
    <div>
        <p>Created by {userName}</p>
        <p>Copyright {curentYear}</p>
    </div>
    , document.getElementById("root")
)
```
- render method will take only one element. in case of multiple element, we need to embed html element into a single dev. 
- inseting html attributes should be in camel case. for instance 
  - contenteditable into contentEditable
  - class into className
- In React applications, when you see the line ``import React from "react";``, it's usually included at the top of a JavaScript file where JSX syntax is used. This import statement brings in the functionality of React library into your current file.
- ***Template literals*** in JSX are features of javaScript
  - inserting JS expression in react use {}. you cannt have JS statements. expression: will be evaluated to a value and ends up with a value
    ```
    const name = "John";
    const greeting = `Hello, ${name}!`;

    const element = <div>{greeting}</div>;
    ```

#### Adding attributes to JSX elements
- JSX elements can have attributes, just like HTML elements.
- Some attributes are different than their HTML counterparts. For example, the class attribute in HTML translates to className in JSX. This is because class is a reserved word in JavaScript, and JSX is a JavaScript extension. If you wanted to add a primary class to your button, you'd write it like this:
    ```
    <button type="button" className="primary">
        Click me!
    </button>
    ```

#### html boilerplate
```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>React App</title>
      <link rel="stylesheet" href="/styles.css" />
    </head>
    
    <body>
      <div id="root"></div>
      <script type="module" src="/src/index.jsx"></script>
  </body>
</html>
```
#### Utilizing Inline Styling in JSX
When it comes to incorporating inline styling in JSX files, a common approach involves employing JavaScript objects to define styles, which are then applied directly to JSX elements. Here are some key considerations:

- **Applying Styles**: Inline styling entails defining styles using JavaScript objects and subsequently applying them via the style attribute directly within JSX elements.

- **Property Syntax**: Unlike standard HTML, where styles are typically specified using strings, JSX requires the use of objects for styling. The keys within these objects adhere to ***camelCased*** CSS property names.

- **Best Practices**: While inline styles offer simplicity for basic or isolated styling needs, it's advisable to exercise caution when using them for complex styling logic. Overuse of inline styles can clutter JSX code and hinder readability and maintainability. For more intricate styling requirements, leveraging CSS-in-JS libraries like styled-components or CSS modules can provide a more organized and scalable approach.
```
import React from 'react';

const MyComponent = () => {
  // Define inline styles
  const styles = {
    container: {
      backgroundColor: 'lightblue',
      padding: '20px',
    },
    text: {
      color: 'red',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>Inline styling example</p>
    </div>
  );
};

export default MyComponent;
```
#### React Components
In React, components are the building blocks of user interfaces. They are reusable, self-contained pieces of code that encapsulate a part of the UI's functionality. Components can be as simple as a button or as complex as an entire page.
**Building a React Component: Step-by-Step Guide**
1. **Export the component** 
   - Utilize the ***export default*** syntax, a standard JavaScript convention, to designate the primary function within a file for easy importation into other modules.
2. **Define the function** 
   - With ***function Profile() { }*** you define a JavaScript function with the name Profile.
   - React components are regular JavaScript functions, but ***their names must start with a capital letter or they won’t work!***
3. **Add markup**
   - Without parentheses, any code on the lines after return will be ignored!
  ```
  import React from 'react';

// Step 1: Export the component
const Profile = () => {
  // Step 3: Add markup
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </div>
  );
};

export default Profile;

  ```

  #### Importing and Exporting Components
1. **Default Export**
  The default export allows you to export a single value (function, class, object) from a module. When importing a default export, you can ***choose any name*** for it.
    ```
    // Exporting a function as default
    export default function myFunction() {
      // function body
      }
    ```
    when importing
    ``import myFunction from './module';``


2. **Named Export**
   Named exports allow you to export multiple values (functions, variables, objects) from a module. Each named export must be imported with the exact name it was exported with.
   `` export { value1, value2, ... };``
   or 
   ```
      // Exporting multiple functions
    export function function1() {
      // function1 body
    }

    export function function2() {
      // function2 body
    }
    ```
   when importing
  `` import { function1, function2 } from './module' ``


#### React props
* Props are read-only data that is passed from a parent component to a child component.
* **How to Use Props?**
  * ***1- Passing Props to Child Components:*** Props are passed to child components as attributes in the JSX syntax
    ```
      function ParentComponent() {
        return <ChildComponent name="John" age={30} />;
      }
    ```
  * The child component can access the props using the props object
    ```
    function ChildComponent(props) {
      return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
      );
    }
    ```
* Default props

---
### Explore Map(), Filter(), Reduce(), Find() & FindIndex()

#### map() 
* creates a new array by doing something with each item in an array
* it is very common specially when you want to render lists of elements 
* **key prop**: In React, each child in a list should have a unique "key" prop. This helps React identify which items have changed, are added, or are removed. It's recommended to use a unique identifier rather than the index if available.
* **key** is special keywork and if you want to print it, you need to use anther keyworkd

  ```
  import React from 'react';

  function Item({ name }) {
    return <li>{name}</li>;
  }

  function ItemList() {
    const items = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' },
      { id: 4, name: 'Date' },
      { id: 5, name: 'Elderberry' },
    ];

    return (
      <ul>
        {items.map(item => (
          <Item key={item.id} name={item.name} />
        ))}
      </ul>
    );
  }

  export default ItemList;
  ```

#### Filter
* ***Creates*** a new array by by keeping the items that returns true
  ```
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4, 6]
  ```

#### Reduce
* is used to reduce an array to a single value by executing a provided function for each value of the array (from left to right). The result of each function call is passed to the next function call.

  ```
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, cur) => acc + cur);
  console.log(sum); // Output: 15
  ```
#### Find
* find the ***first item*** that matches from an array
  * using arrow function
    ```
    const numbers = [1, 2, 3, 4, 5];
    const found = numbers.find(element => element > 3);
    console.log(found); // Output: 4
    ```
  * finding an object in an array
    ```
      const inventory = [
          { name: 'apples', quantity: 2 },
          { name: 'bananas', quantity: 0 },
          { name: 'cherries', quantity: 5 }
      ];

      const result = inventory.find(item => item.name === 'cherries');
      console.log(result);
      // Output: { name: 'cherries', quantity: 5 }
      ```
#### FindIndex
* find the ***index*** of the ***first*** item that matches
  ```
  const numbers = [1, 2, 3, 4, 5];
  const index = numbers.findIndex(element => element > 3);
  console.log(index); // Output: 3
  ```
----
### Ternary Operator for conditional rendering
* everything that goes inside {} must be expressions while if-condition is statement.
* The syntax of the ternary operator is:
`` condition ? expressionIfTrue : expressionIfFalse``
* **Basic Conditional Rending**
  ```
  import React from 'react';

  function Greeting(props) {
      return (
          <div>
              {props.isLoggedIn ? (
                  <h1>Welcome back!</h1>
              ) : (
                  <h1>Please sign up.</h1>
              )}
          </div>
      );
  }

  export default Greeting;
  ```
  * **Conditional Rendering with Multiple Conditions**
  ```
  import React from 'react';

  function UserStatus(props) {
      return (
          <div>
              {props.isLoading ? (
                  <p>Loading...</p>
              ) : props.isLoggedIn ? (
                  <p>Welcome back, {props.username}!</p>
              ) : (
                  <p>Please log in.</p>
              )}
          </div>
      );
  }

  export default UserStatus;

  ```
  Here, UserStatus component first checks if isLoading is true. If it is, it renders "Loading...". If isLoading is false, it then checks isLoggedIn and renders the appropriate message.
* ***Using && in React***: The logical AND operator (&&) can be used to conditionally render elements. It works by evaluating the left-hand side expression first; if it evaluates to true, the right-hand side expression is returned and rendered. If it evaluates to false, the right-hand side expression is ignored.
  ```
  import React from 'react';

  function Greeting(props) {
      return (
          <div>
              {props.isLoggedIn && <h1>Welcome back!</h1>}
          </div>
      );
  }

  export default Greeting;
  ```
___









- use hoook
  - usestate() sets initial state
  - `` const [time, setTime] = useState()`` set the time as zero and give you back time. settime is a method can be called. 
















- style propoery requires a object in jsx
- it is useful in certain cases when components change on the fly,. for exampel style changes when ou have new timing.
- in font-size will be in fontSize in an object. 


- learn more about Date(). you can also enter date inside it and mimic data. 


- airbnb best practices.

-import and expo [https://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export]
- waht is functional programming? mapping inside maping.
- what is fat arrow?
-  there is a good formula. learn it. make in annoumymous   >> remove function and add fat arrow  >>> look at return,if not multiple line. if theree is only one param or more than one?

- read artickes in resources. 

## react with Mosh

* vanilla JS: 
* Tsx: 
* learn typescript. learn this in future. 
* ctlrl + N + P> moves to a new files
* ctrl + D to select different items
* when using the map, we need to have a key as a prop, that is what is demanding from react. and should be unique.
* write different ternary operation
  ```
  {countries.length === 0 ? <p>No item found</p> : null}
  {countries.length === 0 && <p>No item found</p>}
  ```

  *Event handling. Done
  * managing stgatges

* props (passdin data)>> created an interface, updated module based on interface, passed data at App level
*  props for functions. 
*  using childern prop we can send pass childer and use ReactNode to pass HTML inside the component
*  use react dev tool extension 
*  ? shows it is optional

```
interface buttonProp {
    children: string
    color?:string
    onClick: () => void
}
```

defullt value

```
const Button = ({children,onClick,color="primary"}:buttonProp) => {
  return (
    <button type="button" className={'btn btn-'+ color} onClick={onClick}>{children}</button>
  )
}
```

* onchange is used for fileds
*  event.target.value    / event.target.placeholder   
*  read about controlled component on page 311.
*  defautl behaviour of form is to refresh and use event.preventDefault()