// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   capitalUser() {
//     return this.username.toUpperCase();
//   }
// }

// const chai = new User("tejas", "tejas123@mail.com", "1234567890");
// console.log(chai.encryptPassword());
// console.log(chai.capitalUser());

//behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;


}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.capitalUser = function(){
    return this.username.toUpperCase();
}

const tea = new User("Tejas",'asdassd@asdasd',987656789);
console.log(tea.encryptPassword()); 
console.log(tea.capitalUser()); 