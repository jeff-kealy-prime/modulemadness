function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
var randomNumberVar = randomNumber(100, 1000000);

module.exports = randomNumberVar;
