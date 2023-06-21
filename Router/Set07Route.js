const express = require("express");
const { AllSet07Students, newStudent } = require("../Controller/Set07Controller");

const router = express.Router();

router.route("/getAllSet07").get(AllSet07Students)
router.route("/newSet07Student").post(newStudent)

module.exports = router