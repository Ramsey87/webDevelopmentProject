
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











--------


- use hoook
  - usestate() sets initial state
  - `` const [time, setTime] = useState()`` set the time as zero and give you back time. settime is a method can be called. 














- read about map


- style propoery requires a object in jsx
- it is useful in certain cases when components change on the fly,. for exampel style changes when ou have new timing.
- in font-size will be in fontSize in an object. 


- learn more about Date(). you can also enter date inside it and mimic data. 


- airbnb best practices.

-import and expo [https://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export]
- read about map in Javascript
- waht is functional programming? mapping inside maping.
- how to write functions
  - normal function function nameofFunction() { }
  - anynoumous function function () {  }
  - arrow function  (x,y)=>{}
    - or x =>{}
  - if ther eis only one row x=> x*x   - this is more advance
- what is fat arrow?
-  there is a good formula. learn it. make in annoumymous   >> remove function and add fat arrow  >>> look at return,if not multiple line. if theree is only one param or more than one?
-  

- read artickes in resources. 
