console.clear();

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

const programs = document.querySelectorAll('input[name=program]');
console.log(programs);

Array.from(programs).map((program) => {
program.addEventListener("change",programHandler)
});
function programHandler(e){
if(e.target.checked){
    console.log(e.target.value);
}
};








