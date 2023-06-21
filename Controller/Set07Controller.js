const express = require("express")
const Set07Model = require("../Model/Set07Model")

const AllSet07Students = async(req, res)=>{
    try {
        const Students = await Set07Model.find()
        res.status(200).json({message: "All registerd Set07 Students", data: Students})
    } catch (error) {
        res.status(400).json({message: "Couldn't get all students", error})
    }
}

const newStudent = async(req, res)=>{
    try {
        const {name, email, password, phoneNum, gender} = req.body;
        const student = await Set07Model.create({
            name, email, password, phoneNum, gender
        })
        res.status(200).json({message: "Details of new student created", data: student})
    } catch (error) {
        res.status(400).json({message: "Couldn't prepare student details", error})
    }
}

module.exports = {newStudent, AllSet07Students}