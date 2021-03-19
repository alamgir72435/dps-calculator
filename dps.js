/*dps form*/
$("#dps-calculator-form").submit(function (e) {
  e.preventDefault();
  $("#block-calculator-dps_calculator table").remove();
  var dps_initial_amount = $("#edit-dps-initial-amount").val();
  var dps_annual_interest_rate = $("#edit-dps-annual-interest-rate").val();

  var dps_calculate_for_number = $("#edit-dps-calculate-for-number").val();
  var dps_calculate_for_duration = $("#edit-dps-calculate-for-duration").text();

  var dps_calculate_for_duration = dps_calculate_for_duration;
  var total_accrued_interest = "Total Accrued interest";
  var amount_maturity = "Amount Maturity";
  var result = "Result";

  var dps_annual_interest_rate = dps_annual_interest_rate / 100;
  var month_number = dps_calculate_for_number;
  var dps_initial_amount = dps_initial_amount;

  var total_dps_annual_interest_rate = 0;
  var temp1 = 1 / 12;

  var dps_calculate_for_number =
    dps_calculate_for_number / 12; /*calculate mt where t for months*/

  // ================================
  var temp2 = dps_annual_interest_rate + 1;


  var temp3 = Math.pow(temp2, dps_calculate_for_number); /*[(r/100 + 1)m/12 */

    
  var temp4 = Math.pow(temp2, temp1);
  var temp5 = temp4 - 1; /*{(r/100+1)1/12-1}*/
  var temp6 = temp3 - 1; /*(r/100 + 1)m/12 - 1 */
  var temp7 = temp5 / temp4; /*{(r/100+1)1/12-1}/(r/100+1)1/12*/
  var temp8 =
    temp6 /
    temp7; /*[(r/100 + 1)m/12 - 1 ] / [{(r/100+1)1/12-1}/(r/100+1)1/12]*/
  var amount_at_maturity = dps_initial_amount * temp8;
  var interest_earned = amount_at_maturity - dps_initial_amount * month_number;





  var response_text =
    '<table class="mis"><thead><tr><th colspan="2">' +
    result +
    "</th></tr></thead><tbody><tr><td>" +
    total_accrued_interest +
    "</td><td>" +
    interest_earned.toFixed(2) +
    " " +
    "taka" +
    "</td></tr>";
  response_text +=
    "<tr><td>" +
    amount_maturity +
    "</td><td>" +
    amount_at_maturity.toFixed(2) +
    " " +
    "taka" +
    "</td></tr>";
  response_text += "</tbody></table>";
  $("#block-calculator-dps_calculator").append(response_text);
  return false;
});
