//BACK END LOGIC
var number;
var isNumber = /\d/g;
var isNotNumber = /[^\d]/g;
var digitToRomanNumeral = [];
var digits = [];

var romanNumeralConverter = function(number) {
  if (number.toString().match(isNotNumber)) {
    console.log("Log(1)");
    return "Error! You did not enter a number!";
  } else if (number < 1 || number > 3999 ) {
    console.log("Log(2)");
    return "Please enter a number between 1 and 3,999";
  } else {
    digits.push(number);
    digits = digits.toString(10).split("").map(function(n){return parseInt(n)});

    //Function for converting digits 1, 2, & 3
    if (digits[digits.length - 1] < 4) {
      for (var i = 1; i <= digits[digits.length - 1]; i++) {
        digitToRomanNumeral.push("I");
      }

    } else if (digits[digits.length - 1] === 4) {
      digitToRomanNumeral.push("IV");
    } else if (digits[digits.length - 1] >= 5 && digits[digits.length - 1] < 9) {
      digitToRomanNumeral.push("V")
      for (var i = 6; i <= digits[digits.length - 1]; i++) {
        digitToRomanNumeral.push("I");
      }
    } else if (digits[digits.length - 1] === 9) {
      digitToRomanNumeral.push("IX");
    } else {
      console.log("Error!")
    } //End of 'first digit' conversion.

    if (digits[digits.length - 2] < 4) {
      for (var i = 1; i <= digits[digits.length - 2]; i++) {
        digitToRomanNumeral.unshift("X");
      }

    } else if (digits[digits.length - 2] === 4) {
      digitToRomanNumeral.unshift("XL");
    } else if (digits[digits.length - 2] >= 5 && digits[digits.length - 2] < 9) {
      var fiveToNine = [];
      fiveToNine.unshift("L")
      for (var i = 6; i <= digits[digits.length - 2]; i++) {
        fiveToNine.push("X");
      }
      fiveToNine = fiveToNine.join("");
      digitToRomanNumeral.unshift(fiveToNine);
    } else if (digits[digits.length - 2] === 9) {
      digitToRomanNumeral.unshift("XC");
    } else {
      console.log("No second digit")
    } //End of 'second digit' conversion.

    if (digits[digits.length - 3] < 4) {
      for (var i = 1; i <= digits[digits.length - 3]; i++) {
        digitToRomanNumeral.unshift("C");
      }
    } else if (digits[digits.length - 3] === 4) {
      digitToRomanNumeral.unshift("CD");
    } else if (digits[digits.length - 3] >= 5 && digits[digits.length - 3] < 9) {
      var fiveToNine = [];
      fiveToNine.unshift("D")
      for (var i = 6; i <= digits[digits.length - 3]; i++) {
        fiveToNine.push("C");
      }
      fiveToNine = fiveToNine.join("");
      digitToRomanNumeral.unshift(fiveToNine);
    } else if (digits[digits.length - 3] === 9) {
      digitToRomanNumeral.unshift("CM");
    } else {
      console.log("No third digit")
    } //End of 'Third digit' conversion.

    if (digits[digits.length - 4] < 4) {
      for (var i = 1; i <= digits[digits.length - 4]; i++) {
        digitToRomanNumeral.unshift("M");
      }
    } else {
      console.log("No fourth digit");
    } //End of 'fourth digit' conversion.
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
