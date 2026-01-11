// syncronous function

// console.log("start");
// function sync(name){
//     while(true);
//     console.log(name);
// }
// console.log("processing .......");
// console.log("end");
// sync("shahzeb")

// // asyncronous function
// console.log("start");
// setTimeout(() => {
//     console.log("Asyncronous function")
// }, 2000);
// console.log("End");

// await keyword
// let h2 = document.querySelector("h2")
// function colorChange(color,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         h2.style.color = color;
//         resolve();
//     }, delay);
//     })
    
// }

// async function show() {
//     await  colorChange("red",2000);
//     await colorChange("blue",1000);
//     await colorChange("green",1000)

// }
// show()

// // withut and with await
// function data(){
//     return new Promise(resolve=> {
//         setTimeout(() => {
//             resolve("Data recieved");
//         }, 2000);
//     })
// }

// console.log(data());

// async function showData() {
//     let result = await data();
//     console.log(result)
// }

// showData();

// handling rejection with await
//  function colorChange(color, delay){
//     return new Promise((resolve, reject) => {
//         if(!h2){
//             reject("h2 not found");
//         }
//         setTimeout(() => {
//             h2.style.color = color
//             resolve();
//         }, delay);
//     })
//  }

//  async function passColor() {
//     try {
//         await colorChange("purple",1000);
//         await colorChange("blue",1000);
//         await colorChange("reg",1000);
//         await colorChange("volvet",1000);
//         await colorChange("pink",1000);

//     } catch (error) {
//         console.log("error occured on the above code");
//         console.log(error);
//     }
    
//  }
//  passColor();

//  API'S handling
// let list = document.querySelector(".list");
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response => response.json()))
// .then((data)=>{
// const user = data[0];
// console.log(` name :${user.name}`);
// console.log(`Email: ${user.email}`);
// console.log(`Phone${user.phone}`);
// console.log(`Address: ${user.address.city}`);
// console.log(`company:${user.company.name}`);
// console.log(user);
// })
// .catch((error)=>{
//     console.log(error)
// })

// // accessing data from json
// let jsonString = `[{
//   "id": 1,
//   "name": "Shah Zeb",
//   "email": "shahzeb@example.com",
//   "phone": "123-456-7890",
//   "address": {
//     "street": "Kulas Light",
//     "city": "Gwenborough",
//     "zipcode": "12345"
//   },
//   "skills": ["HTML", "CSS", "JavaScript"]
// }]`;

// console.log(jsonString);
// let users = JSON.parse(jsonString);
// users.forEach(user => {
//     console.log(user.name, " ", user.email);
    
// });

// //postman
// let joke = document.querySelector(".joke");
// fetch("https://icanhazdadjoke.com/",{
//     headers:{
//         Accept : "application/json"
//     }
// })
// .then((response => response.json()))
// .then((data)=>{
//     let result = data.joke;
//     joke.append(result)
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })
// let url = "https://jsonplaceholder.typicode.com/todos"
// fetch(url)
// .then((res => res.json()))
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(`error has been occured ${error}`)
// })

// //another api adding information to url
// let URL = "https://fakestoreapi.com/products?category=electronics&price&description"
// fetch(URL)
// .then((res => res.json()))
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(`error has been occured ${error}`)
// })

// let url2 = "https://httpbin.org/post";
// fetch(url2,{
//     method: "POST",
//     headers:{
//         "content-type" : "application/json"
//     },
//     body: JSON.stringify({
//         username: "shahzebkhan",
//         password: "khan112233"
//     })
    
// })
// .then(res => res.json())
// .then((data) =>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("Erro occured");
//     console.log(error);
// })

// // using async await with api
// function catFact(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("task done successfully");
//         }, 2000);
//     })
// }

// let fact = "https://catfact.ninja/fact";
// async function showFun() {
//     try{
//        let res = await catFact();
//        console.log(res);

//        let data = await fetch(fact,{
//         headers:{
//             Accept:"application/json"
//         }
//        });
//        let res2 = await data.json();
//        console.log(res2.fact);
//     }
//     catch(error){
//         console.log("Errror occurred")
//         console.log(error)
//     }
// }
// showFun();

// practice question

function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from async world!");
    }, 1500);
  });
}

async function showPromise() {
    let response = await getMessage();
    console.log(response)
}
showPromise()

function getUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let islogIn = true;
            if(islogIn == true){
                resolve("congrate you password is correct");
            }else{
                reject("your password is not matching");
            }
        }, 1000);
    })
}

async function showUserData() {
    try{
        let response = await getUserData();
        console.log(response);
    }
    catch(error){
        console.log("you have an internet problem",error);
    }
}
showUserData()

// task no 4
const jsonData = `{
  "name": "Shahzeb",
  "role": "Frontend Developer",
  "skills": ["HTML", "CSS", "JavaScript", "React"]
}`;

console.log(jsonData);
let data = JSON.parse(jsonData);
console.log(data)
console.log(data.name, " ", data.role);
data.skills.forEach(skill => {
    console.log(skill)
});

// task no 5
let url = "https://api.agify.io?name=shahzeb"
async function getData() {
try
 {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)

}
catch(error){
    console.log(error)
}
}
getData()
// task no 6
// post method is using for to send data to database
// get method is using for to read data from database
// delete methd is using for to delete data from databse
// put method is uding for to update data in database

// task no 7
let URL = "https://catfact.ninja/fact";
function catShow(){
    try{
    fetch(URL,{
        headers:{
            Accept: "application/json"
        }
    })
    }
    catch(eror){
        console.log(eror);
    }
}
catShow()

// task no 7
let factURL = "https://catfact.ninja/fact";
async function catFact() {
    try{
        let data = await fetch(factURL);
        
        let res = await data.json();
        console.log(res.fact)

    }catch(Error){
        console.log("Error occurred");
        console.log(Error);
    }
}
catFact();

// task no 10
let button = document.querySelector("#clickBtn");
let display = document.querySelector(".display");
button.addEventListener("click", function(e){

    async function catFact() {
        display.innerText = "Loading.....";
        try{
            let url = "https://catfact.ninja/fact";
            let response = await fetch(url);
            let data = await response.json();
            display.innerText = data.fact
        }
        catch(error){
            console.log(error);
        }
    }
    catFact();
})
