//constructor - doesn't return anything & start with capatial letter
class Person 
{
    constructor(name,age){
    this.name=name;
    this.age=age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("lok",22);
let p2 = new Person("los",22);
