const person = {
    name: "Mithlesh",
    greet() {
        console.log(`Hey , I am ${this.name}`);
    }
};
person.greet();
const greetFun = person.greet;
greetFun();
const bountGreet = person.greet.bind({ name: "Mithlesh Yadav" });
bountGreet();