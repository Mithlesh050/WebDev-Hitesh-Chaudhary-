const prompt = require("prompt-sync")({ sigint: true });

/* function greet(name) {
  console.log(`Hello ${name}!`);
}
let n = prompt("Enter your name : ");
greet(n);
 */

//arrow function
/* const calulate = (price, quantity) => {
    return price * quantity;
}
let price = prompt("Enter price of product : ");
let quantity = prompt("Enter no of items : ");
let totalCost = calulate(price, quantity);
console.log(totalCost);
 */

//function inside function
function createTea() {
    return function teaType(tea) {
        return console.log(`Tea type : ${tea}`);   
    }
}
let ans = createTea();
let result = ans("lemon tea");
console.log(result);

