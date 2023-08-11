let buttonAgain = document.getElementById('again-button');
let inputShowCorrectResult = document.getElementById('input-show');
let inputGuessNumber = document.getElementById('input-number');
let buttonCheck = document.getElementById('check-button');
let guessHighLow = document.getElementById('guess-high-low');
let userScore = document.getElementById('score');
let userHighScore = document.getElementById('high-score');
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let numberCondition = 'Start Guessing...';
let recordHighScore = '';
guessHighLow.textContent = numberCondition;
userHighScore.textContent = `High Score: ${recordHighScore}`;
userScore.textContent = `Score: ${score}`;
let historyHighScore = [];

function checkUserGuess() {
  if (inputGuessNumber.value == randomNumber) {
    guessHighLow.textContent = 'Guess correct';
    recordHighScore = score;
    historyHighScore.push(recordHighScore);
    userHighScore.textContent = `HighScore: ${Math.max(...historyHighScore)}`;
    userScore.textContent = `Score: ${score}`;
    inputShowCorrectResult.value = inputGuessNumber.value;
    inputShowCorrectResult.classList.remove('input-show-false');
    inputShowCorrectResult.classList.add('input-show-correct');
  } else if (!inputGuessNumber.value) {
    alert('no number');
  } else if (
    inputGuessNumber.value >= 0 &&
    inputGuessNumber.value <= 20 &&
    inputGuessNumber.value !== randomNumber &&
    inputGuessNumber.value > randomNumber
  ) {
    guessHighLow.textContent = 'Guess to high';
    inputShowCorrectResult.value = inputGuessNumber.value;
    inputShowCorrectResult.classList.add('input-show-false');
    score--;
    userScore.textContent = `Score: ${score}`;
  } else if (
    inputGuessNumber.value >= 0 &&
    inputGuessNumber.value <= 20 &&
    inputGuessNumber.value !== randomNumber &&
    inputGuessNumber.value < randomNumber
  ) {
    guessHighLow.textContent = 'Guess to low';
    inputShowCorrectResult.value = inputGuessNumber.value;
    inputShowCorrectResult.classList.add('input-show-false');
    score--;
    userScore.textContent = `Score: ${score}`;
  } else if (inputGuessNumber.value > 20) {
    guessHighLow.textContent = 'Guess has higher than 20';
    inputShowCorrectResult.value = inputGuessNumber.value;
    inputShowCorrectResult.classList.add('input-show-false');
    score--;
    userScore.textContent = `Score: ${score}`;
  } else if (inputGuessNumber.value < 0) {
    guessHighLow.textContent = 'Guess lower than 0';
    inputShowCorrectResult.value = inputGuessNumber.value;
    inputShowCorrectResult.classList.add('input-show-false');
    score--;
    userScore.textContent = `Score: ${score}`;
  }
  if (score == 0) {
    alert('You try many times');
    buttonCheck.disabled = true;
  }
}

function againUser() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  userScore.textContent = `Score: ${score}`;
}

buttonAgain.addEventListener('click', againUser);
buttonCheck.addEventListener('click', checkUserGuess);
