import { Person } from "./model/person.js";
import { employee } from "./model/employee.js";

const personAll = new Array;

for (let i = 0; i < 3; i++){
    personAll.push(new Person)
}

personAll[0].name = 'Ana Smith';
personAll[0].dateOfBirth = new Date('1998-12-15');

personAll[1].name = 'Bob Jone';
personAll[1].dateOfBirth = new Date('1945-11-16');

personAll[2].name = 'Carlos Slim Helu';
personAll[2].dateOfBirth = new Date('1976-09-24');


for(let i = 0; i < personAll.length;i++){
    console.log(personAll[i].toString())
}

const employee1 = new (employee);
employee1.name =  'Anna';
employee1.salary = 249.995,50;

console.log(employee1.doJob('Programmer'))

