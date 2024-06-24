class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static createId(){
        console.log('123')
    }
}

const chai = new User('Tejas')
chai.logMe()
// console.createId()//this will give error as it is static
User.createId()//this will work