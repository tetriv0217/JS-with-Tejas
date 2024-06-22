// Object Literal
const User1 = {
    username:"tejas",
    loginCount : 8,
    signedIn : true,

    getDetails : function(){
        // console.log(`This is ${this.username}`);
        console.log(this);
    }
}

// console.log(User1["username"])
// console.log(User1.getDetails());

//Constructor function
function User(username,loginCount,signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    return this;
    // return this is implicit
}
//Use new keyword to create multiple instances or else userTwo will overide Userone
const userOne = new User("tejas",4,true)
const userTwo = new User("hitesh",17,false)
console.log(userOne);
console.log(userTwo);

//new
/**
 * new is used it creates a new instance
 * 
 */
