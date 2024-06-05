//This is global scope
// let a = 10;
// const b = 20;
// var c = 30;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    //This is blocked scope
}

// console.log(a);//Error
// console.log(b);//Error
// console.log(c);//30

// if(true){
//     let a = 100;
//     console.log("Inner A :- ", a);
// }
// let a = 20;
// console.log("Outer A :- ", a);


function one(){
    const username = "Tejas";
    console.log(username);
    function two() {
        const website = "youtube";
        console.log(username);//it can inherit from its parent function
    }
    two()
    console.log(website);//This will show error as website is blocked scope
}
// one();//Tejas Tejas Error

if(true){
    const username = "hitesh";
    if (true) {
        const website = " youtube";
        // console.log(username + website);//will print hitehs youtube
    }
    // console.log(website);//will show error
}
// console.log(username);//will show error


//Hoisting 

console.log(addone(5)); //will find addone function and result the desired output
function addone(num) {
    return num + 1;
}

addtwo(5) // This will show error as it is a variable and not able to intialise
const addtwo = function(num) {
    return num + 2;
}