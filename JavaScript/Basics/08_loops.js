const prompt = require("prompt-sync")({ sigint: true });
// while loop
/* let i = 1, sum = 0;
while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);
 */

// do while loop
/* let teaCollection = [];
let tea;
do {
  tea = prompt(`Enter your favourite tea (enter (stop) to finish) : `);
  if (tea != "stop") teaCollection.push(tea);
} while (tea !== "stop");
console.log(teaCollection); */

// for loop
/* let arr = [2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
    arr[i] *= 5;
}
console.log(arr); */

// for of loop
/* let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}
 */

/* let citypopulation = {
    "london": 40000, 
    "paris": 432000,
    "berlin": 500000, 
    "Delhi" : 6700000
}
let newcity = {};
// console.log(Object.values(citypopulation));
for (const city in citypopulation) {
    newcity[city] = citypopulation[city]; 
}
console.log(newcity);
 */

//for each loop
let arr = [1, 2, 3, 4, 5];
arr.forEach( i => {
    console.log(i); 
});

