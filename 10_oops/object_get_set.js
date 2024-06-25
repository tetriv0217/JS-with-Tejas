const User = {
    _email : 'ritehs@js.com',
    _password : 'vbn',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User);
console.log(tea.email);