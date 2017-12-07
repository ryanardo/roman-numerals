//BACK END LOGIC
var romanNumeralConverter = function(number) {

}; //End of 'romanNumeralConverter' function.


//FRONT END LOGIC
$(document).ready(function() {
  $("#romanNumeralForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());

  }); //End of 'romanNumeralForm' submit listener.
}); //End of 'document.ready' function.
