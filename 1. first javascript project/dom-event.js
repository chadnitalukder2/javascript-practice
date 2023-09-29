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
const form = document.querySelector("form");
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
}




