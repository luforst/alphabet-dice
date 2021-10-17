var Promise = require("bluebird");
var randomNumber = require("random-number-csprng");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(alphabet[randomNumber(0, 26)]);
