// Encapsulation
/* class BankAccount{
    #balance = 2184;
    deposit(amount) {
        this.#balance += amount;
        return `Rs. ${amount} is credited in your account.`;
    }
    getBalance() {
        return `your balance : Rs. ${this.#balance}`
    }
}
let account = new BankAccount();
console.log(account.deposit(500));
console.log(account.getBalance()); */

// Abstraction
/* class coffeeMachine{
    start() {
        // call any func.
        return `Starting the machine...`;
    }
    brewCoffee() {
        return `brewing the coffee`;
    }
    pressButton() {
       console.log(this.start());
       console.log(this.brewCoffee());
    }
}
let coffee = new coffeeMachine();
coffee.pressButton(); */

// Polymorphism
/* class Bird{
    fly() {
        return `flying...`;
    }
}
class penguin extends Bird{
    fly() {
        return `penguin can't fly`;
    }
}
let bird = new Bird();
let peng = new penguin();
console.log(bird.fly());
console.log(peng.fly());
 */

// static methode
/* class cal{
    static sum(a , b){
        return a + b;
    }
}
let add = new cal();
// console.log(add.sum(3 , 4)); 
console.log(cal.sum(3 , 4)); */

//  getter and setter
class employee{
    #salary;
    constructor(name, salary) {
        this.name = name;
        this.#salery = salary;
    }
    get salary(){
        return `Your are not allowed to see salary`;
    }
    set salary(value) {
        if (value < 0) console.error("Invalid Salary");
        else this._salary = value;
   }
}
let emp = new employee("Mithlesh", 50000);
console.log(emp._salery);
