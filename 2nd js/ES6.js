// forEach | for vs forEach-----------------------------------------------------
/*var numbers = [10, 20, 30, 40];
for(var x= 0; x<numbers.length; x++){
    console.log(numbers[x]);
}*/

//forEach 
/*var numbers = [10, 20, 30, 40];
// numbers.forEach(myFunction)

// function myFunction(x){
//     console.log(x);
// }
numbers.forEach(function(x) {
console.log(x);
});*/

/*var numbers = [10, 20, 30, 40];
var squareNumber = []
numbers.forEach(function(x){
    squareNumber.push(x*x);
});
console.log(squareNumber);*/

/*var numbers = [10, 20, 30, 40];
numbers.forEach(function(x,index,arr){
   arr[index] = x+5;
});
console.log(numbers);*/


// map and filter array function---------------------------------------------------------------------
/*var numbers = [2, 3, 4, 5];
var squareNumber = numbers.map(function(x){
    return x*x;
});
console.log(squareNumber);*/

/*var numbers = [22, 31, 4, 5,26,78,65];
var newNumber = numbers.filter(function(x){
    return x > 10;
});
console.log(newNumber);*/

// Arrow function (part-1)------------------------------------------------------------------------------------
/*function display1(){console.log("I am display1");}
const display2 = () => console.log("I am display 2");

display1();
display2();*/

/*function message1(){
    return "I am message1"
}
const message2 = () =>   //akoti line takle secound bracket dewya lage na
    "I am message1"

console.log(message1());
console.log(message2());*/

function add1(num1, num2){
    return num1 + num2;
}
const add2 = (num1,num2) => 
    num1 + num2

console.log(add1(10,20));
console.log(add2(20,20));




























































































