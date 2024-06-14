const arr = ["js", "ruby", "python", "cpp"];

// arr.forEach(function (item) {
//   console.log(item);
// });

// arr.forEach((item) =>{
//   console.log(item);
// });

//syntax nameOfArray.forEach(callback function)
//callback function can be anonymus,array,normal function(only reference [no "()"])

//using normal function
// function printMe(key){
//     console.log(key);
// }
// arr.forEach(printMe)

// arr.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// });
//first value: value,second index,third array

//Array having objects 
const coding =[
    {
        languageName : "javascript",
        extension : "js",
    },
    {
        languageName : "C++",
        extension : "cpp",
    },
    {
        languageName : "python",
        extension : "py",
    },
]

coding.forEach((item)=>{
    console.log(`${item.languageName} and it's extension .${item.extension}`);
})