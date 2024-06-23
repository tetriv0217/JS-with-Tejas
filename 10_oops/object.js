function mulBy5(nums){
    return nums*5;
}

// mulBy5.power = 2
// console.log(mulBy5(2));
// console.log(mulBy5.power);
// console.log(mulBy5.prototype);


function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("Chai",20)
const tea = new createUser("Tea",150)
//new is very important
// Properties get injected(without new) but the instances doesn't know that additional propeties have been added thats why new is added
chai.printMe()
chai.increment()
chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/