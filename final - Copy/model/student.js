/**
 * Student.js
 */
 "use strict";

 function Student(studentId,studentNo,studentName,studentType){
     this.studentId = studentId;
     this.studentNo = studentNo;
     this.studentName = studentName;
     this.studentType = studentType;
 }

 module.exports = Student;