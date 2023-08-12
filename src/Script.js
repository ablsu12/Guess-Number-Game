let buttonAgain = document.getElementById('again-button');
let inputShowResult = document.getElementById('input-show');
let inputGuessNumber = document.getElementById('input-number');
let buttonCheck = document.getElementById('check-button');
let highOrLowText = document.getElementById('guess-high-low');
let userScore = document.getElementById('score');
let userHighScore = document.getElementById('high-score');
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let numberCondition = 'Start Guessing...';
let recordHighScore = '';
highOrLowText.textContent = numberCondition;
userHighScore.textContent = `High Score: ${recordHighScore}`;
userScore.textContent = score;
let historyHighScore = [];

function checkUserGuess() {
  if (inputGuessNumber.value == secretNumber) {
    highOrLowText.textContent = 'Guess correct';
    recordHighScore = score;
    historyHighScore.push(recordHighScore);
    userHighScore.textContent = `HighScore: ${Math.max(...historyHighScore)}`;
    userScore.textContent = score;
    inputShowResult.value = inputGuessNumber.value;
    inputShowResult.classList.remove('input-show-false');
    inputShowResult.classList.add('input-show-correct');
  } else if (!inputGuessNumber.value) {
    alert('no number');
  } else if (
    inputGuessNumber.value >= 0 &&
    inputGuessNumber.value <= 20 &&
    inputGuessNumber.value !== secretNumber &&
    inputGuessNumber.value > secretNumber
  ) {
    highOrLowText.textContent = 'Guess to high';
    inputShowResult.value = inputGuessNumber.value;
    inputShowResult.classList.add('input-show-false');
    score--;
    userScore.textContent = score;
  } else if (
    inputGuessNumber.value >= 0 &&
    inputGuessNumber.value <= 20 &&
    inputGuessNumber.value !== secretNumber &&
    inputGuessNumber.value < secretNumber
  ) {
    highOrLowText.textContent = 'Guess to low';
    inputShowResult.value = inputGuessNumber.value;
    inputShowResult.classList.add('input-show-false');
    score--;
    userScore.textContent = `${score}`;
  } else if (inputGuessNumber.value > 20) {
    highOrLowText.textContent = 'Guess has higher than 20';
    inputShowResult.value = inputGuessNumber.value;
    inputShowResult.classList.add('input-show-false');
    score--;
    userScore.textContent = `${score}`;
  } else if (inputGuessNumber.value < 0) {
    highOrLowText.textContent = 'Guess lower than 0';
    inputShowResult.value = inputGuessNumber.value;
    inputShowResult.classList.add('input-show-false');
    score--;
    userScore.textContent = score;
  }
  if (score == 0) {
    alert('You try many times');
    buttonCheck.disabled = true;
  }
}

function againUser() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  userScore.textContent = score;
  inputGuessNumber.value = 0;
  inputShowResult.value = null;
  inputShowResult.classList.remove('input-show-false');
  inputShowResult.classList.remove('input-show-correct');
}

buttonAgain.addEventListener('click', againUser);
buttonCheck.addEventListener('click', checkUserGuess);
