# Projects on DOM manipulation

## Projects link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-tieeuk?file=1-colorChanger%2Fchaiaurcode.js)

## Project 1 Solution
```javascript
const buttons = document.querySelectorAll('.button');
const getBody = document.querySelector('body');
console.log(buttons);

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'yellow':
        getBody.style.backgroundColor = e.target.id;
        break;
      case 'grey':
        getBody.style.backgroundColor = e.target.id;
        break;
      case 'white':
        getBody.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        getBody.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }
  });
});

```
## Project 2 Solution
``` javascript
const form = document.querySelector('form');

//Dont write it outside event listener
// const getWeight = parseInt(document.querySelector('#weight').value)
// const getHeight = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault(); //dont submit right away
  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid  height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const res = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is ${res}`;
    const div = document.createElement('div');
    if (res < 18.6) {
      div.innerText = 'You are underweight';
    } else if (res >= 18.6 && res <= 24.9) {
      div.innerText = 'You are in Normal Range';
    } else {
      div.innerText = 'You are overweight';
    }
    results.appendChild(div);
  }
});

```
## Project 3 Solution
``` javascript
const clock = document.querySelector('#clock')

let date = new Date()
console.log(date.toLocaleDateString())

//setInterval is used for continuous of code

setInterval(()=>{
  let date = new Date()
  // console.log(date.toLocaleDateString())
  clock.style.fontSize = '20px'
  clock.innerHTML = `Time is ${date.toLocaleTimeString()}`
},1000)

```
## Project 4 Solution
``` javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField'); //what is user entering
const guessSlot = document.querySelector('.guesses'); //previous guess
const remaining = document.querySelector('.lastResult'); //guess remaining
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseFloat(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess === '' || isNaN(guess)) {
    alert('Please Enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Enter a number between 1 to 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      remaining.innerHTML = `None!!`;
      displayMessage(
        `Game Over. The Random number was ${randomNumber}.Better luck next time.`
      );
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right!!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('The number is too low !!');
  } else {
    displayMessage('The number is too high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game </h2>`;
  p.style.cursor = 'pointer';
  p.style.backgroundColor = 'black';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 0;
    prevGuess = [];
    guessSlot.innerHTML = '';
    remaining.innerHTML = 10;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```