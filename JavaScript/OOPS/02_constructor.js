/* function car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar = new car("Tesla", "EV800");
console.log(myCar); */

/* function tea(type) {
    this.type = type;
    this.describe = function () {
        console.log(`this is a cup of ${this.type}`);
        
    }
}
let lemonTea = new tea("lemon tea");
console.log(lemonTea.describe());
 */

function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be call with new keyword");
    }
    this.name = name;
}
let tea = new Drink("Tea");
let coffee = Drink("Coffee");