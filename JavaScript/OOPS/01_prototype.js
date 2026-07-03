/* let computer = { cup: 15 };
let hp = {
    screen: "HD",
    __proto__: computer
};
console.log(`hp ` , hp.__proto__);
 */
let genericCar = { wheels: 4  , speed : "150kph" };
let tesla = {
    carType: "EV",
    // __proto__: genericCar, 
};
Object.setPrototypeOf(tesla, genericCar);
// console.log(`tesla : `, tesla, tesla.__proto__); 
console.log(Object.getPrototypeOf(tesla));

