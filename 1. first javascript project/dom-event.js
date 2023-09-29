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

const details = document.querySelector("details");
details.addEventListener("toggle", function(e){
    console.log(e.target.open);
    console.log("toggle")
});





