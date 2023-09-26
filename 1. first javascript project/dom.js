/*var link = document.getElementsByTagName("a")[0];
link.innerHTML = "visit facebook";
link.style.textDecoration = "none";
link.style.color ="green";
link.style.fontSize ="1.5rem";
link.href ="https//pujadas.com"*/

/*var heading1 = document.getElementsByTagName("h1")[0];
heading1.innerHTML = "Say hello"*/

//dd element
/*var heading3 = document.createElement("h1");
var text = document.createTextNode("this is heading 3");
heading3.appendChild(text);

var mydiv = document.getElementById("my-div");
mydiv.appendChild(heading3);*/

//remove element
/*var heading2 = document.getElementsByTagName("h1")[1];
var mydiv = document.getElementById("my-div");
mydiv.removeChild(heading2);*/

//add element upporer dike
/*var heading0 = document.createElement("h1");
var text0 = document.createTextNode("this is heading 0 ");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h1")[0];

var mydiv = document.getElementById("my-div");
mydiv.insertBefore(heading0,heading1);*/

//add class
/*document.getElementById("my-div").classList;
document.getElementById("my-div").classList.add("my-class2")
document.getElementById("my-div").classList.remove("my-class")
*/

///------------------------------------------------------////
//Downwards- queryselector / queryselectorall

/*const studentsList = document.querySelector(".student-list")
const studentA = studentList.querySelector("student-a");*/

//Downwards -childrens
/*const studentsList = document.querySelector(".student-list");
studentsLis.children;
const studentA = studentList.children[0];*/

//upwards - parentElement
/*const studentA = document.querySelector("li");
const studentList = studentA.parentElement;*/

//sideways - nextElementSibling, previousElementSibling
/*const studentA = document.querySelector("li");
const studentB = studentA.nextElementSibling;
const studentC = studentB.nextElementSibling;*/

/*const studentC = document.querySelectorAll("li")[2];
const studentB = studentC.previousElementSibling;*/

//sideways - parentElement + children + index
const studentA = document.querySelector("li");
const studentList = studentA.parentElement;
const studentC = studentList.children[2];

















