// 1st task
/* let teaFlavors = ["greetea", "blacktea", 'oolongtea'];
let firsttea = teaFlavors[0];
console.log(firsttea); */

// 2nd task
/* let cities = ["Chennai", 'Kolkata', 'Delhi', 'Berlin', 'Tokyo'];
let favoriteCity = cities[4];
console.log(favoriteCity); */

// 3rd task push in array
/* let cities = ["London", "Mumbai"];
cities.push("Berlin")
console.log(cities);
cities.pop();
console.log(cities); */

//create soft copy of an array
/* let cities = ["Chennai", "Kolkata", "Delhi", "Berlin", "Tokyo"];
let softcopy = cities;
cities.pop();
console.log(cities);
console.log(softcopy); */

// create hard copy of an array
/* let cities = ["Chennai", "Kolkata", "Delhi", "Berlin", "Tokyo"];
let softcopy = [...cities];
cities.pop();
console.log(cities);
console.log(softcopy); */

// mearge arrays
/* let teaFlavors = ["greetea", "blacktea", "oolongtea"];
let cities = ["Chennai", "Kolkata", "Delhi", "Berlin", "Tokyo"];
let meargeArray = teaFlavors.concat(cities);
console.log(meargeArray);
 */

// present in array or not
let cities = ["Chennai", "Kolkata", "Delhi", "Berlin", "Tokyo"];
let find=cities.includes("delhi")
console.log(find);
