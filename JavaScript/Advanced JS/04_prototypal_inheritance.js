function person(name) {
    this.name = name;
}
person.prototype.greet = function () {
    console.log(`Hello , my name is ${this.name}`);    
}
let mith = new person("Mithlesh");
mith.greet();