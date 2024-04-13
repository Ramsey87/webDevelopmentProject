import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";
env.config();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});
db.connect();

//Homepage 
app.get('/', async (req, res) => {
    res.render("home.ejs")
})

//Login page
app.get('/login', async (req, res) => {
    res.render("login.ejs")
})

app.post('/login', async (req, res) => {
    const userEmail = req.body.username.toLowerCase();
    const userEnteredPassword = req.body.password.toLowerCase();

    try {
        const checkUser = await db.query("select * from students where email = LOWER($1)", [userEmail])
        if (checkUser.rows.length > 0) {
            const studentDetails = checkUser.rows[0];
            if (userEnteredPassword.toLowerCase() === studentDetails.password.toLowerCase()) {
                res.render("grades.ejs", { studentDetails: studentDetails })
            } else {
                console.log("Incorrect username or password")
            }
        } else {
            res.send("user is not found")
        }
    } catch (error) {
        res.send("Technical Error happend" + error);
    }

})


// to get Register page
app.get('/register', async (req, res) => {
    res.render("register.ejs")
})

app.post('/register', async (req, res) => {
    const name = req.body.name.toLowerCase();
    const userEmail = req.body.username.toLowerCase();
    const userpassword = req.body.password.toLowerCase();

    try {
        const checkUser = await db.query("select * from students where email = $1", [userEmail])
        if (checkUser.rows.length > 0) {
            res.render("grades.ejs", { studentDetails: studentDetails })
        } else {
            await db.query("insert into students (name, email, password) values ($1,$2,$3)", [name, userEmail, userpassword]);
            res.redirect("/")
        }
    } catch (error) {
        res.send("Technical Error Happened" + error)
    }


})

// to get users page
app.get('/dashboard', async (req, res) => {
    res



})


//to post user entered data





app.listen(port, () => {
    console.log(`Successfully started server on port ${port}.`);
});