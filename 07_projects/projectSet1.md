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
```