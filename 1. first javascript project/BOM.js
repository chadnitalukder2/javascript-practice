console.clear();
//console.log(window);
//console.log(location);

/*//href
console.log(location.href);
//protocol
console.log(location.protocol);
//hostname
console.log(location.hostname);
//port
console.log(location.port);
//pathname
console.log(location.pathname);*/

/*var locationDiv = document.querySelector(".location-div");
console.log(locationDiv);

var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.protocol;

const visitButton = document.getElementById("visit-button");
visitButton.addEventListener("click", function(){
location.assign("https://www.studywithanis.com")
});*/

//popup boxes - alert, confirm, prompt-------------------------------------------------------
//alert("error here")
//confirm("Are you sure");

/*function deleteSomething(){
    let value = confirm("Do you want to delete?");
    if(value){
        console.log("deleted");
    }
    else{
        console.log("not deleted");
    }
}
deleteSomething();*/

/*function welcome(){
var h1 = document.createElement("h1");
let text;
var name = prompt("Enter your name");
if(name == null || name == ''){
text = "no name found"
}
else{
    text = "welcome " + name;
}
var textNode = document.createTextNode(text);
h1.appendChild(textNode);
document.body.appendChild(h1);
};
welcome();*/


// Browser Object Model | Timing events-----------------------------------------

/*setTimeout(() => {
    console.log("hi");
}, 3000);*/

/*setTimeout(display,2000);

function display(){
    console.log("display function");
}*/

/*const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveButton.addEventListener("click", saveUser);
function saveUser(){
    message.textContent = "user registration succesful"
setTimeout(() => {
    message.textContent="";
}, 2000);
}*/

//setInterval----------------------------
/*const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveButton.addEventListener("click", displayCount);
function displayCount(){
    let count = 0 ;
message.textContent = count ;
setInterval(() => {
    count++;
    message.textContent = count;
}, 1000);
};*/