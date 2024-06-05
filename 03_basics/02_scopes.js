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

if(true){
    let a = 100;
    console.log("Inner A :- ", a);
}
let a = 20;
console.log("Outer A :- ", a);