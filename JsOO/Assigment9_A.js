// Question 1
"use strict"
var person = {
    name : '',
    dateOfBirth : null,

    setName: function(_myName){
        this.name = _myName
    }, 

    getName: function(){
        return this.name
    },

    toString: function(){
        let date = new Date(this.dateOfBirth);
        return `The Person's name is ${this.name} 
         ${this.name} was born on ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1} `
    }

}

var jhon = Object.create(person);
jhon.setName('Jhon');
jhon.dateOfBirth = '1998-12-10';
console.log(jhon.toString());

//Question 2
var employee = {
    salary : 0,
    hireDate : null,
}
employee = Object.create(person)
employee.doJob = function(_jobTitle){
    console.log(`${this.name} is a ${_jobTitle} who earns $${this.salary}`)
}


const anna = Object.create(employee);
anna.setName("Anna");
anna.salary = 249995.50;
anna.doJob('Programmer')
//console.log(anna.doJob('teste'))

//Question 3
function Person(_name,_dateOfBirth){
    this.name = _name;
    this.dateOfBirth = _dateOfBirth;
}
Person.prototype.toString = function(){
    return `{Name: ${this.name}, DateOfBirth: 
    ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}}`
}

const greg = new Person('Jhon', new Date('1998-12-10'))
console.log(greg.toString());
