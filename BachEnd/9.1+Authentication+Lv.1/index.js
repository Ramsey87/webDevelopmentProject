import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Seceret",
  password: "Green1@3",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  const rawData = await db.query("select * from users where email=$1;", [email]);
  const resultSet = rawData.rows

  if (resultSet.length > 0) {
    res.send(`${email} already exist`)
  } else {
    await db.query("INSERT INTO users (email, password) VALUES($1, $2);",
      [email, password])
    res.render("secrets.ejs")
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  const rawData = await db.query("select * from users where email=$1;", [email]); //

  if (rawData.rows.length > 0) {
    const userName = rawData.rows[0].email
    const userPass = rawData.rows[0].password

    if (password === userPass) {
      res.render("secrets.ejs")
    } else {
      res.send("Password is Incorrect")
    }
  } else {
    res.send("user does not exist")
  }



});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
