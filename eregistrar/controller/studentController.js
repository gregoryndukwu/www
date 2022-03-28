/**
 * studentController.js
 */
 "use strict";

 const studentDAO = require("../datastore/datastore");
 const Student = require("../model/student");

 const studentController = (function(){

    const getStudents = function(req,res) {
        try {
            const students = studentDAO.getStudents();
            console.log(`Controller: Student list: ${students}`);
            return students;
        } catch (error) {
            res.status(500);
            res.render("50x",{error: error});
        }
    };
   
    const addNewStudent = function(req, res){
        const student = new Student(null,req.body.txtStudentNo, req.body.txtStudentName,req.body.ddlStudentType);
        try {
            const opRes = studentDAO.saveStudents(student);
            console.log(`Student Controler: Save Student output: ${opRes}`)
            return opRes;
        } catch (error) {
            res.status(500);
            res.render("50x",{error:error})
        }
    }
    return {
        getStudents: getStudents,
        addNewStudent:addNewStudent
        
    }
})();

module.exports = studentController;