# Projects on Async

## Projects link

[https://stackblitz.com/edit/dom-project-chaiaurcode-tieeuk](https://stackblitz.com/edit/dom-project-chaiaurcode-tieeuk)

## Project 1(Unlimited Colours) Solution

```javascript
// document.body.style.background = "rgb(45,15,256)"
const changeBgColor = function () {
  let randomRed = parseInt(Math.random() * 256);
  let randomGreen = parseInt(Math.random() * 256);
  let randomBlue = parseInt(Math.random() * 256);
  console.log(`rgb(${randomRed},${randomGreen},${randomBlue})`);
  document.body.style.background = `rgb(${randomRed},${randomGreen},${randomBlue})`;
  p.style.background = `rgb(${randomGreen},${randomBlue},${randomRed})`;
};

let changeBg = null;
let p = document.createElement("p");
let stop = document.body;
document.querySelector("#start").addEventListener("click", () => {
  if (!changeBg) {
    changeBg = setInterval(changeBgColor, 1000);
  }
  p.innerText = `Colour is changing,to stop :- press stop`;
  p.style.color = "rgb(15,20,15)";
  p.style.fontSize = "20px";
  p.style.fontWeight = "700";
  p.style.backgroundColor = "green";
  p.style.border = "4px solid black";
  if (!stop.contains(p)) {
    stop.append(p);
  }
});
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(changeBg);
  changeBg = null;
  p.innerText = "Press start to again start color change";
});
```

## Project 2(KeyBoard) Solution
``` javascript
console.log('Project 5');
const key = document.querySelector('.key');
window.addEventListener('keydown', (e) => {
  key.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `;
});

```