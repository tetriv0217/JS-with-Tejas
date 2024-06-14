//for

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// double for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for(let j = 1;j<= 10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// for loop in array
// let myArray = ["Flash","Batman","Superman"];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//break and continue

// for (let index = 1; index <= 20; index++) {
//     // const element = [index];
//     if(index == 5){
//         console.log("detected 5");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }
//continue
for (let index = 1; index <= 20; index++) {
    // const element = [index];
    if(index == 5){
        console.log("detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
}