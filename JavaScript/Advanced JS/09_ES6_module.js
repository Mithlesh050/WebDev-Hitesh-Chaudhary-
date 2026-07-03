// Module JS
/* import { add, sub } from "./10_maths_operations.js";
import multiply from "./10_maths_operations.js";
let a = 10, b = 5;
console.log(add(10 , 5));
console.log(sub(10 , 5));
console.log(multiply(10 , 5 ));
 */

// Common JS
let mathOp = require("./10_maths_operations.js")
console.log(mathOp.add(5 , 2));
console.log(mathOp.sub(5 , 2));
console.log(mathOp.multiply(5 , 2));
