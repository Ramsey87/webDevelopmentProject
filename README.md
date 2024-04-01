


- [NodeJS](#nodejs)
- [ExpressJS](#express-js)
  
---

# NodeJs
+ it is a tool that lets developers use JavaScript to build powerful programs that run on computers, not just in web browsers. It's like a toolbox that helps programmers create fast and efficient websites and other types of software.
+ An ***asynchronous event-driven*** javaScrip ***runtime***, Node.js is designed to build scalable network applications
  + ***JS Runtime***: The V8 engine is an open-source JavaScript engine developed by Google that is used in Node.js. It compiles JavaScript code into machine code, making it fast and efficient. The V8 engine is at the core of Node.js's performance and allows it to execute JavaScript code on the server-side.
  + ***An asynchronous event-driven***:Node.js uses an event-driven architecture where operations are performed asynchronously. It uses an event loop to handle asynchronous operations by registering callbacks for events. When an event occurs, the corresponding callback is executed, allowing Node.js to handle multiple operations simultaneously without blocking.
+ Node commands
  + ***Ctrl + C*** Exit Command
  + ***npm install packagename*** installs a cpackage locally in your project
  + ***np install -g packagename*** installs a package globally on your system
  + ***node fileName*** run specific fileName
  + ***npm init*** Initializes a new Node.js project and creates a package.json file.
+ NPM stands for ***Node Package Manager*** It is the default package manager for Node.js, and it is used to install, manage, and share packages (libraries or modules) of JavaScript code written for Node.js. npm is also used for managing project dependencies, running scripts, and publishing packages
  + it is a community tool library. 
+ The ***package.json*** file in a Node.js project contains metadata about the project, including dependencies, scripts, and other configuration settings. It is used by npm to install dependencies, run scripts, and manage the project's lifecycle.
  + In Node.js, the ***"type": "module"*** declaration is used in package.json to indicate that a JavaScript file should be treated as an ECMAScript module (ESM) rather than a CommonJS module. This declaration allows you to use ES6 module syntax, such as import and export, within your Node.js application.
---
 
# Express JS 
+ Useful resources
  + [body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware.
  + [nodemon](https://www.npmjs.com/package/nodemon) automatically restarting the node application when file changes in the directory are detected
  ![EXPRESSJS](./READMEMD/ExpressJS.png)
+ Express.js is a powerful and flexible web application framework for Node.js, designed to simplify the process of building web applications and APIs
+ Core Concepts:
  1. ***Routing***: One of the fundamental features of Express.js is routing. Routing refers to defining how an application responds to client requests at specific endpoints (URLs). Express.js provides methods to define routes for different HTTP methods like GET, POST, PUT, DELETE, etc. Routes are defined using HTTP methods and URL patterns.
  2. ***Middleware***: Middleware functions are functions that have access to the request and response objects and can modify them, execute code, or end the request-response cycle. Middleware functions are essential for performing tasks like logging, parsing request bodies, handling authentication, and error handling. 
  3. ***Template*** Engines: Express.js supports various template engines such as EJS to generate dynamic HTML content on the server-side. Template engines enable developers to create HTML templates with dynamic content that can be rendered using data passed from the server.
  4. ***Error Handling***: Express.js provides built-in error handling mechanisms to catch and handle errors that occur during the request-response cycle.
+ There are four steps to create an Express.js application
     1. install Express.js `npm install express`
     2. Create an Application
        ```
        import express from "express";
        const app = express();
        ```
     3. Define Routes
        ```
          app.get('/', (req, res) => {
          res.send('Hello World!');
          });
        ```
     4. Start Server 
        ```
        const PORT = 3000;
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
          });
        ```
+ **HTTP Requests**:
  + ***GET*** request information from server
  + ***POST*** sending a resource to server
  + ***PUT*** update >> replace a resource - replace bicycle
  + ***PATCH*** update>> patch a resource - send you only wheels
  + ***DELET***
+ **the Request Object (req)**: The request object represents the data from the incoming request and is passed to all middleware and route handlers.
  + ***req.headers*** object with the headers of the incoming request
  + ***req.params*** object with any route params
  + ***req.query*** object with any key/values from a url query string
  + ***req.body*** object key/values of the request body (parsed by the express.urlencoded or express.json middleware)
  + **req.method** the method of the request as string
  
+ **The response object** is an object that is used to help author the response to the request. Primarily made up of helper functions for different types of responses.
  + ***res.send*** will send a text, html or json request depending on what is passed to it
  + ***res.json*** send a javascript object or array as a json response
  + ***res.render*** renders an html response from a template
  + ***res.status(code)*** Sets the HTTP status for the response. It is a chainable
+ **Routing**: Express.js provides methods to define routes for different HTTP methods and URL patterns. Routes are defined using methods like app.get(), app.post(), app.put(), app.delete(), etc. Route handlers are callback functions that execute when a route is matched. Route parameters can be used to extract data from the URL.
```
    app.get('/users/:id', (req, res) => {
      const userId = req.params.id;
      // Logic to fetch user data by ID
      res.send(`User ID: ${userId}`);
    });
```






+ **Middleware** in the context of web development, particularly in frameworks like Express.js for Node.js, refers to ***functions that have access*** to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.
+ following line of code is used to use bodyParser middleware in express.js. `app.use()` is usedto mount middleware .
    ```
    app.use(bodyParser.urlencoded({ extended: true }));
    ```















# section 01: Front-End Web-Development TODO



# Section 30: Build your own API
+ useful resources
  + [Rapid API](https://rapidapi.com/): it allows people to host APIs. it is like Amazon for APIs


what makes an API to monetised?
+ data collection: Covid data
+ Algorithm/ service: Google map
+ simplified interface: webdriverIO

## Rest API
+ stands for Representational State Transfer Application Programming Interface.
+ what make an API restful?
  + **use HTTP Methods**: Get, post, put, patch, delete
  + it should have a **standard data format** that it responds with  (Json/xml)
  + **Client-Server Architecture**: The client and server are separate from each other and can evolve independently.
  + **Statelessness**: Each request from the client to the server must contain all the information necessary to understand and fulfill that request. The server doesn't store any client state between requests.

---
#### Get a random jokes
```
app.get("/random", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});
```
> Math.random() * jokes.length: This expression generates a random number between 0 (inclusive) and the length of the jokes array (exclusive). Multiplying Math.random() by jokes.length scales the random number to the size of the jokes array.

>When res.json(randomJoke); is executed, Express will automatically set the appropriate headers to indicate that the content being sent back is JSON and then serialize the randomJoke object into JSON format before sending it back to the client as the response body.
---
#### Get a specific joke
+ differences between query parameters and path variables
    **Query Parameters:**
    1. Query parameters are key-value pairs that are appended to the end of a URL after a question mark (?).
    2. They are used to provide additional information to the server about the request.
    3. Query parameters are typically optional and can be used to filter, sort, or paginate data.Example: https://example.com/api/resource?key1=value1&key2=value2

    **Path Variables (Path Parameters)**:
    1. Path variables are part of the URL path itself and are used to identify a specific resource or endpoint.
    2. They are included in the URL path and are preceded by a colon **:**
    3. Path variables are used to provide information about the resource being accessed or manipulated.
    4. They are often used to retrieve specific data or perform specific actions on a resource. Example: https://example.com/api/resource/{id}

```
app.get("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foundJoke = jokes.find((joke) => joke.id === id);
  res.json(foundJoke);
});
```
+ req.query vs req.params
>req.params contains route parameters (in the path portion of the URL), and req.query contains the URL query parameters (after the ? in the URL).

+ Array.prototype.find()
>The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
`const found = array1.find((element) => element > 10);`

+ parseInt()
>The parseInt() function parses a string argument and returns an integer
---
#### Filter Jokes
```
app.get("/filter", (req, res) => {
  const type = req.query.type;
  const filteredActivities = jokes.filter((joke) => joke.jokeType === type);
  res.json(filteredActivities);
});
```
+ Array.prototype.filter()
>The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
---
#### Post a new Joke
```
app.post("/jokes", (req, res) => {
  const newJoke = {
    id: jokes.length + 1,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  jokes.push(newJoke);
  console.log(jokes.slice(-1));
  res.json(newJoke);
});
```
+ since ou data is stored in array of objects, we create an object and push it to the array.
+ we are passing data using ***body >> x-www.form-urlencoded*** in postman. to read this we will be using `req.body.text`
+ **Array.prototype.slice()**: This is an array method in JavaScript that returns a shallow copy of a portion of an array into a new array object.The argument ***-1*** passed to the slice() method indicates that you want to start slicing the array from the end, counting backward from the last element.
---
#### Put a Joke
```
app.put("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const replacementJoke = {
    id: id,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };

  const searchIndex = jokes.findIndex((joke) => joke.id === id);

  jokes[searchIndex] = replacementJoke;
  // console.log(jokes);
  res.json(replacementJoke);
});
```
+ **PUT** requests are used to update or replace an existing resource ***entirely*** with the data provided in the request payload.
+ **parseInt()**: parses a string argument and returns an integer
+ **Array.findIndex()**:returns the index of the first element in an array that satisfies the provided testing function
---
#### Patch a Joke
```
app.patch("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const existingJoke = jokes.find((joke) => joke.id === id);
  const replacementJoke = {
    id: id,
    jokeText: req.body.text || existingJoke.jokeText,
    jokeType: req.body.type || existingJoke.jokeType,
  };
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[searchIndex] = replacementJoke;
  console.log(jokes[searchIndex]);
  res.json(replacementJoke);
});
```
+  **PATCH** requests are used to apply ***partial modifications*** to an existing resource. It's used when you want to update specific fields or properties of a resource without necessarily sending the entire representation
+ `jokeText: req.body.text || existingJoke.jokeText`: This line sets the jokeText property of replacementJoke. It looks for text property in the request body (req.body.text). If it's not present **(|| operator acts as a fallback)**, it uses the jokeText property from the existingJoke object, if available.
+ **fallback** mechanism provides an alternative or default option when the primary choice is not available or cannot be used.
---
#### DELETE Specific joke - TODO



# section 31: Databases - TODO






# Section 32: SQL
+ useful resouces
  + [w3School](https://www.w3schools.com/sql/)
  + [SQL Playground](https://sqliteonline.com/#fiddle-5bbdbaef7288bo2ajn2wly03): used for practice only


### CREATE TABLE Statementv

```
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);

// sample
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);
```
+ **Primary keys** must contain UNIQUE values, and cannot contain NULL values.


### INSERT INTO Statement

1.  Specify both the column names and the values to be inserted:
```
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```
2.  If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows:
```
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

### SELECT statement
```
SELECT column1, column2, ...
FROM table_name;
```

### WHERE Clause
```
SELECT * FROM Customers
WHERE Country='Mexico';
```
+ The WHERE clause is used to filter records.

### UPDATE Statement
```
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```
+ The UPDATE statement is used to modify the existing records in a table.
+ Be careful when updating records in a table! Notice the WHERE clause in the UPDATE statement. The WHERE clause specifies which record(s) that should be updated. If you omit the WHERE clause, all records in the table will be updated!

### ALTER TABLE Statement
The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.

+ **ADD Column**
  ```
  ALTER TABLE table_name
  ADD column_name datatype;
  ```
+ **DROP COLUMN**
  ```
  ALTER TABLE table_name
  DROP COLUMN column_name;
  ```
+ **RENAME COLUMN**
    ```
    ALTER TABLE table_name
    RENAME COLUMN old_name to new_name;
    ```

### DELETE Statement
+ The DELETE statement is used to delete existing records in a table.
+ Be careful when deleting records in a table! Notice the WHERE clause in the DELETE statement. The WHERE clause specifies which record(s) should be deleted. If you omit the WHERE clause, all records in the table will be deleted!
  ```
  DELETE FROM table_name WHERE condition;
  ```

### INNER JOIN
+ The INNER JOIN keyword selects records that have matching values in both tables.
  ```
  SELECT ProductID, ProductName, CategoryName
  FROM Products
  INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;
  ```

###  FOREIGN KEY Constraint
+ A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.
+ The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table

```
  CREATE TABLE Orders (
  OrderID int NOT NULL PRIMARY KEY,
  OrderNumber int NOT NULL,
  PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
);
```


# Section 33: PostgresSQL




+ inset into
```
insert into world_food (country, rice_production, wheat_production)
values ('Italy', 1.46,7.3)
```

+ how to create a tablle?




```

alter table visited_countires 
add constraint country_code_user_id 
unique (country_code, user_id)

```


```
update users
set name =  'Angelina'
where id  = 3;
```




[SQL Practice](https://codefinity.com/start/sql?utm_source=google&utm_medium=cpc&utm_campaign=16805627028&utm_content=151854267577&utm_term=sql&gad_source=1&gclid=CjwKCAiA0bWvBhBjEiwAtEsoWzt8HmqGBr6OFTHFtnlRcF2j-R4pRMUoMPkGf3JrlI74ogw8EftuCxoC9fcQAvD_BwE)


+ send source file to me to work on it. 
+ 






### GEIAI
RPA UiPath



