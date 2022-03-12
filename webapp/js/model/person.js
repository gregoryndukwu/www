
export class Person{
    #name;
    #dateOfBirth;

    get name(){
        return this.#name;
    }
    set name(_personName){
        this.#name = _personName;
    }

    get dateOfBirth(){
        return this.#dateOfBirth;
    }

    set dateOfBirth(dateBirth){
        this.#dateOfBirth = dateBirth;

    }

    toString(){
        return `Name: ${this.name}, Date Of Birth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()+1}`
    }
}