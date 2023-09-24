/*function sqaure(num1,num2) {
    //var num = 5;
    var result = num1 * num2 ;
    return result;
   // document.write("result =" + result + "<br/>")
}var x =sqaure(6,5);
document.write(x);
//document.write(sqaure(6,5));
//sqaure(7,5);
//sqaure(8,5);*/

//add function
/*function addition(x,y) {
    var result = x + y;
    document.write("sum = " + result + "<br/>");
}

//sub function
// function subtraction(x,y) {
//     var result = x - y;
//     document.write("sum = " + result + "<br/>");
// }
addition(1,2,3,4,6,5,7,8,9);
addition(610,320);
subtraction(10,20);
subtraction(610,320);*/

//IIFES (Immediately Invokeable Function Expression)

// function display(message) {
//   console.log(message);
// }
// display("hello");

//Function Expressions
/*var display2 = function displayMessage(message){
console.log(message);
};
display2("hi i am message");*/

// ( ),{ }, [ ], < >

// Task 7 : create an IIFEs that print sum of 2 numbers

/* function findMinimun(a,b,c) {

    if(a > c && b > c){
        return c;
    }
    else if( a > b && c > b ){
        return b;
    } else {
        return a;
    }

}

console.log(findMinimun(9,1,1));*/


/*function findArray0(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            console.log("Number gotted", i + 1);
            console.log("Number is", arr[i]);
            break;
        }
    }
}
let numArr = [1, 2, 4, 5, 6, 7, 8,3, 10, 100];
// findArray(numArr , 10);
findArray([2,5,6,8,90,10] , 10);*/


//addition
var numbers = [1,2,3,4,5,6,7,8,9,99,7,8,67,80];
sum = 0
function AdditionArr (numbers){
for(var i = 0 ; i <numbers.length; i++){
    sum = sum + numbers[i];
}
}
AdditionArr(numbers)
console.log(sum);

