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

var numbers = [10, 20, 30, 40];
numbers.forEach(function(x,index,arr){
   arr[index] = x+5;
});
console.log(numbers);










































































































