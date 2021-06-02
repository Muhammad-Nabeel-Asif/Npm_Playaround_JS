const math = require("./math");
console.dir(math);

// This is how we are using methods and functions from other file "math.js"
console.log("Addition is : ", math.add(15, 20));
console.log("Square is : ", math.square(20));
