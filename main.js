// DECLARED VARIABLES
var minRangeValue = document.querySelector('#min-range-input');
var rangeStart = document.querySelector('.range-start');
var maxRangeValue = document.querySelector('#max-range-input');
var rangeEnd = document.querySelector('.range-end');
var rangeInputBox = document.querySelector('.range-input-box');
var updateButton = document.querySelector('#submit-range-button');
var nameOne = document.querySelector('#name-one-input');
var nameTwo = document.querySelector('#name-two-input');
var guessOne = document.querySelector('#guess-one-input');
var guessTwo = document.querySelector('#guess-two-input');
var guessOneValue = '?';
var guessTwoValue = '?';
var submitGuessButton = document.querySelector('#submit-guess-button');
var scoreCardNameOne = document.querySelectorAll('.score-card-name-one');
var scoreCardNameTwo = document.querySelectorAll('.score-card-name-two');
var scoreCardGuessOne = document.querySelector('.challenger-one-guess');
var scoreCardGuessTwo = document.querySelector('.challenger-two-guess');
var inputGuessFieldsArr = [guessOne, guessTwo];
var inputNameAndGuessFieldsArr = [nameOne, nameTwo, guessOne, guessTwo];
var clearGameButton = document.querySelector('.clear-button');
var resetGameButton = document.querySelector('.reset-button');
var winnerCardName = document.querySelector('#winner-card-name');
var randomNum;
var highLowOne = document.querySelector('.high-low-one');
var highLowTwo = document.querySelector('.high-low-two');
var errorArr = document.querySelectorAll('.error-message');
var errorMin = errorArr[0];
var errorG1 = errorArr[1];
// var errorN1 = errorArr[2];
var errorG2 = errorArr[3];
// var errorN2 = errorArr[4];

// EVENT LISTENERS
window.onload = function() {
  getRandomInt();
  console.log(randomNum);
};

updateButton.addEventListener('click', setRange);
submitGuessButton.addEventListener('click', displayGameInfo);
resetGameButton.addEventListener('click', resetAndDisable);
clearGameButton.addEventListener('click', clearGuessFields);
guessOne.addEventListener('mouseout', errorCheckGuessOne);
guessTwo.addEventListener('mouseout', errorCheckGuessTwo);

for(var i = 0; i < inputGuessFieldsArr.length; i++) {
  inputGuessFieldsArr[i].addEventListener('keydown', enableClear);
}

// FUNCTIONS
function getRandomInt() {
  var minNum = Math.ceil(parseInt(minRangeValue.value, 10) || 1);
  var maxNum = Math.floor(parseInt(maxRangeValue.value, 10) || 100);
  randomNum =  Math.floor(Math.random() * (maxNum-minNum)) + minNum;
};

function setRange(event) {
  event.preventDefault();
  errorCheckRange();
  rangeStart.innerHTML = minRangeValue.value;
  rangeEnd.innerHTML = maxRangeValue.value;
  getRandomInt();
  // console.log(randomNum);
};

function displayGameInfo(event) {
  event.preventDefault();
  updateNames();
  guessOneValue = guessOne.value || '?';
  scoreCardGuessOne.innerText = guessOneValue;
  guessTwoValue = guessTwo.value || '?';
  scoreCardGuessTwo.innerText = guessTwoValue;
  gameHint();
  enableReset();
};

function updateNames() {
  for(var i = 0; i < scoreCardNameOne.length; i++){
    scoreCardNameOne[i].innerText = nameOne.value;
    }
  for(var i = 0; i < scoreCardNameTwo.length; i++){
    scoreCardNameTwo[i].innerText = nameTwo.value;
  }
};

function enableClear() {
  clearGameButton.classList.remove('clear-button');
  clearGameButton.disabled = false;
};

function disableClear() {
  clearGameButton.classList.add('clear-button');
  clearGameButton.disabled = true;
};

function clearGuessFields() {
  for(var i = 0; i < inputGuessFieldsArr.length; i++) {
  inputGuessFieldsArr[i].value = '';
  }
  disableClear();
};

function enableReset() {
  resetGameButton.classList.remove('reset-button');
  resetGameButton.disabled = false;
};

function disableReset() {
  resetGameButton.classList.add('reset-button');
  resetGameButton.disabled = true;
};

function resetAndDisable() {
  for(var i = 0; i < inputNameAndGuessFieldsArr.length; i++) {
  inputNameAndGuessFieldsArr[i].value = '';
  }
  disableReset();
  disableClear();
  getRandomInt();
  console.log(randomNum);
};

function gameHint() {
  if (parseInt(guessOne.value) === randomNum) {
    highLowOne.innerText = 'BOOM!';
  } else if (parseInt(guessOne.value) > randomNum) {
    highLowOne.innerText = 'that\'s too high';
  } else if (parseInt(guessOne.value) < randomNum) {
    highLowOne.innerText = 'that\'s too low';
  } else {
    highLowOne.innerText = 'no guess submitted';
  }

  if (parseInt(guessTwo.value) === randomNum) {
    highLowTwo.innerText = 'BOOM!';
  } else if (parseInt(guessTwo.value) > randomNum) {
    highLowTwo.innerText = 'that\'s too high';
  } else if (parseInt(guessTwo.value) < randomNum) {
    highLowTwo.innerText = 'that\'s too low';
  } else {
    highLowTwo.innerText = 'no guess submitted';
  }
};

function errorCheckRange() {
  if (parseInt(minRangeValue.value) > parseInt(maxRangeValue.value)) {
    errorMin.hidden = false;
  }
  if (parseInt(minRangeValue.value) < parseInt(maxRangeValue.value)) {
    errorMin.hidden = true;
  }
};

function errorCheckGuessOne() {
  if (parseInt(guessOne.value) < parseInt(minRangeValue.value) ||
    parseInt(guessOne.value) > parseInt(maxRangeValue.value)) {
    errorG1.hidden = false;
  } else {
    errorG1.hidden = true;
  }
};

function errorCheckGuessTwo() {
  if (parseInt(guessTwo.value) < parseInt(minRangeValue.value) ||
    parseInt(guessTwo.value) > parseInt(maxRangeValue.value)) {
    errorG2.hidden = false;
  } else {
    errorG2.hidden = true;
  }
};
