const initialAmount = 1000;
const rate = 8;
const total_month = 24;

// ......................................
var temp4 = Math.pow(rate / 100 + 1, 1 / 12);
var temp8 =
  (Math.pow(rate / 100 + 1, total_month / 12) - 1) / ((temp4 - 1) / temp4); /*[(r/100 + 1)m/12 - 1 ] / [{(r/100+1)1/12-1}/(r/100+1)1/12]*/

var amount_at_maturity = initialAmount * temp8;
var totalProfit = amount_at_maturity - initialAmount * total_month;

//=============================
console.log(amount_at_maturity);
console.log(totalProfit);
