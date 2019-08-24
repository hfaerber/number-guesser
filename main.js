var minRangeValue = 1;
var rangeStart = document.querySelector("#range-start");
var maxRangeValue = 100;
var rangeEnd = document.querySelector("#range-end");
var submitRangeButton = document.querySelector("#submit-range-button");

submitRangeButton.addEventListener("click", function() {
  minRangeValue = parseInt(document.querySelector("#min-range-input").value, 10);
  rangeStart.innerText = minRangeValue;
  maxRangeValue = parseInt(document.querySelector("#max-range-input").value, 10);
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
  scoreCardNameOne.innerText = nameOneValue;
  var nameTwoValue = nameTwo.value;
  scoreCardNameTwo.innerText = nameTwoValue;
  var guessOneValue = guessOne.value;
  scoreCardGuessOne.innerText = guessOneValue;
  var guessTwoValue = guessTwo.value;
  scoreCardGuessTwo.innerText = guessTwoValue;
  event.preventDefault();
});


// psuedocode for clear button functionality
// set button to be disabled on page load <<done in html
// Set up addEventListener listening for any typed input in any of the 4 fields THEN

// first declare variable for the 4 fields (then think I need to add Event Bubbling or forloop)
var inputFieldsArr = [nameOne, nameTwo, guessOne, guessTwo];
var clearGameButton = document.querySelector(".clear-button");

for(var i = 0; i < inputFieldsArr.length; i++) {
  inputFieldsArr[i].addEventListener("keydown", makeDarkGrey);
}

function makeDarkGrey () {
  clearGameButton.classList.remove("clear-button");
};


// fire function that changes CSS style to darkgrey
//
// enables button
//
// Set up next addEventListener listening for click on button THEN
//
// clear all 4 fields
//
// change CSS style back to light darkgrey
//
// disable button
//
// then should be listening for addEventListener #1 again for typed input
