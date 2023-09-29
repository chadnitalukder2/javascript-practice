console.clear();

//input type text
/*//const input = document.querySelector('input');
const input = document.querySelector('input[name=name]');
input.addEventListener("change", changeHandler);

function  changeHandler(e) {
//  console.log(e);
// console.log(e.type);
// console.log(e.target);
// console.log(e.target.className);
// console.log(e.target.value);
}*/

//checkbox
/*const programs = document.querySelectorAll('input[name=program]');
console.log(programs);

Array.from(programs).map((program) => {
program.addEventListener("change",programHandler)
});
function programHandler(e){
if(e.target.checked){
    console.log(e.target.value);
}
};*/

//select
/*const department = document.querySelector("#department");
console.log(department)
department.addEventListener("change",handelDepartment);

function handelDepartment(e){
console.log("selected")
};*/

// onsubmit-----------------------------------------------
/* form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
console.log(name);
form.addEventListener("submit", formHandler);

function formHandler(e){
    e.preventDefault();
    // console.log("submit")
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value)

    const userInfo ={
        name: name.value,
        email: email.value,
        password: password.value
    };
    console.log(userInfo);
    name.value="";
    email.value="";
    password.value="";
}*/

// DOM Event | Event Object | media events
//audio / video events
//canplay, play, playing, pause, progress, ended, volumechange, waiting

/*const video = document.querySelector("video");
video.addEventListener("canplay", function () {
  console.log("canplay");
});
video.addEventListener("play", function () {
  console.log("play");
});
video.addEventListener("pause", function () {
  console.log("pause");
});
video.addEventListener("playing", function () {
  console.log("playing");
});
video.addEventListener("end", function () {
    console.log("thanks for watching");
  });
  video.addEventListener("volumechange", function () {
    console.log("volumechange");
  });*/

//50 : DOM Event | Event Object | scroll, resize, toggle
//load, unload, scroll, resize, toggle

//load,unload
/*window.addEventListener("load", function(){
    console.log("load")
});
window.addEventListener("unload", function(){
    console.log("unload")
});*/

//srcoll
/*window.addEventListener("scroll", function(){
    console.log("scroll")
});*/

//resize
/*window.addEventListener("resize", function(){
   const width = window.outerWidth;
   const height = window.outerHeight;
    console.log(`height: ${height}, width: ${width} `)
});*/

//toggole - details

/*const details = document.querySelector("details");
details.addEventListener("toggle", function(e){
    console.log(e.target.open);
    console.log("toggle")
});*/

//mouseEvent - <html>, <head>, <meta>, <title>, <br>, <script>, <iframe>, <param>, <base>, <bdo>
// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmousedup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover

//console.clear();
/*const div = document.querySelector("div");

div.addEventListener("click", function(e) {
 // console.log("click is occured");
// console.log(e.target);
//console.log(e.target.id);
//console.log(e.target.className);
//console.log(e.target.innerHTML);
//console.log(e.target.innerText); //same 
//console.log(e.target.textContent);

});

div.addEventListener("dblclick", function () {
  console.log("dblclick is occured");
});
div.addEventListener("mousedown", function () {
  console.log("mousedown is occured ");
});
div.addEventListener("mouseup", function () {
  console.log("mouseup is occured");
});
div.addEventListener("mouseenter", function () {
  console.log("mouseenter is occured");
});
div.addEventListener("mouseleave", function () {
  console.log("mouseleave is occured");
});
div.addEventListener("mouseover", function () {
  console.log("mouseover is occured");
});
div.addEventListener("mousemove", function () {
  console.log("mousemove is occured");
});*/

/*div.addEventListener("mousemove", function (e) {
    // console.log("clientX = " + e.clientX + " clientY =" + e.clientY);
    console.log("offsetX = " + e.offsetX + " offsetY =" + e.offsetY);
});*/

/*const buttons = document.querySelectorAll(".btn");
//console.log(buttons);

Array.from(buttons).map((button) => {
button.addEventListener("click", function(){
    console.log("click")
});
});*/

// KeyboardEvent------------------------------------------------------
/*const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function(e){
//console.log("keydown");
if(e.repeat){
    alert("do not repeat");
}

});

textarea.addEventListener("keypress", function(){
console.log("keypress")
});

textarea.addEventListener("keyup", function(e){
//console.log(e.keyCode)
//console.log(e.key)
//console.log(e.code)
// console.log(e.shiftKey)
if(e.shiftKey){
    console.log("shift " + e.key)
}
});*/

//FocuseEvent Object-----------------------------------------------------

//<br>, <head>, <title>, <html>, <iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo> (kaj kore na)

// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout

/*const input = document.querySelector("input");

input.addEventListener("blur", function(e){
    //console.log("blur is occured");
   // input.style.background = "transparent";
   // input.style.padding = "0rem";
   //console.log(e.target.value);
   input.value = e.target.value.toUpperCase();
});
input.addEventListener("focus", function(){
   // console.log("focus is occured");
   //input.style.background = "orange";
   //input.style.padding = "2rem";
});
// input.addEventListener("focusin", function(){
//     console.log("focusin is occured");
// });
// input.addEventListener("focusout", function(){
//     console.log("focusout is occured");
// });*/

//DOM Event | ClipboardEvent--------------------------------
//oncopy, oncute , onpaste

/*const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("copy", function () {
 p.innerText = "You have copied";
  //console.log("copy");
});
input.addEventListener("cut", function () {
  console.log("cut");
});
input.addEventListener("paste", function () {
  console.log("paste");
});*/

//DrageEvent--------------------------------------------
//omdragstart, ondrag, ondragenter, ondrageleave, ondrageover, ondrop

/*const div = document.querySelector("div");
const p = document.querySelector("p");
p.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text",e.target.id);
});
div.addEventListener("dragover", function (e) {
  e.preventDefault();
});
div.addEventListener("drop", function (e) {
  let id =  e.dataTransfer.getData("text");
  console.log(id);
  div.appendChild(document.getElementById(id));
  e.preventDefault();
});*/

