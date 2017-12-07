//BACK END LOGIC
var number;
var isNumber = /\d/g;
var isNotNumber = /[^\d]/g;
var digitToRomanNumeral = [];
var digits = [];
var someArray = [];

var unshifter = function(thing) {
  digitToRomanNumeral.unshift(thing);
}

var romanNumeralConverter = function(number) {
  if (number.toString().match(isNotNumber) || number < 1 || number > 3999) {
    console.log("Log(1)");
    return "Error! Please enter a number between 1 and 3,999.";
  } else {
    digits.push(number);
    digits = digits.toString(10).split("").map(function(n){return parseInt(n)});
    for (var i = 1; i <= digits.length; i++) {
      var index = digits[digits.length - i];
      if (i === 1) {
        someArray = ["I", "IV", "V", "IX"];
      } else if (i === 2) {
        someArray = ["X", "XL", "L", "XC"];
      } else if (i === 3) {
        someArray = ["C", "CD", "D", "CM"];
      } else if (i === 4) {
        someArray = ["M"];
      } else {
        alert("You broke the internet");
      } if (index < 4) {
        for (var j = 1; j <= index; j++) {
          unshifter(someArray[0]);
        }
      } else if (index === 4) {
        unshifter(someArray[1])
      } else if (index >= 5 && index < 9) {
        var fiveToNine = [];
        fiveToNine.unshift(someArray[2]);
        for (var k = 6; k <= index; k++) {
          fiveToNine.push(someArray[0])
        }
        fiveToNine = fiveToNine.join("");
        unshifter(fiveToNine);
      } else if (index === 9) {
        unshifter(someArray[3])
      } else {
        alert("You broke the internet again!");
      }
    }
  } //End of first 'else' statement.
  return digitToRomanNumeral.join("");
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
