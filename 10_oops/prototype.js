let myName = "tejas     "

// create a your own prototype function that trims and get the length
// console.log(myName.trueLength)//make mehtod

let myHeros = ['thor','spiderman']
let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpidyPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.tejas = function(){
    console.log(`Tejas is given to all objects`);
}

//When you give object a function then all other things also gets this function embedded in their prototype
myHeros.tejas()
heroPower.tejas()

Array.prototype.heyTejas = function(){
    console.log(`Tejas is given to all Arrays`);
}

myHeros.heyTejas()
// this will give as Array is child to object.and inheritance doesnt take place
// heroPower.heyTejas()

//Inheritance

const User = {
    username : "Tejas",
    email : "tejas@gmail.com",
}

//__proto__ makes sure that you can use properties of User as well now
const Hobbies = {
    sport : "football",
    education : "coding",
    // __proto__ : User,
}
const support = {
    mom : 'lol',
    dad : 'lol2'
}

support.__proto__ = User
console.log(support.email)//Now you can see it got inherited

// Modern syntax

Object.setPrototypeOf(Hobbies,User)//(lower class that inherits,higher class that get it's properties inherited)
console.log(Hobbies.username)//Now you can see it got inherited

//Now the assignment

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.trim().length}`);
}

const anotherName = "jessy   "
"Tejas      ".trueLength()
anotherName.trueLength()