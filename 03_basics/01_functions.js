function sayMyname() {
    console.log("T");
    console.log("E");
    console.log("J");
    console.log("A");
    console.log("S");
}
// sayMyname //reference
// sayMyname() // execution

function addTwoNumbers(number1,number2) {//number1 and number2 are parameters
    console.log(number1 + number2);
}
// addTwoNumbers()//Nan
// addTwoNumbers(3,4)//7
// addTwoNumbers(3,"4")//34 -> string
// addTwoNumbers("4",3)//43 -> string
// addTwoNumbers(4,"a")//4a -> string
// addTwoNumbers(4,undefined)//NaN
// addTwoNumbers(4,null)//4 -> Number (4,null) are arguments

// const ans = addTwoNumbers(4,5);//since the answer were printed in console log
// console.log("Result : ", ans );// Result :  undefined

function addTwoNumbers(number1,number2) {//number1 and number2 are parameters
    return number1 + number2;
}
// const ans = addTwoNumbers(4,5);
// console.log("Result : ", ans );// Result :  9


function logginUserMessage(username) {
    // if(username === undefined){
    if(!username){
        console.log("Enter your name!");
        return
    }
    return `${username} just logged in`;
}
logginUserMessage("Tejas")// will not run
// console.log(logginUserMessage("Tejas"));
// console.log(logginUserMessage());//output :- undefined just logged in (if not handeled)



// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200,400,500));// will print only 200

// Rest opertator :- for functions
// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200));//will print return [200]
// console.log(calculateCartPrice(200,400,500));// will print return [200,400,500]

//Another example
// function calculateCartPrice(val1,val2,...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200));//will print return []
// console.log(calculateCartPrice(200,400,500));// will print return [500]
// val1 = 200,val2 = 400, num1 will become array



// using objects in functions

const myuser = {
    name : "Tejas",
    email : "tejas@mail.com"
}
function handleObjects(anyObject) {
    return `Your name is ${anyObject.name} and your email is ${anyObject.email}`;
}
console.log(handleObjects(myuser));

console.log(handleObjects({
    name : "Archie",
    email : "archie@mail.com"
}));
