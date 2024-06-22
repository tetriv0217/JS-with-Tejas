//Promise is an object
//They are created or they are consumed

// then->catch->finally

//To store in a variable
const promiseOne = new Promise(function (resolve, reject) {
  // Do async task
  // Dbcalls,cryptograpghy,network
  setTimeout(function () {
    console.log(`Async Task1 is complete`);
    resolve(); //This is used in order to connect to then
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise1 consumed");
});

//to use promises directly

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`Async task 2`);
    resolve();
  }, 1000);
}).then(function () {
  console.log(`Promise2 consumed`);
});

//Promise Three
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`Async task 3`);
    resolve({ username: "Tejas", email: "tejastrivedi@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(`Promise 3 consumed with parameter`);
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "tejas", password: "123" });
    } else {
      reject("ERROR something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    //This then will catch the username returned above.
    console.log(username);
  })
  .catch(function (error) {
    //This will give what is the error
    console.log(error);
  })
  .finally(()=>{
    console.log("Promise is finally resolved");
  });

//Using async and await
const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
          resolve({ username: "javascript", password: "123" });
        } else {
          reject("ERROR: JS went wrong");
        }
      }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;//we use await since it take time
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}
consumePromiseFive()


// async function fetchUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/tetriv0217')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// fetchUsers()

// same code for above function

fetch('https://api.github.com/users/tetriv0217')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E: ",error);
})
.finally(()=>{
    console.log("Finnally done");
})

//Fetch returns a promis