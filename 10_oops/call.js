function setUsername(username){
    console.log("called");
    this.username = username;
}

function createUser(username,email,password){
    // setUsername(username)//this is getting called but since it's in the top of the execution stack and gets removed and thus its variable also disaapear.
    setUsername.call(this, username)
    //call passes the current execution context to others.
    //Call takes the reference and then the added this makes sure that it holds the values of the contents that the above function is leaving
    this.email = email;
    this.password = password;
}
const chai = new createUser("chai","chai@google.com","123")
console.log(chai);