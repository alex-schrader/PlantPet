const express = require("express");
const app = express();
const db = require("./db/users")
const bodyParser = require('body-parser')

app.use(express.urlencoded());  
app.use(express.json())


app.post("/users", async (req, res) => {
    //const results = await db.createUser(req.body);
    res.status(201).json({ "UserID": results[0] });
})

app.get("/users", async (req, res) => {
    const users = await db.getAllUsers();
    res.status(201).json({ users });
});

app.patch("users/:userID", async (req, res) => {
    const userID = await db.updateUser(req.params.id, req.body)
    res.status(200).json({ cars });
})


app.get("/test", (req, res) => {
    res.status(200).json({ success: true });
})

app.listen(2500, () => console.log("server running on localhost:2500"))