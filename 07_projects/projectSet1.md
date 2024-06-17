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
```
## Project 3 Solution
``` javascript
```
## Project 4 Solution
``` javascript
```