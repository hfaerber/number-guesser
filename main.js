// set range box functionality for min Range

// minRangeInput could also be broken down into two variables:

// var minRangeField = document.querySelector("#min-range-input");
// var minRangeValue = minRangeField.value;
//
// var minRangeInput = document.querySelector("#min-range-input").value;
var minRangeField = document.querySelector("#min-range-input");
var rangeStart = document.querySelector("#range-start");
var submitRangeButton = document.querySelector("#submit-range-button");

submitRangeButton.addEventListener("click", function() {
  var minRangeValue = minRangeField.value;
  rangeStart.innerText = minRangeValue;
  event.preventDefault();
});
