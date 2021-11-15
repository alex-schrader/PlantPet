const express = require("express");
const app = express();
const db = require("./db/users")
const bodyParser = require('body-parser')
const cors = require("cors");

app.use(express.urlencoded());  
app.use(express.json())
app.use(cors());


app.post("/users", async (req, res) => {
    const results = await db.createUser(req.body);
    console.log("got to post")
    res.status(201).json({ "UserID": results[0] });
})

/* 
postman request example: json

{
    "UserNumber": 2,
    "UserID": 25,
    "PlantLevel": 1,
    "SeedCount": 0,
    "LastWaterData": "0",
    "Friends": "0"
}

*/

app.get("/users", async (req, res) => {
    const users = await db.getAllUsers();
    res.status(201).json({ users });
});

app.patch("/users/:id", async (req, res) => {
    //const UserID = req.body["UserID"]
    //console.log(ID)
    const id = await db.updateUser(req.params.id, req.body)
    res.status(200).json({ id });
})

app.delete("/users/:id", async (req, res) => {
    await db.deleteUser(req.params.id);
    res.status(200).json({ success: true });

})
app.get("/test", (req, res) => {
    res.status(200).json({ success: true });
})

app.listen(2500, () => console.log("server running on localhost:2500"))