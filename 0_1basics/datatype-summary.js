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

// console.log(typeof myFunction);//function = Function object.
// console.log(typeof myObj)//object  = object
// console.log(typeof null)//null = object 
// console.log(typeof heros)//array = object
// console.log(typeof id1)//symbol = symbol


// -------------------------------------------------------------------------

// Stack(Primitive) :- We get copy of a variable
// Heap (Non-Primitive) :- We get reference and Not the copy

// Example of Stack
let a = "Tejas"
let b = a
b = "Archie"
console.log(a);//Tejas
console.log(b);//Archie
//In stack the value is not taken as reference but a copy so "b" changed value doesnt affect a

//Heap Example

let user1 = {
    email:"tetriv0217@gmail.com",
    age:22,
}
let user2 = user1;

user2.email = "21103250@mail.jiit.ac.in"

console.log(user1.email);//21103250@mail.jiit.ac.in
console.log(user2.email);//21103250@mail.jiit.ac.in

//Explanation :- //Here the value changes to newEmail,since it is in heap and the values in heap are taken as reference and not as a copy.



