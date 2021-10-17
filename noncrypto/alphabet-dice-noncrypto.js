function getRandomInt(max) {
  return Math.floor(Math.random * max);
}

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var index = getRandomInt(26);
console.log(alphabet[index]);
