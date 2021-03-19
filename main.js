// document
//   .querySelector("#edit-standard-submit")
//   .addEventListener("click", () => {
//     console.log(123);
//   });

$("#savings-calculator-form").submit(function (event) {
  event.preventDefault();

  $("#block-calculator-savings_calculator table").remove();
  var standard_initial_amount = $("#edit-standard-initial-amount").val();
  var standard_annual_interest_rate = $(
    "#edit-standard-annual-interest-rate"
  ).val();
  var standard_interest_calculated = $(
    "#edit-standard-interest-calculated"
  ).val();
  var standard_calculate_for_number = $(
    "#edit-standard-calculate-for-number"
  ).val();
  var standard_calculate_for_duration = $(
    "#edit-standard-calculate-for-duration"
  ).text();

  var interset = "Interest";
  var total_interest = "Total Interest";
  var balance = "Balance";
  var monthly = "Monthly";
  var result = "Result";

  var response_text =
    '<table border="1" width="100%"><thead><tr><th colspan="4">' +
    result +
    "</th></tr><tr><th>" +
    standard_calculate_for_duration +
    "</th><th>" +
    monthly +
    " " +
    interset +
    "</th><th>" +
    total_interest +
    "</th><th>" +
    balance +
    "</th></tr><tbody>";

  var standard_annual_interest_rate =
    standard_annual_interest_rate / 100; /*calculate r */
  var standard_initial_amount = standard_initial_amount;

  var total_standard_annual_interest_rate = 0;
  var temp1 =
    standard_annual_interest_rate /
    standard_interest_calculated; /*calculate r/m */
  var temp2 = 1 + temp1; /*calculate 1+r/m */
  var initial_amount = standard_initial_amount; /*take pv */
  //if(standard_calculate_for_duration == "months"){
  var temp3 =
    standard_interest_calculated * (1 / 12); /*calculate mt where t for months*/
  //	}
  // else if(standard_calculate_for_duration == "years"){
  // var temp3 = standard_interest_calculated*1;         /*calculate mt where t for years */
  // }

  for (var i = 1; i <= standard_calculate_for_number; i++) {
    var interest_prev = total_standard_annual_interest_rate;
    var fv = initial_amount * Math.pow(temp2, temp3); /*calculate mt */
    var total_standard_annual_interest_rate =
      fv - standard_initial_amount; /*calculate tatal interest */
    var interest_prev =
      total_standard_annual_interest_rate -
      interest_prev; /*calculate current interest */
    initial_amount = fv; /*reassign initial amount */

    response_text +=
      "<tr><td>" +
      i +
      "</td><td>" +
      interest_prev.toFixed(2) +
      "</td><td>" +
      total_standard_annual_interest_rate.toFixed(2) +
      "</td><td>" +
      fv.toFixed(2) +
      "</td></tr>";
  }
  response_text += "</tbody></table>";
  $(".result").html(response_text);
  return false;
});
