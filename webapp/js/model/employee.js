import { Person } from "./person.js";
export class employee extends Person{
    #salary;
    #hireDate;

    doJob(_jobTitle){
       // return _jobTitle;
        return `${this.name} is a ${_jobTitle} who earns $${this.salary}`
    }
}