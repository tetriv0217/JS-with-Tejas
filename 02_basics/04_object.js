// Singleton, constructor based objects

const tinderUser = new Object();
// console.log(tinderUser);

tinderUser.id = "tejas123"
tinderUser.name = "Tejas"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "tejas",
            lastname : "trivedi"
        }
    }
}
// console.log(regularUser.fullname.userfullname)

const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "a",4 : "b"}
const obj3 = {4 : "a",5 : "b"}

// const obj3 = { obj1 , obj2 };//same problem as array
// const obj4 = Object.assign({},obj1,obj2,obj3)//while the {} will altered 
// const obj4 = Object.assign(obj1,obj2,obj3)//here obj 1 will be altered as well

//Best method
// const obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4);

//How values we recieve through databases
const users = [
    {
        id : 1,
        email : "tejas@mail.com"
    },
    {
        id : 2,
        email : "te@mail.com"
    },
    {
        id : 3,
        email : "jas@mail.com"
    }
]
// console.log(users[2].email);

// console.log(Object.keys(tinderUser));//these array datatypes 
// //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));
// //[ 'tejas123', 'Tejas', false ]
// console.log(Object.entries(tinderUser));//this convert single key,value pair into individual array pairs
// // [ [ 'id', 'tejas123' ], [ 'name', 'Tejas' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//for knowing if the property is there or not in the object
// console.log(tinderUser.hasOwnProperty('isLogged'));

// destructuring
const  course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "tejas"
}

const {courseInstructor : instructor} = course;

console.log(instructor);


// json on objects eg

// {
    //     "name" : "Tejas",
    //     "courseName" : "tejas js",
    //     "price" : "free"
    // }
    
    
// json on arrays eg
[
    {},
    {},
    {}
]