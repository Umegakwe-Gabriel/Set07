const express = require("express")
require("./Config/database")
const set07Model = require("./Router/Set07Route")

const port = 2500;

const app = express()
app.use(express.json())
app.use("/api", set07Model)

app.get("/", (req, res)=>{
    res.status(200).json({message: "Server is up and running"})
})

app.listen(port, ()=>{
    console.log("Server is now listenig", port);
})
