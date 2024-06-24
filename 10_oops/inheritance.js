class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is : ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course is added by: ${this.username}`);
    }
}

const chai = new Teacher("tejas",'asdasd',545689)
console.log(chai.addCourse());

console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);//true
