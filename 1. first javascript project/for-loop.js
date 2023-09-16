//--------------------------- for------------------------------

//for(starting, condition , update)  //x++
/*for(var x = 1; x <= 10; x = x + 1 ){
    document.write("<h1>Bangladesh <h1/>");
}
document.write("<h1>End<h1/>");*/

/*for(var x = 1; x <= 100; x = x + 1 ){
    document.write(" " +x);
}

document.write("end " );*/


/*---------------------for loop----------------------*/

//1+2+3+4+5 =
/*var m = parseInt(prompt("enter the starting number :"));
var n = parseInt(prompt("enter the last number :"));
var sum = 0;
for(var x = m; x <= n; x = x + 1 ){
//for(var x = 1; x <= 5; x = x + 1 ){
    sum = sum + x ;
}
document.write(" sum =" +sum);*/

 /*   for (var x = 1; x <=  5; x++){
    var num1 = parseInt(prompt("enter firts number : "));
    var num2 = parseInt(prompt("enter second number : "));
     sum = num1 + num2;
    document.write("result = " +sum);
}
*/

// The first 10 natural number
/*for(var x = 1; x <= 10 ; x++){
    document.write( x  +"<br/>");
}*/

//sum 10 number
/*var sum = 0;
for(var x = 1; x <= 10; x = x + 1){
 sum = sum + x
}
document.write("sum = " +sum);*/

// terms of natural numbers and their sum.
/*var sum = 0 ;
for(var x = 1; x<=10; x = x + 1 ){
    sum = sum + x
    document.write("number " + x +"<br/>" );
}

document.write("The Sum of Natural Number upto 7 terms :" + sum)
*/

//10 numbers from the keyboard and find their sum and average.

/*var sum = 0 ;
var average = 0;

for (var x = 1 ; x <= 10; x = x + 1 ){
    sum = sum + x;
    average = sum / x;

}
document.write("average :" + average +("<br/>"));

document.write("sum :" + sum);
*/

//display the cube of the number up to an integer.
/*for(var x = 1; x <=10; x++){

  document.write("Number is : " + x + " and cube of the 1 is : " + x ** 3 + "<br/>");
}*/

// multiplication table for a given integer.
/*var n = 15;
for(var x = 1 ; x <= 10; x++){
    multi = n * x;
    document.write(n + " x " + x + " = " + multi +"<br/>");
}*/

//multiplier table vertically from 1 to n.

for(var i = 1; i <= 10; i++){
   
    for(var j = 1; j <= 12; j++){
        multi = i * j;
        document.write(i + " x " + j + " = " + multi +"<br/>");
       
    }
      
}




/*-------------------while loop---------------------*/


//------------1+2+4+5........+10-------------------
/*var i =  1;
var sum = 0;
while (i <= 10 ) {
    sum = sum + i;
  //  document.write("" + i);
    i = i + 1;
}
document.write(sum);
document.write("<h1>end<h1/>");*/

//---------------------2+4+6....+100-----------------------------
/*var i =  2;
var sum = 0;
while (i <= 100 ) {
    sum = sum + i;
    i = i + 2;
}
document.write(sum);
document.write("<h1>end<h1/>");*/

//----------------divisible by 3 and 5 from-100-------------------
/*var x = 1;
var sum = 0;
while (x <= 100) {
    if (x%3==0 && x%5==0) {
        sum = sum + x;
        document.write(" " + x);
    }
    x++;
}
document.write(" sum = " + sum);*/
