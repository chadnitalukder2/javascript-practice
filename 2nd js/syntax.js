/*let x = 25;
let y = 30;
let sum = x + y;
console.log(`sum is ${sum} . the end`);*/
 
//function
/*const add = (x,y) => {
let sum = x + y;
console.log(sum);
}
add(20,30);*/

// hoisting and strict mode------------------------
 //"use strict"
/*x = 20; //let er jonno ata possible na
console.log(x);
var x;*/

//default and rest parameter-------------------------------
"use strict"
//default
/*function message(text = "Hello this is default parameter"){
    console.log(`${text}`);
}
message();
message("I love  ES6");*/

/*/rest
/function sum(x,y, ...z){
    console.log(` x = ${x}, y = ${y} , z = ${z}`)
}
sum(10,20,40,50,60, 80)*/

// spread operator---------------------------------------------------------------------------

/*function addNumber(x, y, z){
    return x + y + z;
}
let number =[1, 2, 3];
//console.log(addNumber(number[0],number[1],number[2]))
//console.log(addNumber(...number))

// let number1 = [5,  ...number ,6];
// console.log(number1);

let number1 = [1, 2, 3];
let number2 = [4, 5, 6];
//let numbers = number1.concat(number2);
let numbers = [...number1, ...number2];
console.log(numbers);*/

/*let p1 = {
    name : "Chadni talukder",
    age : 30
}
let p2 = {
    nationality: "Bangladesh",
    occupation: "teacher"
}
let p = {...p1, ...p2}

console.log(p)*/


// object literals---------------------------------------------------------------------------
/*function studentInfo (name, age){
    return{
        // name : name,
        // age : age
        name,
        age
    }
}
console.log(studentInfo("puja das", 20));*/

/*let message = {
   // body : function(){
  //  body(){ 
    'body name'() { 
        return `Hi, I am object function`
    }
}
//console.log(message.body());
console.log(message['body name']());*/




































































































































































