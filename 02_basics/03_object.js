//objects
// Two ways to define objects :- Literals,constructors
//singleton :- constructors, not literals
// eg : - Object.create()


//How to use symbol in objects

const mySym = Symbol("key1");

//object literals
const jsUser = {
    name : "Tejas",//key,value and name is stored as string [Key value pair]
    "full name" : "Tejas Trivedi",//cant access this using '.'
    // mySym : "myKey1",//mySym is string and not a symbol
    [mySym] : "myKey1",
    // [s] : "myKey2",//cant do this 
    age : 20,
    location : "Lucknow",
    email : "tetriv0217@gmail.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday" , "Saturday"]
}
// console.log(jsUser.email);//not good way access objects
// console.log(jsUser["email"]);// good way access objects
// console.log(jsUser["full name"]);// full name can be accessed only like this
// // console.log(jsUser.full name);// Error since cant be accessed as .
// console.log(jsUser["mySym"]);//cant use like this the syntax is given below
// console.log(jsUser[mySym]);

// jsUser.email = "Tejas@gmail.com";//without freezing can change
// Object.freeze(jsUser)//So that no one can make cahnges
// jsUser.email = "lol";// this will not show error but changes cant be made
// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello js user");
}
jsUser.greetingTwo = function() {
    console.log(`Hello jsUser name:- ${this.name}`);
}
// console.log(jsUser.greeting);//undefined
// console.log(jsUser);//will print all values in jsUser

console.log(jsUser.greeting());//will print the function
console.log(jsUser.greetingTwo());//will print the function
