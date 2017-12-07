//BACK END LOGIC
var number;
var isNumber = /\d/g;
var isNotNumber = /[^\d]/g;



var romanNumeralConverter = function(number) {
  if (number.match(isNotNumber)) {
    alert("Error! You did not enter a number!");
    console.log("Log(1)");
    return true;
  } else if (number < 1 || number > 3999 ) {
    alert("Please enter a number between 1 and 3,999")
    console.log("Log(2)");
    return true;
  } 

}; //End of 'romanNumeralConverter' function.


//FRONT END LOGIC
$(document).ready(function() {
  $("#romanNumeralForm").submit(function(event) {
    event.preventDefault();
    $("#result").empty();
    var number = parseInt($("#number").val());
    var result = romanNumeralConverter(number);
    $("#result").append(result);
  }); //End of 'romanNumeralForm' submit listener.
}); //End of 'document.ready' function.
