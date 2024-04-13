import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

  let defaultHeader = "Enter your name below" 
  res.render("index.ejs", {header : defaultHeader })


});

app.post("/submit", (req, res) => {

  const  firstName = req.body["fName"];
  const lastName = req.body["lName"];
  const fullName = firstName + lastName;
  let length = fullName.length;
  let newHeader = `Your name has ${length} charecters`

  res.render("index.ejs", {header : newHeader })

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
