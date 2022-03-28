/**
 * StudentDAO.js
 */
 "use strict";
 
const Student = require("../model/student");
// TODO USE ES6 class syntax

const studentDAO = (function(){
    const students=[];
        students.push(new Student(null,'000-11-0001', "Anna Lynn Smith",'Graduate'));
        students.push(new Student(null,'000-11-0002', "Bob K. Jones",'Undergraduate'));      
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