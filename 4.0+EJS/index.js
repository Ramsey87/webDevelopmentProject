import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import * as date from "Date";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let notedDate = date.getDay();





app.get("/", (req, res) => {
  res.render('views/index.ejs', {date: "notedDate"});
    

});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
