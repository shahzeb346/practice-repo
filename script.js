// operator
function Sum(a,b){
  let c = a+b;
  console.log(c)

}
Sum(10,20);
function Sub(a,b){
  let c = a-b;
  console.log(c)

}
Sub(20,10);
function Mul(a,b){
  let c = a*b;
  console.log(c)

}
Mul(10,20);
function Divi(a,b){
  let c = a/b;
  console.log(c)

}
Divi(20,3);
function Modulas(a,b){
  let c = a%b;
  console.log(c)

}
Modulas(20,3);

// Assignment operator
function Add(){
  let age = 20;
    age += 3;
  console.log(age);
}
Add();

function Sub(){
  let age = 20;
    age -= 3;
  console.log(age);
}
Sub();

function Mul(){
  let age = 20;
    age *= 3;
  console.log(age);
}
Mul();
function Modulo(){
  let age = 20;
    age %= 3;
  console.log(age);
}
Modulo();

function Divi(){
  let age = 20;
    age /= 3;
  console.log(age);
}
Divi();

// Unary operator

let num = 80
let newNum = num++;
console.log(num)

let num2 = 80
let newNum2 = ++num2;
console.log(newNum)

// String in javascript
let str = "hello world";
console.log(str);
console.log(str.charAt(6));

let str2 = "i am shahzeb";
let str3= str + " " +str2;
console.log(str3);


// day 2 
template literals
let a = 20;
let b= 10;
let x = a + b;
console.log(`this is the addition of ${a} and ${b} result is = ${x}`)

// ARITHMETIC OPERTOr
let y = 10;
let z = 5;
console.log(`y+z = ${y+z}`)
//Subtraction
console.log(`y-z = ${y-z}`);
// multiplication
console.log(`y*z = ${y*z}`)
// division
console.log(`y/z = ${y/z}`)
// Modulas
console.log(`y%z = ${y%z}`)
// exponent
console.log(`y**z = ${y**z}`);

// Assignment operator
let x = 15;
let y = 5;
x +=y;
console.log(x)
x -= y;
console.log(x);
x *= y;
console.log(x);
y /= x;
console.log(y)
x **= y;
console.log(x);
// comparison operator
let a = x>y;
console.log(a);
console.log(x <y)
console.log(x == y);
console.log(x != y);
console.log(x >= y);
console.log(x <= y);

// Logical operator
let age = 17;
let gender = "male";
console.log(age >= 18 && gender == "male");
console.log(age >= 18 || gender == "male");

// conditional statement if else etc
let marks =120 ;
if(marks >= 80 && marks<= 100){
    console.log("congratulation! You are in merit");

}else if(marks >= 70 && marks <= 79 ){
    console.log("you are in second merit")
}else if (marks >= 60 && marks <= 69){
    console.log("you are in third merit");
    console.log("try for better tommorrow");
}else if(marks < 60 ){
    console.log("you are out of merit");
}else{
    console.log("please enter the correct marks")
}

// Switch statement
let color = "yellow";
switch (color) {
    case "red" :
        console.log("stop! signal is red");
        break;
    case "green":
        console.log("Go hurry up signal is green");
        break;
    case "yellow" :
        console.log("Get ready signal is yellow")
        break;
    default:
        break;
}

// alert and prompt
let age = 22;
if (age > 20){
    alert("please enter under 18 age");
}

let color= "yellow"
if (color != "green"){
    prompt("please enter the corrrect color")
}


// practice question
let name = "Ali"
let marks1 = 20;
let marks2 = 14;
let marks3 = 10;
let bonus = 5;

let totalMarks = marks1+marks2+marks3+bonus;
let percentage = (totalMarks/150)*100;

if(percentage >=70){
    console.log(`
        Name : ${name}
        Totalmaeks: ${totalMarks} 
        Percentage: ${percentage.toFixed(2)}%
        Division:First Division
        Remarks : Excellent`);
}else if(percentage >= 50 && percentage< 70){
    console.log(`
        Name :${name}
        Totalmaeks: ${totalMarks} 
        Percentage: ${percentage.toFixed(2)}%
        Division:Second Division
        Remarks : Good`)
}else if(percentage < 50){
    console.log(`
        Name : ${name}
        Totalmaeks: ${totalMarks} 
        Percentage: ${percentage.toFixed(2)}%
        Division:Fail
        Remarks : Needs improvement`);
}

// day 3 string methods
// trim()
let string = "     hello woeld      ";
console.log(string.trim());

// uppercase and lowercase
let password = prompt("enter your password");
let uppercase = password.toUpperCase();
console.log(uppercase);

// string with argument method
let str = "hello hello world";



// indexof
let string = "   i love coding with a cup of tea   ";
let newstr = string.indexOf("coding");
console.log(newstr);

// method chaining 
let chaining = string.trim().toUpperCase();
console.log(chaining)

// slice method
let slice = "hello good morning to the land of hospitality";
console.log(slice.slice(6,12));

// replace method
let replace = "i love exercise exercise in morning";
let newReplace = replace.replace('exercise','coding');
console.log(newReplace);

// repeat 
let repeat = "mango"
let newrepeat = repeat.repeat(2);
console.log(newrepeat);

// Array methods: push() pop() shift() unshift();

let color = ["red","green","blue"];
console.log(color);
color.push("yellow");
console.log(color);
color.pop();
console.log(color);
color.shift();
console.log(color);
color.unshift("volvet");
console.log(color);

// Array indexof
let days = ["monday","tuesday","saturday","friday"];
let newdays = days.indexOf("tuesday");
console.log(newdays);
days[3] = "wednesday";
console.log(days)

// includes() method and concat
let color = ["red","green","blue"];
let primary = ["volvet","yellow","purple"];
let concat = color.concat(primary);
console.log(concat);
let result = color.includes("red");
console.log(result);

// reverse
concat.reverse();
console.log(concat);

slice()
let number = [10,20,40,50,60,70,80];
console.log(number);
let result = number.slice(2,5);
console.log(result);
// splice
number.splice(2,2,110,440);
console.log(number);


// sort() method
let menu = ["chicken","biryani","vegetable","appple","grapes"];
console.log(menu)
menu.sort();
console.log(menu);

// Array references
let alpha = ["a","b","c"];
let refer = alpha;
console.log(refer);
refer.push("d");
console.log(alpha);
console.log(refer);

// nested array
let nest = [[2,4,6],[8,10,12],[14,16,18]];
console.log(nest[0][2]);
console.log(nest[1][0]);
console.log(nest[2][0])

// practice question
let name = "       shahzeb        ";
console.log(name.trim());
// uppercase
let city = "karachi";
console.log(city.toUpperCase());
// string argument
function Name(name){
    console.log("welcome ",name);
}
Name("Ali");
// replace
let text = "i love java";
let result = text.replace("java","javascript");
console.log(result);
// repeat 
let word = "hello";
let word2 = word.repeat(2);
console.log(word2);

// indexof 
let str = "pakistan";
let str2 =str.indexOf("k");
console.log(str2);
// method chaining
let message = "           good job       ";
let msg = message.trim().toUpperCase()
console.log(msg);
// slice()
let lang = "javascript"
let language =lang.slice(4);
console.log(language);

mixed method chaining
let text = "        i love java     ";
let res = text.trim().replace("java","javascript").toUpperCase();
console.log(res);

function process(str){
    let result = str.trim().repeat(2).toUpperCase();
    console.log(result);
}
process("hi");

// question2 practice
let fruits = ["apple", "banana", "mango", "orange"];
if(fruits.includes("mango")){
    let result = fruits.indexOf("mango");
    console.log(`mango found at index ${result}`)
}else{
    console.log("not found")
}

let arr1 = [3, 1, 5];
let arr2 = [4, 2, 6];
let combine = arr1.concat(arr2).sort();
console.log(combine)

let numbers = [10, 20, 30, 40, 50, 60];
let num = numbers.slice(2,4).reverse();
console.log(num);

let cities = ["Lahore", "Karachi", "Islamabad", "Quetta"];
cities.splice(2,1,"Multan");
console.log(cities);

let colors = ["red", "blue", "green", "yellow"];
if(colors.includes("green")){
    let index = colors.indexOf("green");
    colors.splice(index,1)
    
}
console.log(colors)

let data = [
  ["Ali", "Ahmed", "Sara"],
  ["Math", "Science", "English"]
];
let index = data[0].indexOf("Sara");
let index2 = data[1].indexOf("Science");
console.log(`the index of sara is ${index} and Science is ${index2}`);

let group1 = ["A", "B"];
let group2 = ["C", "D"];
let concat = group1.concat(group2);;
let another = [concat];
console.log(another);

let scores = [88, 55, 99, 72, 60];
let sort = scores.sort();
sort.reverse()
console.log(sort)

let items = ["pen", "pencil", "eraser", "sharpener", "scale"];
let slice = items.slice(2,4);
console.log(slice)
remove = items.splice(2,2);
console.log(remove);

let arrA = [1, 2, 3];
let arrB = [4, 5];
let arrC = [[10, 20], [30, 40]];

let comb = arrA.concat(arrB);
arrC.push(comb);
console.log(arrC)
arrC.sort();
arrC.reverse();
if(comb.includes(5)){
    console.log(`here are 5 include ${comb}`)
}else{
    console.log("not found")
}

// day 4  practice loops 
for loop
for(let i=0; i<=4; i++){
console.log("hello makka",i);
print event number
for(let i=0; i<=20; i+=2){
    console.log(i)
}
// print odd number
for(let i=1; i<=20; i+=2){
    console.log(i)
}
// print 5 table
for(let i=0; i<=20; i+=5){
    console.log(i)
}
// nested for loop
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(i);
    }
}

// while loop
let favMovie = "avator";
let guess = prompt("please enter my guesible movie");
while(guess != favMovie && guess != "quit"){
    guess = prompt("please enter the correct movie");
}
if (guess == favMovie){
    console.log("congratulation");
}else{
    console.log("you quit the game");
}

// break keyword
let i = 1;
while(i<5){
    if (i == 3){
        console.log("we use break keyword at 3");
        break;

    }
    console.log(i);
    i++
}

// loops with array 
let fruits = ["apple","bannana","poemgranate", "pineaple"];
for(let i =0; i<= fruits.length; i++){
    console.log(fruits[i]);
}

// loop with nested array
let nested = [
    ["Ali", "Ahmed", "Sara"],
    [80, 75, 90]
];
for(let i=0; i<nested.length; i++){
    for(let j=0; j< nested[i].length; j++){
        console.log(nested[i][j])
    }
}

// for of loop;
let days = ["sunday","monday","tuesday"];
for(list of days){
    console.log(list);
}

// nested for of loop
let data = [
    ["Apple", "Banana"],
    ["Carrot", "Potato"],
    ["onion","tomato"]
];
for(list of data){
    for(veg of list){
        console.log(veg)
    }
}

// todo app
let todo = [];
let req = prompt("please enter your request");
while(true){
    if(req == "quit"){
        console.log("you quit the todo");
        break;
    }
    if(req == "list"){
        for(let i =0; i<todo.length; i++){
            console.log(i,todo[i]);
            console.log(".............")
        }
    }else if(req == "add"){
        let task = +(prompt("please enter the task you want"));
        todo.push(task);
        console.log("task is added");
    }else if(req == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task was deleted")
    }
    req = prompt("enter the request");
}


// practice Quetion 
// print number 1 - 10
for(let i=0; i<=10; i++){
    console.log("numbers",i)
}
// even number
for(let i=2; i<=20; i +=2){
    console.log("even",i)
}

// while loop
for(let i=0; i<=5; i++){
    if(i == 2){
        console.log("here is break at 2")
    }
    console.log("even",i)
}

// for loop with break
let fruits = ["Apple", "Banana", "Mango", "Orange"];
for(let i=0; i<fruits.length; i++){
    if(fruits[i] == "Mango"){
        console.log("here is break at mango");
        break;
        
    }
    console.log(fruits[i])
    
}
// for of loop
let color = ["Red", "Green", "Blue"];
for(colors of color){
    console.log(colors)
}

// nested for loop
let students = [
    ["Ali", "Ahmed", "Sara"],
    ["Ayesha", "Fatima", "Hina"]
];
for(let i =0; i<students.length; i++){
    for(let j=0; j<students[i].length; j++){
        console.log(students[i][j]);
    }
}
// nestedfor of loop
let marks = [
    [80, 75, 90],
    [88, 92, 70]
];
for(mark of marks){
    for(list of mark){
        console.log(list)
    }
}

// mixed practice
let classes = [
    ["Math", "Science"],
    ["English", "Urdu"]
];

for(let data of classes){
    for(let list of data){
        if(list == "English"){
            console.log("here break at english subject");
            break;
        }
        console.log(list)
    }
    
}

// day 5 js object literals
 const student = {
    name: "shahzeb",
    roll : 122,
    class: "5th semester",
    gpa: 3.44
 }

 console.log(student.name,student.class);

//  conversion in get values

// add / update value
student.address = "Mohmand";
student.gpa = 3.45
console.log(student)

// nested object
const students = {
   Ahmad : {roll:4, class:"5th semester", address:"mohmand"},
   Suleman : {roll:5, class:"5th semester", address:"bajuar"},
   Furqan : {roll:6, class:"5th semester", address:"khyber"}

}
console.log(students.Ahmad.address.slice().toUpperCase());
console.log(students.Furqan.address);
console.log(students.Suleman.address);

// Array of object
let studentInfo =[
    {name:"shahzeb khan",grade:"A+",rollNo: 122, class:"5th semester"},
    {name:"Nouman khan",grade:"A+",rollNo: 135, class:"5th semester"},
    {name:"Ijaz khan",grade:"A",rollNo: 122, class:"5th semester"}

]
studentInfo[0].name;
console.log(studentInfo[0].name,studentInfo[0].rollNo)

for(let info of studentInfo){
   for(let key in info){
      console.log(key ,":", info[key])
   }
}

for(let i=0; i<studentInfo.length; i++){
    for(let key in studentInfo[i]){
        console.log(key, ":" , studentInfo[i][key]);
    }
}

// Math methods
let pi = Math.PI;
console.log(pi);

let mathe = Math.E;
console.log(mathe);

let random = Math.random();
console.log(random)

let abs = Math.abs(-100);
console.log(abs)

let pow = Math.pow(2,4);
console.log(pow);

let floor = Math.floor(random *10);
console.log(floor);

let ceil = Math.ceil(random *10)+1;
console.log(ceil);

// generating otp code
let otp= Math.floor(Math.random()*1000)+9999;
console.log("OTP for verification ", otp);

// practice    Question
Q1
const student ={
    name:"shahzeb khan",
    rollNo:122,
    class:"5th semester",
    gpa: 3.44
}
console.log(student);
// Q2
let car = {
  brand: "Honda",
  model: "Civic",
  year: 2022
};
console.log(car.brand);
console.log(car["model"]);
// Q3
let product = {
  price: "500",
  quantity: "3"
};
let productPrice = Number(product.price);
let productQuantity = Number(product.quantity);
let totalcost = productPrice * productQuantity;
console.log(`Total Price : ${totalcost}`)
// Q4
let user = {
  username: "shahzeb",
  age: 20
};

user.email = "zeb84250@gmail.com";
console.log(user)

// Q5
let user = {
  username: "shahzeb",
  age: 20
};
user.age = 21;
console.log(user.age)
// Q6
const school ={
   {name: "PMS", location: "mian mandi khajawas kor"},
   student: {name:"Ahmad",rollNo:155, grade:"A"}
}

console.log(school.MPS)
console.log(school.student.name);
console.log(school.student.grade);

// Q8
let order = {
  orderId: 101,
  customer: {
    name: "Ali",
    phone: "03001234567"
  },
  amount: "1500"
};
order.amount = Number(order.amount)
order.status = "completed";
console.log(order)

// Q9
const Mobile ={
    brand: "vivo",
    price: "20000",
    spected:{
        RAM: "8GB",
        storage: "500GB"
    }
}


let priceNum = Number(Mobile.price);
let tax = priceNum *0.01;
let totalPrice= priceNum +tax;
console.log(`final price ${totalPrice}`)

// Day 6 functions
function hello(){
    console.log("hello world")
}
hello();
function rollDice(){
    let rand = Math.floor(Math.random()*6)+1
    console.log(rand);
}
rollDice();

// function with argument
function getSum(a,b){
    let res =a+b;
    console.log(res)
}
getSum(2,5)
getSum(10,10);

// return keyword;
function greet(n){
    return n;
}
console.log(greet("hello"));

// variable scope in function
// global scope
let a = 10;
function func(){
    console.log(a);
}
func();
// block scope
function block(){
    let sum = 10+30;
    console.log(sum);
}
// console.log(sum);
block()
// lexical scope function inside a function
function outer(){
    let a = "hello";
    let x = "world";
    function inner(){
        let res = a + x;
        console.log(res)
    }
    inner();
}
outer();

// function expression
let abs = function(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg.toFixed(3));
};
abs(10,30,30);

// Higher order function
function greet(name){
    return "Hello" + name; 
}

function higherOrder(fn){
    console.log(fn("shahzeb"))
}
higherOrder(greet);

function getSum(a,b){
    return "addition " +( a+b);
}
function getHigher(sum){
    console.log(sum(2,3));
}
getHigher(getSum);

// methods in function
const calculate ={
    add:function(a,b){return a+b},
    sub:function(a,b){return a-b},
    mul:function(a,b){return a*b}

}
console.log(calculate.add(2,4))
console.log(calculate.sub(10,4))
console.log(calculate.mul(2,4))

// practice Question
// Q1
function greet(){
    console.log("Hello world!");
}
greet();
// function argumnet Q2
function greetPerson(name){
    console.log(`hello  ${name}`);
}
greetPerson("Mehmood");
// Q3
function square(sqr){
    let result = sqr** 2;
    console.log(result);

}
square(7);
// Q4 scope
function scopeTest(){
    let message= "function inside";
    console.log(message);
}
scopeTest();
// console.log(message)
// Q5 function expression
let multiply = function(a,b){
    return a*b;
}
console.log(multiply(3,5));
// Q6 higher order function
function add(a,b){
    return a+b;
}

function operate(a,b,operation){
    return operation(a,b);
}
console.log(operate(2,4,add));
// Q7 mixed practice of above
let numbers = [1,2,3,4,5,6,7,8,9,10];
function isEven(num){
    return num%2 ==0;
}

function filterEven(arr,callback){
    let result = [];
    for(let num of arr){
        if(callback(num)){
            result.push(num);
        }
    }
    return result;
}
console.log(filterEven(numbers,isEven));
// for odd number
let number = [10, 15, 20, 25, 30, 35];
function isOdd(num){
    return num%2 != 0;
}

function oddFilter(arr, callback){
    let result = [];
    for(let num of arr){
        if(callback(num)){
            result.push(num);
        }
    }
    return result;
}
console.log(oddFilter(number,isOdd));

// day 7 
// this keyword
console.log(this.innerHeight);
console.log(this.innerWidth);

// this in normal function
function show(){
    console.log(this);
}
show();
// this with object
let person ={
    name: "shahzeb",
    roll: 122,
    greet: function(){
        console.log(this.name);
    }
}

person.greet();
// this with arrow function
let arrow ={
    name: "shahzeb",
    roll: 122,
    greet: ()=>{
        console.log(this.name);
    }
}

arrow.greet();

// try and catch
try{
function sum(a,b){
    console.log(x+b);
}
sum(10,20)
}catch(err){
    console.log("error occured",  err);
}

// Arrow function
const mul = (a,b)=>{
    return a*b;
}
console.log(mul(3,4));
// implicit
const divi = (a,b)=>{return a/b}
console.log(divi(20,3).toFixed(2));

// settimeut 
setTimeout(() => {
    console.log("good morning")
}, 3000);
setTimeout(() => {
    const pow = (a,b)=>a**b;
    console.log(pow(2,6));
},4000);

setinterval
let id = setInterval(() => {
    console.log("go dady");
}, 1000);

setTimeout(() => {
    clearInterval(id)
}, 5000);

const studentInfo ={
    name:"shahzeb khan",
    marks: 95,
    // prop: this,
    getName:function (){
        console.log(this);
        return this.name;
    },
    getMarks: function (){
        console.log(this);
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this);
        },2000);
    },
    getInfo2: function(){
        setTimeout(() => {
            console.log(this)
        },3000);
    }
}
console.log(studentInfo.getName());
console.log(studentInfo.getMarks());
console.log(studentInfo.getInfo1());
console.log(studentInfo.getInfo2());

// practice Q
// Q1
const student ={
    name: "shahzeb khan",
    marks: 60,
    invalidId: null,
    showInfo: function (){
        console.log(this);
    const getName = () => this.name;
        console.log(getName());

    },
    startUpdatingMarks: function (){
        try{
            
           const id=  setInterval(() => {
                const increase = ()=> this.marks += 5;
                console.log(`updated marks ${increase()}`);
                
            }, 1000);
            this.invalidId = id;
        }catch(err){
            console.log("error is occured", err.message)
        }
    },
    stopUpdatingMarks: function (){
        setTimeout(() => {
            const stop = ()=> clearInterval(this.invalidId);
            stop();
            console.log("Marks updating stoped");
        }, 3000);
    },
    showFinalMarks: function (){
        setTimeout(() => {
            console.log(this.name);
            console.log(`Final Marks ${this.marks}`)
        }, 5000);
    }
}
student.showInfo();
student.startUpdatingMarks();
student.stopUpdatingMarks();
student.showFinalMarks();

// day 8 Array methods
foreach()
let arr = [10,20,30,40,50,60,70];
arr.forEach((ele,idx)=>{
console.log(idx,ele);
})

// map();
let num = [1,2,3,4,5];
num.map((item,index,arr) =>{
    let res = item*2;
    console.log(res,index,arr);
})

// filter condition based
let marks = [20,40,60,80,90,100];
let result =marks.filter((res)=>{
    return res > 40;
    
})
console.log(result);
// some()
let check = [1,2,3,4,5,6,7,8,9,10,11,12];
let check2 =check.some((even)=>{
    return even%2 ==0;
    // console.log(even%2 ==0,index);
});
console.log(check2);
// every()
let number = [1,3,5,7,9];
let odd = number.every((num) => num%2 != 0);
console.log("every satisfied the array = ", odd);

// reduce()
let sum = [1,2,3,4,5,6];
sum.push(10);
let response =sum.reduce((acc,curr) =>{
    return acc+curr;
},0)
console.log(response);

// default parameter
function add(a,b=3){
    console.log(a+b);
}
add(2);
function greet(name = "Guest"){
    console.log("Hello ",name);
}
greet("Naveed");
greet();
// spread()
let array = [1,2,3,4,5];
let array2 = [...array,6,7,8];
console.log(array2);

// spread with array
let arr2 = [1,2,3];
let arr3 = [5,6,7];
let combine = [...arr2,...arr3];
console.log(combine[4]);

// spread with object literals
const product ={
    name:"Shahzeb khan",
    role: "student",
    city: "peshawar"

}

const copyproduct = {...product};
console.log(copyproduct);
let updateProduct = {
    ...product,
    role: "Frontend developer",
    email:"zeb84250@gmail.com"
}
console.log(updateProduct);

// convert array into object
let convert =[200,100,150,300];
let obj = {...convert};
console.log(obj);

// REST
function Rest(a,...b){
    console.log(a);
    console.log(b);
}
Rest(2,3,4,5);
Rest(10,20,30)

// destructuring

const studentData={
    name:"shahzeb khan",
    email:"zeb84250@gmail.com",
    password:"khan1122",
    phone:+3451312779,
    address: "mian mandi mohmand"
    
}

console.log(studentData)
const {password,email,name,phone} = studentData;
let Data ={
    password,
    name,
    phone,
    email
}
console.log(Data)

// practice Question

let students = [
  { id: 1, name: "Ali", marks: 85, passed: true },
  { id: 2, name: "Sara", marks: 45, passed: false },
  { id: 3, name: "Ahmed", marks: 72, passed: true },
  { id: 4, name: "Zara", marks: 90, passed: true }
];

let numbers = [10, 20, 30, 40];

let info = students.forEach((id)=>{
    console.log(`${id.name} scored ${id.marks}`)
});
console.log(info);
// map
let mapInfo = students.map((id) =>{
    return id.name.toUpperCase()
    
})
console.log(mapInfo)

// filter
let filterInfo = students.filter((id) => { return id.marks> 50});
console.log(filterInfo)
// some
let someInfo = students.some(student =>{
    let res = student.marks <50;
    console.log(res);
})
// every
let everyInfo = students.every((pass)=> pass.passed == true);
console.log(everyInfo);

// reduce 
let reduceIngfo = students.reduce((sum,student, index, arr) =>{
    sum += student.marks;
    if(index === arr.length -1){
        return sum / arr.length
    }
    return sum;
},0)
console.log(reduceIngfo);

// default parameter
function greet(name = "guest"){
    console.log("hello ",name);
}
greet("subhan");
greet();

// spread with array
let spread = [...numbers]
spread.unshift(50);
spread.push(100);
console.log(spread);

// spread with object literals
let updateobj = students.map(student =>({

    ...student,
    
    grade: "A+"
}))
   
console.log(updateobj);

// convert array into object
let skills = ["HTML", "CSS", "JavaScript"];

let obj = {...skills};
console.log(obj);

// REST parameter
function sumAll(...args){
    return args.reduce((args,ele) => args+ele)
}
console.log(sumAll(10,20,30))

// destructuring array
let colors = ["red", "green", "blue"];
const [red, ,blue] = colors

let data =[red,blue ]
console.log(data)

// destructuring object
const [{name, marks}]= students
let objData ={
    name,
    marks
}
console.log(objData)

