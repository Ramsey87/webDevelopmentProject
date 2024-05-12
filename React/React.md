
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













--------

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
