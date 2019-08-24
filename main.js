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
