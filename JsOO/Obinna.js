class user {
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`Hello, ${this.name}`)
    }
}

const name = new user("Gregory");
name.sayHello();