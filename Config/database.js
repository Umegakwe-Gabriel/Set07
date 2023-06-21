const mongoose = require("mongoose")

const Set07 = "mongodb://0.0.0.0:27017/Set07Database"

const Database = async()=>{
    try {
        const Database07 = await mongoose.connect(Set07)
        console.log(`Database is connected to ${Database07.connection.host}`); 
    } catch (error) {
        console.log("Couldn't connect to Database");
    }
}

module.exports = Database();