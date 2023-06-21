const express = require("express")
require("./Config/database2")
const set07Model2 = require("./Router/Set07Router2")

const port = 2600;

const app = express();
app.use(express.json())
app.use("/api", set07Model2)

app.get("/", (req, res)=>{
res.status(200).json({message: "Server is up and running"})
})

app.listen(port, ()=>{
    console.log("Server is listening", port);
})