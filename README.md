


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
