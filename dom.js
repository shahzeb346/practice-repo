// // selection element by id
// let head = document.getElementById('head1');
// console.log(head);

// // selecting element by classname
// let classHead = document.getElementsByClassName('classHead');
// // console.log(classHead[0].innerHTML);
// // get by tageName
// let tagName = document.getElementsByTagName("p")
// console.log(tagName[0]);

// // query selector
// let selector = document.querySelector("#head1");
// selector.style.backgroundColor = "red"

// let style = document.querySelector(".classHead");
// style.style.color = "green"

// // using properties method
// let properties = document.querySelector("p");
// console.log("innerhtml",properties);
// properties.innerHTML = "change innerhtml  to paragraph";
// console.log(properties);

// let textContent = document.querySelector(".textContent");
// console.log("textcontent",textContent);
// textContent.textContent = "show me textcontent";
// console.log(textContent);

// let innerText = document.querySelector(".innerText");
// console.log("innertext", innerText);
// innerText.innerText = "shoe me innertext";
// console.log(innerText);

// // getAttribute and setAttribute
// let set = document.querySelector(".set");
// set.getAttribute("attributeName");
// set.setAttribute("class","set2")
// console.log(set);

// // manipulating style
// let styleimage = document.querySelector(".imagestyle");
// styleimage.style.width = '300px';
// styleimage.style.height = "300px";
// styleimage.style.margin = "20px";
// styleimage.style.border = "5px solid red";

// // manipulating style using classlist
// let classlist = document.querySelector("#classlist");
// console.log(classlist);
// classlist.classList.add("classlist");
// // classlist.classList.remove("classlist")

// Navigation
// let child1 = document.querySelector(".child1");
// console.log(child1.parentElement.className);// parent

// console.log(child1.nextElementSibling.className);//child2

// console.log(child1.previousElementSibling.innerText) //child0

// console.log(child1.parentElement.parentElement.className);

// // adding element

// let para = document.createElement("p");
// let h1 = document.createElement("h1");
// h1.innerText = "parent element append"
// console.log(para)
// para.innerText = "creating element js create method";
// child1.previousElementSibling.append(para);
// child1.parentElement.prepend(h1);

// // insert adjacent element
// let para2 = document.createElement("p");
// para2.innerText = "appending element with insert adjacent method";
// child1.insertAdjacentElement("afterend",para2)

// practice qustion tasks
// let mainTitle = document.getElementById("mainTitle");
// console.log("main tiltle of practice =", mainTitle);

// let para= document.getElementsByClassName("info");
// console.log("all paragraph of className=", para);

// let li = document.getElementsByTagName("li");
// console.log(li);

// let firstInfo = document.querySelector(".info");
// console.log("query selector first info =" ,firstInfo);

// let allInfo = document.querySelectorAll(".info");
// console.log("query selector all info =" ,allInfo);

// // task no2
// mainTitle.innerHTML = "<b>Change DOM Practice Task </b>";
// console.log(mainTitle);

// // task no3
// let container = document.querySelector(".box");
// container.getAttribute("data-type");
// container.setAttribute("data-type", "main");
// console.log(container);

// // task no 4
// para[0].style.color = "blue";
// mainTitle.style.fontSize = "40px"
// para[1].style.display = "none";

// // task no 5
// mainTitle.classList.add("highlight");
// mainTitle.classList.remove("highlight")
// let button = document.querySelector("#btn");
// button.classList.toggle("active");
// console.log(button)

// // task no6
// let ul = document.querySelector("#list");
// let parent = ul.parentElement;
// console.log(parent);
// let first = ul.firstElementChild;
// console.log(first);
// let last = ul.lastElementChild;
// console.log(last);
// let next = mainTitle.nextElementSibling;
// console.log(next);

// let prev = firstInfo.previousElementSibling;
// console.log(prev);

// // task no 7
// let banana = document.querySelector("#banana");
// let create = document.createElement("li");
// create.innerHTML = "create"
// //  banana.append(create);
// banana.appendChild(create);
// banana.prepend(create)

// // using insertadjacent method
// let p = document.createElement("p");
// p.innerHTML = "insertadjacent method";
// // banana.insertAdjacentElement("beforebegin",p)
// // banana.insertAdjacentElement("afterbegin",p);
// // banana.insertAdjacentElement("beforeend",p);
// banana.insertAdjacentElement("afterend",p);

// // task no 8
// let remove = ul.removeChild(banana);

// day 9 Dom events
let listenerBtn = document.querySelector(".listenerBtn");
listenerBtn.addEventListener("click", () =>{
console.log("button is clicked");
let sum = (a,b)=> a+b;
console.log(`sum of event = ${sum(10,10)}`)
})
// event with element
let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("element is clicked")
})
// this with event listener
let thisBtn = document.querySelector("#thisBtn");
thisBtn.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
});
// keyboard events
let input = document.querySelector("#input");
input.addEventListener("keydown", function(){
    console.log("keydown");
})
input.addEventListener("keyup", function(){
    console.log("keyup");
})
input.addEventListener("keypress", function(){
    console.log("keypress");
});

// form events
let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log("form was submitted")
//     form.reset(" ")
// });

// extract form data
form.addEventListener("submit", function(e){
    e.preventDefault();
    let user = this.elements[0].value;
    let pass = this.elements[1].value;
    console.log(`user data ${user}`);
    console.log(`password data ${pass}`);

});

// change events
form.addEventListener("change", function(e){
    e.preventDefault();
    let user = this.elements[0].value;
    let pass = this.elements[1].value;
    console.log(user, pass)
})

// difference between change and input
let input2 = document.querySelector("#change");
input2.addEventListener("input", (e) => {
    e.preventDefault();
    console.log(e.target.value)
  console.log("typing...");
});

input2.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(e.target.value)
  console.log("finished typing");
});

// practice question
let domBtn = document.querySelector("#domBtn");
domBtn.addEventListener("click",function(){
    
    this.innerText = "Clicked";
    this.style.backgroundColor = "blue"
    console.log("style changed");
})
// Q2
let btn = document.querySelectorAll(".btn");
btn.forEach(function(button){
    button.addEventListener("click", function(e){
    if(e.target.classList.contains("btn")){
        console.log(e.target.innerText)
    }
})
})

// q3 event with element + this
let keyword = document.querySelector(".keyword");
keyword.addEventListener("mouseenter", function(){
    this.style.backgroundColor = "green";
})
keyword.addEventListener("mouseout", function(){
    this.style.backgroundColor = "gray";
})

// q4
let disable = document.querySelector(".dis");
disable.addEventListener("click", function(){
    this.classList.add("disable");
    this.innerText = "Disabled!"
})
// Q5
let keyCode = document.querySelector("#key");
keyCode.addEventListener("keydown", function(e){
        e.target.value;
        console.log("typing.......")
})
// Q6
keyCode.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        alert("Submitted");
    }
})


