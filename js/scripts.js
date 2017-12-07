//BACK END LOGIC
var number;
var isNumber = /\d/g;
var isNotNumber = /[^\d]/g;
var digitToRomanNumeral = [];
var digits = [];

/*
I 1
IV 4
V 5
IX 9
X 10
XL 40
L 50
XC 90
C 100
CD 400
D 500
CM 900
M 1000
*/



var romanNumeralConverter = function(number) {
  if (number.toString().match(isNotNumber)) {
    console.log("Log(1)");
    return "Error! You did not enter a number!";
  } else if (number < 1 || number > 3999 ) {
    console.log("Log(2)");
    return "Please enter a number between 1 and 3,999";
  } else {
    digits.push(number);
    //digits.number.toString().split("");
    if (digits[digits.length - 1] < 4) {
      console.log("Log(5)");
      for (var i = 1; i <= digits[digits.length - 1]; i++) {
        digitToRomanNumeral.push("I");
        console.log("Log(3)");
    }
  }
    // } else if (digits[digits.length - 1] === 2) {
    //   digitToRomanNumeral.push("II");
    // } else if (digits[digits.length - 1] === 3) {
    //   digitToRomanNumeral.push("III");
    console.log("Log(4): "+digitToRomanNumeral);
    return digitToRomanNumeral.join("");
  }

}; //End of 'romanNumeralConverter' function.


//FRONT END LOGIC
$(document).ready(function() {
  $("#romanNumeralForm").submit(function(event) {
    event.preventDefault();
    digits = [];
    digitToRomanNumeral = [];
    $("#result").empty();
    var number = parseInt($("#number").val());
    var result = romanNumeralConverter(number);
    $("#result").append(result);
  }); //End of 'romanNumeralForm' submit listener.
}); //End of 'document.ready' function.
