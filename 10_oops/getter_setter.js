class User  {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return `Your email ${this._email}`
    }
    set email(value){
        this._email = value;
    }
    get password(){
        // return this.password.toUpperCase();
        return this._password.toUpperCase();
    }
    set password(value){
        // this.password = value//this will give error of stack memory exceeded
        this._password = value//change the value and it sets the value to password
    }
    // We dont return in setters
    // We have to return in getters
}
const hitesh = new User("hitesh.ai","abc")
console.log(hitesh.password);
console.log(hitesh.email);