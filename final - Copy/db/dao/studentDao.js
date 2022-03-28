/**
 * StudentDAO.js
 */
 "use strict";
 


const Student = require("../../model/student")
// TODO USE ES6 class syntax

const studentDAO = (function(){
    const students=[];
        students.push(new Student(null,'01-123-7894', "Gregory Augusto",'Loan'));
        students.push(new Student(null,'01-123-7894', "Eduardo Barroca",'Savings'));
        students.push(new Student(null,'01-123-7894', "Obinna Kalu",'Checkings'));
    const getStudents = function(){
        
        return students;
    }

  

const saveStudents = function(student){

   //products.push(new Product(null,1001, "Apple Iphone15",1900));
    students.push(new Student(null, student.studentNo, student.studentName, student.studentType));
}
return {
    getStudents:getStudents,
    saveStudents:saveStudents
   // getHotDeals:getHotDeals
}
}) ();

module.exports = studentDAO;