// List all jokes :

var jokes = require("jokes-gco");
console.log(jokes.alljoke());

// List a random joke :
console.log("Here is our random Joke : ", jokes.randomjoke);

// Exporting jokes to previous Dir :

module.exports.jokes = jokes.randomjoke;
