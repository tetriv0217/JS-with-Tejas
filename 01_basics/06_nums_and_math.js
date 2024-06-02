const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 1123.12;
// console.log(otherNum.toPrecision(3));//1.12e3
// console.log(otherNum.toPrecision(4));//1123
// console.log(otherNum.toPrecision(5));//1123.1
// console.log(otherNum.toPrecision(6));//1123.12

const lakh10 = 1000000;
// console.log(lakh10.toLocaleString());//1,000,000
// console.log(lakh10.toLocaleString('en-IN'));//10,00,000

// -------------------------Math------------------

// console.log(Math);
// console.log(Math);
// console.log(Math);
// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.4))//4
// console.log(Math.ceil(4.4))//5
// console.log(Math.floor(4.4))//4


// console.log(Math.min(2,4,5,6,7,10));
// console.log(Math.max(2,4,5,6,7,10));

// console.log(Math.random());//value between 0-9.9999
// console.log((Math.random()*10)+1);// value between 1-10
// console.log((Math.floor(Math.random()*10))+1);// value between 1-10 without decimal

const min = 10;
const max = 20;
console.log((Math.floor(Math.random()*(max-min+1))) + min);// value between min-max without decimal

