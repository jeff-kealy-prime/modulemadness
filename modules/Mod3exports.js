var randomNumberMod3 = require('./Mod1RandomNum'); //module.exports = randomNumber;
var usdConvertMod3 = require('./Mod2convert'); //module.exports = usdConvert;

var convertedUsd = usdConvertMod3(randomNumberMod3);

//function convertedUsd(randomNumberMod3)

module.exports.balance = convertedUsd;
module.exports.message = "Account balance\n";
