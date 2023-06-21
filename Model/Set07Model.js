const mongoose = require("mongoose")

const Set07Schema = mongoose.Schema({
    name: {
        type: String
    },
    phoneNum: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
})

const Set07Model = mongoose.model("Students", Set07Schema)

module.exports = Set07Model