const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontpage.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/auth/index.html"));
    res.send
})

app.listen(3000, () => {
    console.log("The server listening to the port 3000");
})

