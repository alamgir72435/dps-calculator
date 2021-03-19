function dps_calc(initialAmount, rate, total_month) {
  var temp = Math.pow(rate / 100 + 1, 1 / 12);
  var fx =
    (Math.pow(rate / 100 + 1, total_month / 12) - 1) / ((temp - 1) / temp);
  /*[(r/100 + 1)m/12 - 1 ] / [{(r/100+1)1/12-1}/(r/100+1)1/12]*/
  var amount_at_maturity = initialAmount * fx;
  var totalProfit = amount_at_maturity - initialAmount * total_month;
  let a = Math.pow(rate / 100 + 1, total_month / 12) - 1;
  return {
    maturity: amount_at_maturity.toFixed(2),
    profit: totalProfit.toFixed(2),
  };
}

let result = dps_calc(1000, 8, 12);

console.log(result);
