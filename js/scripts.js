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
    digits = digits.toString(10).split("").map(function(n){return parseInt(n)});
    //digits.number.toString().split("");

    //Function for converting digits 1, 2, & 3
    if (digits[digits.length - 1] < 4) {
      for (var i = 1; i <= digits[digits.length - 1]; i++) {
        digitToRomanNumeral.push("I");
        console.log("Log(3)");
      }
      //Converting a digit of 4.
    } else if (digits[digits.length - 1] === 4) {
      digitToRomanNumeral.push("IV");
      console.log("Log(4)");
    } else if (digits[digits.length - 1] === 5) {
      digitToRomanNumeral.push("V");
      console.log("Log(5)");
    } else if (digits[digits.length - 1] > 5 && digits[digits.length - 1] < 9) {
      digitToRomanNumeral.push("V")
      for (var i = 6; i <= digits[digits.length - 1]; i++) {
        digitToRomanNumeral.push("I");
        console.log("Log(6)");
      }
    } else if (digits[digits.length - 1] === 9) {
      digitToRomanNumeral.push("IX");
      console.log("Log(7)");
    } else {
        console.log("Log(8): Error! No value returned!");
    } //End of 'first digit' conversion.

    if (digits[digits.length - 2] < 4) {
      for (var i = 1; i <= digits[digits.length - 2]; i++) {
        digitToRomanNumeral.unshift("X");
        console.log("Log(3)");
      }
      //Converting a digit of 4.
    } else if (digits[digits.length - 2] === 4) {
      digitToRomanNumeral.unshift("XL");
      console.log("Log(4)");
    } else if (digits[digits.length - 2] === 5) {
      digitToRomanNumeral.unshift("L");
      console.log("Log(5)");
    } else if (digits[digits.length - 2] > 5 && digits[digits.length - 2] < 9) {
      digitToRomanNumeral.unshift("L")
      for (var i = 6; i <= digits[digits.length - 2]; i++) {
        digitToRomanNumeral.unshift("X");
        console.log("Log(6)");
      }
    } else if (digits[digits.length - 2] === 9) {
      digitToRomanNumeral.unshift("XC");
      console.log("Log(7)");
    } else {
      console.log("Log(8): HEY! No second digit value returned!");
    } //End of 'second digit' conversion.
    } //End of first 'else' statement.


    // } else if (digits[digits.length - 1] === 2) {
    //   digitToRomanNumeral.push("II");
    // } else if (digits[digits.length - 1] === 3) {
    //   digitToRomanNumeral.push("III");
    console.log("Log(4): "+digitToRomanNumeral);
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
