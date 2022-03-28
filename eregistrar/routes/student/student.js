/**
 * Student.js
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const studentRouter = express.Router();
 const studentController = require("../../controller/studentController");
 //Student Pages 

 // Define routes for product pages
studentRouter.get("/list", async (req, res, next) => {
    console.log(`Presenting list of Student page`);
    const students =  studentController.getStudents(req, res);
    console.log(students);
    res.locals = {students: students};
    res.render("public/student.pug");
   
});


studentRouter.post("/new", async (req, res, next) => {
    const result =  studentController.addNewStudent(req, res);
    res.redirect(303, "/student/list");
});


module.exports = studentRouter;