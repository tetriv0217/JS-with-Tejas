// const userEmail = "Tejas@mail.in";//true
// const userEmail = "";//false
// const userEmail = [];//true
// const userEmail = null;//false
// // const userEmail = undefined;//false
// if (userEmail) {
//     console.log("Got email");
// } else{
//     console.log("Dont have user email");
// }

/*
Falsy values :-
0, -0, BigInt 0n, "", null, undefined, NaN

Truthy values:-
"0",'false'," ", [], {}, function(){}
 */

//how to check array empty
// const empArr = [];
// if(empArr.length == 0){
//     console.log("array is empty");
// }

// How to check object empty
const empObj = {};
if(Object.keys(empObj).length === 0){
    console.log("Object empty");
}else{
    console.log(Object.keys(empObj));
}
/**
 false == 0 , false == '',0 == '' --> these comparisions are true
 */


//Nullish Coalescing Operator (??) :- works on null and undefined

// let val1 = 5 ?? 10;//here first valid value
// val1 = null ?? 10;//here 10
// // val1 = undefined ?? 5; //here 5
// // val1 = null ?? 5 ?? 10;//here also 5

// console.log(val1);

// Terniary Operator
// condition ? true:false
let price = 100;
(price > 50) ? console.log("Price greater than 50") : console.log("Price less than 50");