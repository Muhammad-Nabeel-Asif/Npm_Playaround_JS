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

// =====================================================

// Getting a joke from "Jokes package"

const jokes = require("./jokes/index");
console.log("A random Joke : ", jokes);

// =====================================================

// Added cowsay package in main Directory and now importing here :)

var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);
