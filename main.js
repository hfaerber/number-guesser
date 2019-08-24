var minRangeValue = document.querySelector("#min-range-input");
var rangeStart = document.querySelector("#range-start");
var maxRangeValue = document.querySelector("#max-range-input");
var rangeEnd = document.querySelector("#range-end");
var submitRangeButton = document.querySelector("#submit-range-button");

submitRangeButton.addEventListener("click", setRange);
  // minRangeValue = parseInt(document.querySelector("#min-range-input").value, 10);
//   rangeStart.innerText = minRangeValue;
//   // maxRangeValue = parseInt(document.querySelector("#max-range-input").value, 10);
//   rangeEnd.innerText = maxRangeValue;
// });

function setRange(event){
  console.log(minRangeValue.value);
  console.log(maxRangeValue.value);
  rangeStart.innerHTML = minRangeValue.value;
  rangeEnd.innerHTML = maxRangeValue.value;
  event.preventDefault();
}

// function getRandom(){
//   min = Math.Ceil(minRangeValue);
//   max = Math.floor(maxRangeValue);
//
// }

var nameOne = document.querySelector("#name-one-input");
var nameTwo = document.querySelector("#name-two-input");
var guessOne = document.querySelector("#guess-one-input");
var guessTwo = document.querySelector("#guess-two-input");
var submitGuessButton = document.querySelector("#submit-guess-button");
var scoreCardNameOne = document.querySelectorAll(".score-card-name-one");
var scoreCardNameTwo = document.querySelectorAll(".score-card-name-two");
var scoreCardGuessOne = document.querySelector(".challenger-one-guess");
var scoreCardGuessTwo = document.querySelector(".challenger-two-guess");

submitGuessButton.addEventListener("click", displayGameInfo);

function displayGameInfo(event){
  for(var i = 0; i < scoreCardNameOne.length; i++){
    scoreCardNameOne[i].innerText = nameOne.value;
    }
  for(var i = 0; i < scoreCardNameTwo.length; i++){
    scoreCardNameTwo[i].innerText = nameTwo.value;
  }
  var guessOneValue = guessOne.value;
  scoreCardGuessOne.innerText = guessOneValue;
  var guessTwoValue = guessTwo.value;
  scoreCardGuessTwo.innerText = guessTwoValue;
  event.preventDefault();
};
// psuedocode for clear button functionality
// set button to be disabled on page load <<done in html
// Set up addEventListener listening for any typed input in any of the 4 fields THEN

// first declare variable for the 4 fields (then think I need to add Event Bubbling or forloop)
// fire function that changes CSS style to darkgrey
// enables button
var inputFieldsArr = [nameOne, nameTwo, guessOne, guessTwo];
var clearGameButton = document.querySelector(".clear-button");

for(var i = 0; i < inputFieldsArr.length; i++) {
  inputFieldsArr[i].addEventListener("keydown", makeDarkGrey);
}

function makeDarkGrey () {
  clearGameButton.classList.remove("clear-button");
  clearGameButton.disabled = false;
  // is this actually disabling?  or do i need to set disable = true on page load, then false w event?
};

clearGameButton.addEventListener("click", clearGameFields);

function clearGameFields () {
  for(var i = 0; i < inputFieldsArr.length; i++) {
  inputFieldsArr[i].value = "";
}
// does this have to be another for loop? or can it reference the about for loop?
  clearGameButton.classList.add("clear-button");
  clearGameButton.disabled = true;
};

// Set up next addEventListener listening for click on button THEN
//
// clear all 4 fields
//
// change CSS style back to light darkgrey
//
// disable button
//
// then should be listening for addEventListener #1 again for typed input
