function sayHello(){
    console.log("I would like to say Hello"); 
}
setTimeout(() => {
    sayHello();
}, 5000);
for (let i = 1; i <= 10 ; i++) {
    console.log(i); 
}