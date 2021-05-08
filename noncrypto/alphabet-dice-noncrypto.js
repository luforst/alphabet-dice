function getRandomInt(max) {
  return Math.floor(Math.random * max);
}

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(alphabet[getRandomInt(26)]);
