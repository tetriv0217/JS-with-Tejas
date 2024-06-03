const marvelHeros = ["Thor","Ironman","Spiderman"]
const dcHeros = ["Superman","Flash","Batman"]

// .push variances in array
//this method doesn't returns the array and changes it immediately
// marvelHeros.push(dcHeros);

// console.log(marvelHeros);//thor,ironman,spiderman,["Superman","Flash","Batman"]
//Basically 3string,1array
// console.log(marvelHeros[3][1]);//from 3rd index it became 2d

//concat returns an array,thats why you need to store it in another variable or same.
// let allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);


//Spread operator 
// let allHeros = [...marvelHeros, ...dcHeros];
// console.log(allHeros);[all values will be printed]


// let nestedArr = [1,2,3,4,[5,6,7,8],[9,10,[11,12],13,14],15];
// // let flatArr = nestedArr.flat(Infinity);//this will make whole array infinity
// let flatArr = nestedArr.flat(1 );//this will make whole array infinity
// console.log(flatArr)//Here infinity will make it 1D array.But you can give different depth.


console.log(Array.isArray("Tejas"));//tells if it is an array
console.log(Array.from("Tejas"));//converts the strings to array.
//For Interviews
console.log(Array.from({name: "Tejas"}));// return [] as it is not able to convert on which basis should it convert.

// Should use keys in order to convert it into array with an output

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3));//[100,200,300]

