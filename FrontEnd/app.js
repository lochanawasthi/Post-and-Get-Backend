//constructor - doesn't return anything & start with capatial letter
class Person 
{
    constructor(name,age){
        console.log("person class constructor");
    this.name=name;
    this.age=age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("lok",22);
let p2 = new Person("los",22);


class Person extends Person
{
    constructor(name,age,marks){
    super(name,age)//parent class constructor being called
this.marks=marks;    }

   
}


class Teacher extends Person
{
    constructor(name,age,subjects){
    super(name,age)//parent clas constructor us being called
this.subjects=subjects;    }

   
}