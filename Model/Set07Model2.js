const mongoose = require("mongoose")

const Set07Schema2 = mongoose.Schema({
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

const Set07Model2 = mongoose.model("Teachers", Set07Schema2)

module.exports = Set07Model2