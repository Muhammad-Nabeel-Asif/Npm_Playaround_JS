// ===============================================
// including figlet and colors npm packages for just fun .

var figlet = require("figlet");
var colors = require("colors");

figlet("heheheehheheh", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  // .red is imported as colors package :)
  console.log(data.red);
});

// ===============================================
