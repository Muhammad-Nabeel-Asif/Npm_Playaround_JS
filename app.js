// ====================================================

const math = require("./math");
console.dir(math);

// This is how we are using methods and functions from other file "math.js"
console.log("Addition is : ", math.add(15, 20));
console.log("Square is : ", math.square(20));

// ====================================================

// From Dir "catShelter" and file {index.js} , we are importing / requiring the objects copied on module.exports to here :

const cats = require("./catShelter");
console.log(cats);
