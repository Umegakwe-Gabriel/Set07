const express = require("mongoose")
const { AllSet07Students, newStudent } = require("../Controller/Set07Controller")

const router = express.Router()
router.route("/getAllStudents").get(AllSet07Students)
router.route("/newStudent").get(newStudent)

module.exports = router