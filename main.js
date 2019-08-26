var minRangeValue = document.querySelector("#min-range-input");
var rangeStart = document.querySelector("#range-start");
var maxRangeValue = document.querySelector("#max-range-input");
var rangeEnd = document.querySelector("#range-end");
var updateButton = document.querySelector("#submit-range-button");
var nameOne = document.querySelector("#name-one-input");
var nameTwo = document.querySelector("#name-two-input");
var guessOne = document.querySelector("#guess-one-input");
var guessTwo = document.querySelector("#guess-two-input");
var submitGuessButton = document.querySelector("#submit-guess-button");
var scoreCardNameOne = document.querySelectorAll(".score-card-name-one");
var scoreCardNameTwo = document.querySelectorAll(".score-card-name-two");
var scoreCardGuessOne = document.querySelector(".challenger-one-guess");
var scoreCardGuessTwo = document.querySelector(".challenger-two-guess");
var inputFieldsArr = [guessOne, guessTwo];
var clearGameButton = document.querySelector(".clear-button");
var resetGameButton = document.querySelector(".reset-button");
var winnerCardName = document.querySelector("#winner-card-name");
var randomNum;
var highLowOne = document.querySelector(".high-low-one");
var highLowTwo = document.querySelector(".high-low-two");
// var min = parseInt(minRangeValue.value, 10);
// var max = parseInt(maxRangeValue.value, 10);

// add event listener to update button to fire get random interval <<would this
// be a new eventListener on this button or would we simply invoke getRandomInt
// within the setRange function?  I think the second option.
updateButton.addEventListener("click", setRange);
submitGuessButton.addEventListener("click", displayGameInfo);

function getRandomInt() {
  var minNum = Math.ceil(parseInt(minRangeValue.value, 10));
  var maxNum = Math.floor(parseInt(maxRangeValue.value, 10));
  // randomNum creating a new variable that will be global due to lack of javascript
  randomNum =  Math.floor(Math.random() * (maxNum-minNum)) + minNum;
}

function setRange(event){
  event.preventDefault();
  console.log(minRangeValue.value);
  console.log(maxRangeValue.value);
  rangeStart.innerHTML = minRangeValue.value;
  rangeEnd.innerHTML = maxRangeValue.value;
  getRandomInt();
  console.log(randomNum);
}

function displayGameInfo(event){
  event.preventDefault();
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
  gameHint();
};
// psuedocode for clear button functionality
// set button to be disabled on page load <<done in html
// Set up addEventListener listening for any typed input in any of the 4 fields THEN

// first declare variable for the 4 fields (then think I need to add Event Bubbling or forloop)
// fire function that changes CSS style to darkgrey
// enables button



for(var i = 0; i < inputFieldsArr.length; i++) {
  inputFieldsArr[i].addEventListener("keydown", disableButton);
}

function disableButton () {
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


// ERTY pseudocode for "thats too high/low" functionality
// if var guess one.value is less than var randomnum
// .innertext the guess one span (needs class or id to target)
// else if var guessone is greater than var randomnum
// .innertext the guess one span
// how do we apply two values to two innertext changes using one conditional/function?

// Where parseint?
function gameHint() {
  if (guessOne.value < randomNum) {
    highLowOne.innerText = "that's too low";
  } else if (guessOne.value > randomNum){
    highLowOne.innerText = "that's too high";
  } else {
    highLowOne.innerText = "Boom!"
  }

  if (guessTwo.value < randomNum) {
    highLowTwo.innertext = "that's too low";
  } else if (guessTwo.value > randomNum) {
    highLowTwo.innerText = "that's too high";
  } else {
    highlowTwo.innerText = "Boom!"
  }
}
