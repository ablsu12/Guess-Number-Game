let secretNumber;
let createSecretNumber = () => Math.floor(Math.random() * 20) + 1;
let setSecretNumber = () => (secretNumber = createSecretNumber());

function userGuessedNumberCondition(value) {
  if (!value) return 'Empty field';
  if (Number(value) > 20) return 'Grather than 20';
  if (Number(value) < 0) return 'Lower than 0';
  if (Number(value) > secretNumber) return 'Grather than answer';
  if (Number(value) < secretNumber) return 'Lower than answer';
}

document.addEventListener('DOMContentLoaded', () => setSecretNumber());
let userScore = document.getElementById('score');
let userHighScore = document.getElementById('high-score');
let guessedHighLow = document.getElementById('guess-high-low');
let checkButton = document.getElementById('check-button');
let userGuessNumberInput = document.getElementById('input-number');
let boxShowCondition = document.getElementById('box-show');
let score = 20;
let highScoreData = [];
checkButton.addEventListener('click', e => {
  e.preventDefault();
  if (score > 0) {
    if (secretNumber === Number(userGuessNumberInput.value)) {
      userScore.textContent = score;
      guessedHighLow.textContent = 'Your guess correct 😍';
      boxShowCondition.textContent = secretNumber;
      highScoreData = [...highScoreData, score];
      userHighScore.textContent = `${Math.max(...highScoreData)}`;
      checkButton.disabled = true;
      boxShowCondition.classList.remove('input-value-show-false');
      boxShowCondition.classList.add('input-value-show-correct');
      console.log(highScoreData);
    } else {
      --score;
      userScore.textContent = score;
      guessedHighLow.textContent = userGuessedNumberCondition(
        userGuessNumberInput.value,
      );
      boxShowCondition.textContent = userGuessNumberInput.value;
      boxShowCondition.classList.add('input-value-show-false');
    }
  } else guessedHighLow.textContent = 'You tried too hard';
});

let againButton = document.getElementById('again-button');
againButton.addEventListener('click', () => {
  setSecretNumber();
  boxShowCondition.textContent = '';
  boxShowCondition.classList.remove(
    'input-value-show-correct',
    'input-value-show-false',
  );
  checkButton.disabled = false;
  userGuessNumberInput.value = 0;
  score = 20;
  userScore.textContent = score;
});
