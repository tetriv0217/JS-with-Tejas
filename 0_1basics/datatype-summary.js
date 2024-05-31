/* 
JS is dynamically typed language.
Here the datatype of variable is defined at runtime.

Primitive :-
7 types:-
    String , Number, Boolean, null, undefined, Symbol, BigInt

*/
// Eg of symbol
const id1 = Symbol('123')
const id2 = Symbol('123')
// console.log(id1 === id2); // False
// Eg of Bigint

const bigNumber = 12345679946455464654564455546645n;
// console.log(typeof bigNumber);
/*
Reference(Non Primitive)
Array,Object,Function

*/
// array eg
const heros = ["big boy","Tejas","doga"]
let myObj = {
    name : "tejas",
    age : 22,
}

const myFunction = function (){
    console.log("Hello World")
}

console.log(typeof myFunction);//function = Function object.
console.log(typeof myObj)//object  = object
console.log(typeof null)//null = object 
console.log(typeof heros)//array = object
console.log(typeof id1)//symbol = symbol

