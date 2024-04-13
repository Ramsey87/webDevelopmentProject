import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Ramsey";
const yourPassword = "Ramsey1@3";
const yourAPIKey = "a5b75961-3913-4e86-acf3-5aca0aa206fb";
const yourBearerToken = "bed9be63-c9c4-400c-92ce-70dddb6eb4ad";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",  async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await  axios.get(API_URL + "random");
    const resutls = await  JSON.stringify(response.data);
    res.render("index.ejs", {content: resutls})
  } catch (error) {
    console.log("Erro: " + error);
  }
  
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

    try {
      const response = await  axios.get(API_URL + "all?page=1", {
        auth: {
          username: yourUsername,
          password: yourPassword,
        }});
      const resutls = await  JSON.stringify(response.data);
      res.render("index.ejs", {content: resutls})
    } catch (error) {
      console.log("Erro: " + error);
    }


});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
