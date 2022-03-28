/**
 * datastore.js
 * 
 * @author 
 * @since 
 */
"use strict";

const dataStore = (function(){
    const registrationData = [
        {studentId: "000-11-0001", fullName: "Anna Lynn Smith", levelOfStudy: "Graduate"},
        {studentId: "000-11-0002", fullName: "Bob K. Jones", levelOfStudy: "Undergraduate"}
    ];

    const getData = function() {
        return registrationData;
    }

    const saveStudents = function(student){

        registrationData.push(new Student(null, student.studentNo, student.studentName, student.studentType));
     }

    return {
        getData: getData,
        saveStudents:saveStudents
    }

})();

module.exports = dataStore;