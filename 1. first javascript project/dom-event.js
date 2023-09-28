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
const department = document.querySelector("#department");
console.log(department)
department.addEventListener("change",handelDepartment);

function handelDepartment(e){
console.log("selected")
};







