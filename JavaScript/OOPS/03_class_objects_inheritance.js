/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
let mith = new Person("Mithlesh Yadav", 24);
console.log(mith);
 */

/* Array.prototype.mith = function () {
    return `custom method : ${this}`;
}
let arr = [1, 2, 3];
console.log(arr.mith());
let arr1 = ["apple", "mango", "banana"];
console.log(arr1.mith()); */

class vehicals {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        return `${this.model}  is a car from ${this.make}`;
    }
}

class car extends vehicals{
    drive() {
        return `${this.model} , you can drive`;
    }
}
let mycar = new car("TATA", "Seiarra");
console.log(mycar.start());
console.log(mycar.drive());



