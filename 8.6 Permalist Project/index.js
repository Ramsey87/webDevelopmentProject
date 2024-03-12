import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "Green1@3",
  port: 5432,
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get("/", async (req, res) => {
  const results = await db.query("select * from items")
  items = results.rows;
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items (title) VALUES ($1)", [item])
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const itemID = req.body.updatedItemId;
  const itemTitle = req.body.updatedItemTitle;
  await db.query("update items set title = $1 where id = $2", [itemTitle, itemID]);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const itemID = req.body.deleteItemId;
  await db.query("delete from items where id=$1", [itemID]);
  res.redirect("/");
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
