

function usdConvert(num) {
  var currency = num;
  var addCurrency = currency.toString();
  var addDollarSign = "$" + addCurrency;
  return addDollarSign;

}
module.exports = usdConvert;
