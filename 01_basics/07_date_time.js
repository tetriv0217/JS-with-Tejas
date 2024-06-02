// Jan 1 1970

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);//object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("02-12-2023")//mmddyyyy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let myDay = new Date();
// console.log(myDay.getDay());
// console.log(myDay.getFullYear());
// console.log(myDay.getMonth());


console.log(myDay.toLocaleString('default',{
    weekday : "long"
}))