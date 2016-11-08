var randomNumber = require('./modules/Mod1RandomNum');
var convert = require('./modules/Mod2convert');
var convertedNumber = require('./modules/Mod3exports');
console.log(convertedNumber.message + convertedNumber.balance);
var http = require('http');
var portDecision = 3000;

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(convertedNumber.message + convertedNumber.balance);
  res.end();
}).listen(portDecision);
