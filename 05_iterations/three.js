//for of
// ["","",""]
// [{},{},{}]

//for of loop on array

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

//for of loop on strings
// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each character is ${greet}`);
// }

//Maps :- Stores unique values and stores in order

const map = new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map);
//for or loop on map
// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }


//forof loop on objects :- Gives error, Objects are not iteratable.Use of other methods
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game3' : 'GTA',
}
// for (const iterator of myObject) {
//     console.log(iterator);//error
// }
// for (const [key, value] of myObject) {
//     console.log(`${key} :- ${value}`);//this will also give error
// }


