const add = (x, y) => x + y;
const PI = 3.14159;
const square = (x) => x * x;

// ==================================================
// "module.exports.add" copies the values from variables , constants and other objects , that can be used in other files , e.g in this directory , we are exporting (add , PI and square) to "app.js" file. This is how we can transfer copy of data from one file to another , as per usage and requirement.

/*
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;
*/

// ===================================================

// The above format could be made shorter with just :
// This is just a another approach for doing same work :)

exports.square = square;
exports.add = add;
exports.PI = PI;
