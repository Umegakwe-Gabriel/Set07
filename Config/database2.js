const mongoose = require("mongoose")

const Set07DB = "mongodb://0.0.0.0:27017/Set07Database"

const DatabaseSet07 = async()=>{
    try {
        const DBSet07 = await mongoose.connect(Set07DB)
        console.log(`Database is now connected to ${DBSet07.connection.host}`);
    } catch (error) {
        console.log("An error while connecting to database");
    }
}

module.exports = DatabaseSet07();