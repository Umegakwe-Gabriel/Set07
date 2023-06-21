const express = require("express")
const Set07Model2 = require("../Model/Set07Model2")

const Set07Students = async(req, res)=>{
    try {
        const students = await Set07Model2.find();
        res.status(200).json({message: "Get all Students", data: students})
    } catch (error) {
        res.status(400).json({message: "Couldn't get all the registered students", error})
    }
}

const newStudent = async(req, res)=>{
    try {
        const {name, email, password, phoneNum, gender} = req.body;
        const Student = await Set07Model2.create({
            name, email, password, gender, phoneNum
        })
        res.status(200).json({message: "New student has been successfully created", data: Student})
    } catch (error) {
        res.status(400).json({message: "Couldn't get new Stident", error})
    }
}

module.exports = {Set07Students, newStudent}