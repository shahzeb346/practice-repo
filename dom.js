// selection element by id
let head = document.getElementById('head1');
console.log(head);

// selecting element by classname
let classHead = document.getElementsByClassName('classHead');
// console.log(classHead[0].innerHTML);
// get by tageName
let tagName = document.getElementsByTagName("p")
console.log(tagName[0]);

// query selector
let selector = document.querySelector("#head1");
selector.style.backgroundColor = "red"

let style = document.querySelector(".classHead");
style.style.color = "green"

// using properties method
let properties = document.querySelector("p");
console.log("innerhtml",properties);
properties.innerHTML = "change innerhtml  to paragraph";
console.log(properties);

let textContent = document.querySelector(".textContent");
console.log("textcontent",textContent);
textContent.textContent = "show me textcontent";
console.log(textContent);

let innerText = document.querySelector(".innerText");
console.log("innertext", innerText);
innerText.innerText = "shoe me innertext";
console.log(innerText);

// getAttribute and setAttribute
let set = document.querySelector(".set");
set.getAttribute("attributeName");
set.setAttribute("class","set2")
console.log(set);

// manipulating style
let styleimage = document.querySelector(".imagestyle");
styleimage.style.width = '300px';
styleimage.style.height = "300px";
styleimage.style.margin = "20px";
styleimage.style.border = "5px solid red";

// manipulating style using classlist
let classlist = document.querySelector("#classlist");
console.log(classlist);
classlist.classList.add("classlist");
// classlist.classList.remove("classlist")

Navigation
let child1 = document.querySelector(".child1");
console.log(child1.parentElement.className);// parent

console.log(child1.nextElementSibling.className);//child2

console.log(child1.previousElementSibling.innerText) //child0

console.log(child1.parentElement.parentElement.className);

// adding element

let para = document.createElement("p");
let h1 = document.createElement("h1");
h1.innerText = "parent element append"
console.log(para)
para.innerText = "creating element js create method";
child1.previousElementSibling.append(para);
child1.parentElement.prepend(h1);

// insert adjacent element
let para2 = document.createElement("p");
para2.innerText = "appending element with insert adjacent method";
child1.insertAdjacentElement("afterend",para2)

practice qustion tasks
let mainTitle = document.getElementById("mainTitle");
console.log("main tiltle of practice =", mainTitle);

let para= document.getElementsByClassName("info");
console.log("all paragraph of className=", para);

let li = document.getElementsByTagName("li");
console.log(li);

let firstInfo = document.querySelector(".info");
console.log("query selector first info =" ,firstInfo);

let allInfo = document.querySelectorAll(".info");
console.log("query selector all info =" ,allInfo);

// task no2
mainTitle.innerHTML = "<b>Change DOM Practice Task </b>";
console.log(mainTitle);

// task no3
let container = document.querySelector(".box");
container.getAttribute("data-type");
container.setAttribute("data-type", "main");
console.log(container);

// task no 4
para[0].style.color = "blue";
mainTitle.style.fontSize = "40px"
para[1].style.display = "none";

// task no 5
mainTitle.classList.add("highlight");
mainTitle.classList.remove("highlight")
let button = document.querySelector("#btn");
button.classList.toggle("active");
console.log(button)

// task no6
let ul = document.querySelector("#list");
let parent = ul.parentElement;
console.log(parent);
let first = ul.firstElementChild;
console.log(first);
let last = ul.lastElementChild;
console.log(last);
let next = mainTitle.nextElementSibling;
console.log(next);

let prev = firstInfo.previousElementSibling;
console.log(prev);

// task no 7
let banana = document.querySelector("#banana");
let create = document.createElement("li");
create.innerHTML = "create"
//  banana.append(create);
banana.appendChild(create);
banana.prepend(create)

// using insertadjacent method
let p = document.createElement("p");
p.innerHTML = "insertadjacent method";
// banana.insertAdjacentElement("beforebegin",p)
// banana.insertAdjacentElement("afterbegin",p);
// banana.insertAdjacentElement("beforeend",p);
banana.insertAdjacentElement("afterend",p);

// task no 8
let remove = ul.removeChild(banana);






