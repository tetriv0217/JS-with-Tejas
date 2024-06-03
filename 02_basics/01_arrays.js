//array

/* 
Arrays create a shallow copy i.e A shallow copy of an object is a copy whose properties share the same references
Arrays are resizable
Arrays can contain different elements 
Arrays are zero indexed

*/
// const my = [1,122,2,3,4,true,"Tejas"]
const myHeros = ["Shaktimaan","naagraj"]

const myArr2 = new Array(0,1,2,3,4,5);
// console.log(myArr2[1]);

// Array methods
// myArr2.push(7);//adds at last
// myArr2.push(8);
// myArr2.pop();//removes from last

// myArr2.unshift(10)//adds at first not recommended
// myArr2.shift()//removes from first not recommended

// console.log(myArr2.includes(9));//return true if present, else false
// console.log(myArr2.indexOf(4));//return index if present, else -1


// let newArr = [1,2,3,4,5];
// newArr = myArr2.join();//first replaces the whole array and converts it into comma seperated string
// console.log(newArr);

//slice,spice
// Difference between splicen slice
/*
1.slice includes [i,j)
  splice includes [i,j]
2.slice does not change the array 
  splice takes out [i,j] from the original array
 */
console.log("A -> ",myArr2);
const myn1 = myArr2.slice(1,3);
console.log("slice -> ",myn1);
console.log("B -> ",myArr2);

console.log("C -> ",myArr2);
const myn2 = myArr2.splice(1,3);
console.log("splice :- ",myn2);
console.log("D -> ",myArr2);

