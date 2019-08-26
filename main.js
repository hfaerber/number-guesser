// DECLARED VARIABLES
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
var inputGuessFieldsArr = [guessOne, guessTwo];
var inputNameAndGuessFieldsArr = [nameOne, nameTwo, guessOne, guessTwo];
var clearGameButton = document.querySelector(".clear-button");
var resetGameButton = document.querySelector(".reset-button");
var winnerCardName = document.querySelector("#winner-card-name");
var randomNum;
var highLowOne = document.querySelector(".high-low-one");
var highLowTwo = document.querySelector(".high-low-two");

// var min = parseInt(minRangeValue.value, 10);
// var max = parseInt(maxRangeValue.value, 10);

// EVENT LISTENERS
updateButton.addEventListener("click", setRange);
submitGuessButton.addEventListener("click", displayGameInfo);

for(var i = 0; i < inputGuessFieldsArr.length; i++) {
  inputGuessFieldsArr[i].addEventListener("keydown", disableButton);
}

clearGameButton.addEventListener("click", clearGameFields);

// FUNCTIONS
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

function disableButton () {
  clearGameButton.classList.remove("clear-button");
  clearGameButton.disabled = false;
};

function clearGameFields () {
  for(var i = 0; i < inputGuessFieldsArr.length; i++) {
  inputGuessFieldsArr[i].value = "";
}
  clearGameButton.classList.add("clear-button");
  clearGameButton.disabled = true;
};


// changed inputFieldsArr name to inputGuessFieldsArr since it only pulls the 2 guess fields
// add inputNameAndGuessFieldsArr for all 4 fields since reset will clear all 4
// i added the reset-button class to the disabled look, need to create function w event listener to see if it works

// Set up next addEventListener listening for click on button THEN
//
// clear all 4 fields
//
// change CSS style back to light darkgrey
//
// disable button
//
// then should be listening for addEventListener #1 again for typed input


function gameHint() {
  if (parseInt(guessOne.value) === randomNum) {
    highLowOne.innerText = "BOOM!";
  } else if (parseInt(guessOne.value) > randomNum) {
    highLowOne.innerText = "that's too high";
  } else if (parseInt(guessOne.value) < randomNum) {
    highLowOne.innerText = "that's too low";
  } else {
    highLowOne.innerText = "no guess submitted";
  }

  if (parseInt(guessTwo.value) === randomNum) {
    highLowTwo.innerText = "BOOM!";
  } else if (parseInt(guessTwo.value) > randomNum) {
    highLowTwo.innerText = "that's too high";
  } else if (parseInt(guessTwo.value) < randomNum) {
    highLowTwo.innerText = "that's too low";
  } else {
    highLowTwo.innerText = "no guess submitted";
  }
}
