const user = {
    username : "Tejas",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);//Will print the whole object
    }
}
/*
this :- refers to current context
*/
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()



// console.log(this);//{}

// But on browser console the output is Window

//Method 1 
// function chai() {
//     let username = "tejas"
//     // console.log(this);//Will print a lot of values
//     console.log(this.username);//undefined
//     //we are not able to use this in functions
// }
// chai()

//Method 2
// const chai = function() {
//     let username = "tejas"
//     // console.log(this);//Will print a lot of values
//     console.log(this.username);//undefined
//     //we are not able to use this in functions
// }
// chai()

//Method 3 => arrow functions
const chai = () => {
    let username = "tejas"
    console.log(this);//{}
    // console.log(this.username);//undefined
    //we are not able to use this in functions
}
// chai()

// Explicit return
// const addTwo = (num1,num2)=>{
//     return num1 + num2;
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2;//no need of return
// const addTwo = (num1, num2) => (num1 + num2);//no need of return
// console.log(addTwo(3,4));

// why parenthesis required :- to return objects
const returnObject = () => ({username : "yejas"});//no need of return
console.log(returnObject());








