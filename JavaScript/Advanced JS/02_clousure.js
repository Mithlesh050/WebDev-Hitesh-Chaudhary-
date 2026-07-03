function outer() {
    let counter = 5;
    return function () {
        counter++;
        return counter;
    }
}
let increament = outer();
console.log(increament());
console.log(increament());
console.log(increament());
