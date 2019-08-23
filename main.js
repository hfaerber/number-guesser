// set range box functionality for min Range

// minRangeInput could also be broken down into two variables:

// var minRangeField = document.querySelector("#min-range-input");
// var minRangeValue = minRangeField.value;
//
// var minRangeInput = document.querySelector("#min-range-input").value;
// var minRangeField = document.querySelector("#min-range-input");
var minRangeValue = 1;
var rangeStart = document.querySelector("#range-start");
var maxRangeField = document.querySelector("#max-range-input");
var rangeEnd = document.querySelector("#range-end");
var submitRangeButton = document.querySelector("#submit-range-button");

submitRangeButton.addEventListener("click", function() {
  minRangeValue = parseInt(document.querySelector("#min-range-input").value, 10);
  // the minRangeValue var might be an issue bc it will only be able to be called in this function
  // var intMin = parseInt(minRangeValue, 10);
  // rangeStart.innerText = intMin;
  rangeStart.innerText = minRangeValue;
  var maxRangeValue = maxRangeField.value;
  rangeEnd.innerText = maxRangeValue;
  event.preventDefault();
});

var nameOne = document.querySelector("#name-one-input");
var nameTwo = document.querySelector("#name-two-input");
var guessOne = document.querySelector("#guess-one-input");
var guessTwo = document.querySelector("#guess-two-input");
var submitGuessButton = document.querySelector("#submit-guess-button");
var scoreCardNameOne = document.querySelector(".score-card-name-one");
var scoreCardNameTwo = document.querySelector(".score-card-name-two");
var scoreCardGuessOne = document.querySelector(".challenger-one-guess");
var scoreCardGuessTwo = document.querySelector(".challenger-two-guess");

submitGuessButton.addEventListener("click", function(){
  var nameOneValue = nameOne.value;

})
