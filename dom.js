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

// // day 9 Dom events
// let listenerBtn = document.querySelector(".listenerBtn");
// listenerBtn.addEventListener("click", () =>{
// console.log("button is clicked");
// let sum = (a,b)=> a+b;
// console.log(`sum of event = ${sum(10,10)}`)
// })
// // event with element
// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     console.log("element is clicked")
// })
// // this with event listener
// let thisBtn = document.querySelector("#thisBtn");
// thisBtn.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });
// // keyboard events
// let input = document.querySelector("#input");
// input.addEventListener("keydown", function(){
//     console.log("keydown");
// })
// input.addEventListener("keyup", function(){
//     console.log("keyup");
// })
// input.addEventListener("keypress", function(){
//     console.log("keypress");
// });

// // form events
// let form = document.querySelector("form");
// // form.addEventListener("submit", function(event){
// //     event.preventDefault();
// //     console.log("form was submitted")
// //     form.reset(" ")
// // });

// // extract form data
// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     let user = this.elements[0].value;
//     let pass = this.elements[1].value;
//     console.log(`user data ${user}`);
//     console.log(`password data ${pass}`);

// });

// // change events
// form.addEventListener("change", function(e){
//     e.preventDefault();
//     let user = this.elements[0].value;
//     let pass = this.elements[1].value;
//     console.log(user, pass)
// })

// // difference between change and input
// let input2 = document.querySelector("#change");
// input2.addEventListener("input", (e) => {
//     e.preventDefault();
//     console.log(e.target.value)
//   console.log("typing...");
// });

// input2.addEventListener("change", (e) => {
//     e.preventDefault();
//     console.log(e.target.value)
//   console.log("finished typing");
// });

// // practice question
// let domBtn = document.querySelector("#domBtn");
// domBtn.addEventListener("click",function(){
    
//     this.innerText = "Clicked";
//     this.style.backgroundColor = "blue"
//     console.log("style changed");
// })
// // Q2
// let btn = document.querySelectorAll(".btn");
// btn.forEach(function(button){
//     button.addEventListener("click", function(e){
//     if(e.target.classList.contains("btn")){
//         console.log(e.target.innerText)
//     }
// })
// })

// // q3 event with element + this
// let keyword = document.querySelector(".keyword");
// keyword.addEventListener("mouseenter", function(){
//     this.style.backgroundColor = "green";
// })
// keyword.addEventListener("mouseout", function(){
//     this.style.backgroundColor = "gray";
// })

// // q4
// let disable = document.querySelector(".dis");
// disable.addEventListener("click", function(){
//     this.classList.add("disable");
//     this.innerText = "Disabled!"
// })
// // Q5
// let keyCode = document.querySelector("#key");
// keyCode.addEventListener("keydown", function(e){
//         e.target.value;
//         console.log("typing.......")
// })
// // Q6
// keyCode.addEventListener("keypress", function(e){
//     if(e.key === "Enter"){
//         alert("Submitted");
//     }
// });

// // Q7
// let input3 = document.querySelector("#tasklive");
// input3.addEventListener("input", function(e){
// let h1 = document.querySelector("#preview");
// h1.innerHTML = e.target.value;

// })

// // Q8
// input3.addEventListener("change", function(e){
//     console.log(e.target.value);
//     console.log("Done typing");

// })
// // Qno 9
// let form2 = document.querySelector("#form2");
// form2.addEventListener("submit", function(e){
//     e.preventDefault();
//     let user = e.target.elements.username.value;
//     let pass = e.target.elements.password.value;
//     console.log(user, pass)
// })

// // Q10
// form2.addEventListener("submit", function(e){
//     e.preventDefault();
//     if(e.target.elements.username.value == ""){
//         console.log("please fill out the username field");
        
//     }
// })


// day 11 event bubbling
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");
// child.addEventListener("click", function (e){
//     console.log("child clicked",e.target);
//     console.log("parent click",e.currentTarget);
// })

// parent.addEventListener("click", function(){
//     console.log("parent clicked")
// })

// event delegation
// let delegation = document.querySelectorAll(".delegation");
// delegation.forEach((btn) => {
//     btn.addEventListener("click", function(e){
//         console.log("every button click",e.target, e.currentTarget)
//         console.log(e.target.innerText);
//     })
// });

// todo app
// let input = document.querySelector("input");
// let todo = document.querySelector(".todo");
// let addBtn = document.querySelector(".addBtn");

// addBtn.addEventListener("click", function(){
//     let task = input.value;
//     if(task == "") return;

//     let li = document.createElement("li");
//     li.classList.add("item");
//     li.innerText = task;
//     li.style.listStyle = "none";
//     todo.appendChild(li);

//     input.value = "";
// })

// practice question
// let input = document.querySelector("#taskInput");
// let addBtn = document.querySelector("#addTaskBtn");
// let todolist = document.querySelector("#taskList");
// addBtn.addEventListener("click", function(){
//     let task = input.value;
//     if(task === "") return;
    
//     let li = document.createElement("li");
//     let deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
//     deleteBtn.classList.add("delete");
//     li.style.listStyle = "none";
//     li.innerText = task + " ";
//     li.appendChild(deleteBtn);
//     todolist.appendChild(li);
//     input.value= "";
// });
// todolist.addEventListener("click", function(event){
//         if(event.target.classList.contains("delete")){
//             event.target.parentElement.remove();
//         }
//     })


day 12 call Stack
function greet(){
    console.log("hello greet")
}
function demo(){
    greet();
}
demo()

// visualizing the callStack
function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two()+ one();
    console.log(ans)
}
three();

// breakpoint
function add(a,b){
    debugger;
    return a +b;

}

function calculate(){
    add(3,3);
}
calculate();

javascript single threaded 
function thread(){
    while(true) {}
}
thread()
console.log("Done");

callback hell

let h2 = document.querySelector("h2");
function colorChange(color, delay,nextcolor){
    setTimeout(() => {
        h2.style.color = color;
        if(nextcolor)  nextcolor();
    }, delay);
}

colorChange("orange",1000,()=>{
    colorChange("red",1000,()=>{
        colorChange("green",1000,()=>{
            colorChange("blue",1000,()=>{
                colorChange("purple",1000,()=>{
                   colorChange("gray",1000,()=>{

    })
    })
    })
    })
    })
})

// Promises
function savDB(data,success,failure){
    let internetSpeed= Math.floor(Math.random()*10)+1;
    if(internetSpeed >4){
        success(data);
    }else{
        failure(data);
    }
}

savDB("apna college",
    ()=>{
        console.log("data is saved successfully")
    },
    ()=>{
        console.log("no internet connection please retry");
    },
    
);

promises with chaining and result in promises
function savDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve(data);
        }else{
            reject(data);
        }
    })
}

savDB("apna college")
.then((result)=>{
    console.log("data saved!");
    console.log("result of promiese",result);
    return savDB("shahzeb");
})
.then((result)=>{
    console.log("second data saved!");
    console.log("result of promiese",result);
    return savDB("shradha");
})
.then((result)=>{
    console.log("third data saved!");
    console.log("result of promiese",result);
})
.catch((error)=>{
    console.log("promises is rejected");
    console.log("error of promiese",error);
})

// promises to our callback hell
let h2 = document.querySelector("h2")
function colorChange(color, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h2.style.color = color;
            resolve();
        }, delay);
    })
}

colorChange("red",1000)
.then(()=>{
    console.log("red color was complete")
    return colorChange("green",1000);
})
.then(()=>{
     console.log("green color was complete")
    return colorChange("blue",1000);
})
.then(()=>{
     console.log("blue color was complete")
    return colorChange("yellow",1000)
})
.then(()=>{
     console.log("yellow color was completed")
    
})
.catch((error)=>{
    console.log(error)
})

// practice question
function first() {
    console.log("First function started");
    second();
    console.log("First function ended");
}

function second() {
    console.log("Second function started");
    // debugger;
    third();
    console.log("Second function ended");
}

function third() {
    debugger;
    console.log("Third function executing");
}

first();

callback hell
function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched:", id);
        callback({ id: id, name: "Shah Zeb" });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log("Posts fetched for user:", userId);
        callback(["Post1", "Post2", "Post3"]);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(() => {
        console.log(`Comments for ${post}: ["Nice!", "Great!"]`);
        callback();
    }, 1000);
}

// Nested callback hell
getUser(1, (user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0], () => {
            console.log("All tasks completed!");
        });
    });
});

function getUser(id,callback){
    setTimeout(() => {
    console.log("fetched id ",id)
    callback({id: id, name:"shahzeb"})
    }, 1000);
}

function getPost(userid,callback){
    setTimeout(() => {
    console.log("post fetched for user",userid)
    callback(["post1","post2","post3"])
    }, 1000);
}
function getComment(post,callback){
    setTimeout(() => {
    console.log(`comment for ${post}:["nice","great"]`)
    callback()
    }, 1000);
}

// nested callback hell
getUser(1,(user)=>{
    getPost(user.id, (posts)=>{
        getComment(posts[0],()=>{
            console.log("callback hell is completed");
        })
    })
})


// promises to our callback hell
function getUserPromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User fetched:", id);
            resolve({ id: id, name: "Shah Zeb" });
        }, 1000);
    });
}

function getPostsPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Posts fetched for user:", userId);
            resolve(["Post1", "Post2", "Post3"]);
        }, 1000);
    });
}

function getCommentsPromise(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Comments for ${post}: ["Nice!", "Great!"]`);
            resolve();
        }, 1000);
    });
};


// Task: chain promises here to avoid callback hell
getUserPromise(1)
.then((user)=>{
    console.log("User ", user);
    return getPostsPromise(user.id);
})
.then((posts)=>{
    console.log("posts", posts);
    return getCommentsPromise(posts[0]);
})
.then(()=>{
    console.log("All tasks completed");
})
.catch((erro)=>{
    console.log(`erro occured on the above code ${erro}`)
})













