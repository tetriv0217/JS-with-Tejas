const name = "Tejas";
const repoCount = 50;

// console.log(name + ", My repo count is " + repoCount);
// Not an ideal way

console.log(`My name is ${name} and my repo count is ${repoCount}`);
// This is known as string interpolation

// Another way of assigning strings

const getName = new String('TejasTrivedi')
// console.log(getName[0]);//T
// console.log(getName.__proto__);//{}

// console.log(getName.length)//12
// console.log(getName.toUpperCase());

// console.log(getName.charAt(100));//""
// console.log(getName.charAt(2));//"j"
//if out of bounds no value, if present will print

// console.log(getName.indexOf('t'));//-1
// console.log(getName.indexOf('j'));//2
// if present :- value of index ,if not present output = -1

//substring can work can be used to divide string,a.substring(0,4):- is [0,4)
// let a = getName.substring(0,4);
// console.log(a);//Teja ,not tejas

// let b = getName.slice(-12,4);
// console.log(b);// same as substring can take negative value as well

//Trim :- remove whitespaces

// let a = "   Tejas  a";
// console.log(a);
// console.log(a.trim());

// Replace:- replace('want to','which is replaced');

// const url = "https://google.com/tejas%20trivedi";
// console.log(url);
// console.log(url.replace('%20','-'));

let str = "tejas-trivedi-10"
console.log(str.split('-'));
// Here it returns an array.