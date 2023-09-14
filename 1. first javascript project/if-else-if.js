
/*----Corditional -> if , else if,  else -swutch-------*/

//--------------------------------even/odd-------------------------
/*var num = 5;

if (num % 2 == 0)
    console.log("Even");
else
 console.log("Odd");*/

//if(num%2!==0);

///----------------------positive / negative-------------------------------
/*var num = 6;
if (num > 0)
  console.log("Positive");
else if (num < 0)
  console.log("Negative");
else
  console.log("Zero");*/

/*----------------------------- letter grade------------------------------*/
/*var marks = parseFloat(prompt("Enter your Marks: "));

 if(marks>100 || marks < 0){
    document.write("invalid marks");
 }

 else if(marks >= 80 && marks<=100){
    document.write("Your Grade is : B ");
 }
 else if (marks >= 70 && marks<=79) {
    document.write("Your Grade is : A ");
}

else if (marks >= 60 && marks<=69) {
    document.write("Your Grade is : A- ");
}
 else if(marks >= 50 && marks<=49){
    document.write("Your Grade is : B ");
 }

 else if(marks >= 40 && marks<=49){
    document.write("Your Grade is : c ");
 }
 
 else if(marks >= 33 && marks<=39){
    document.write("Your Grade is : D ");
 }

 else {
    document.write("Your Grade is : F ");
 }*/

 /*-----------------------------large number------------------------------*/
/*var num1 = prompt("Enter num1 : ");
var num2 = prompt("Enter num2 : ");
var num3 = prompt("Enter num3 : ");

if(num1>num2 && num1>num3){
document.write("Large number = " + num1);
}

else if(num2>num1 && num2>num3){
    document.write("Large number = " + num2);
    }
    else{
        document.write("Large number = " + num3);
        }*/

//---------------------------vowel / consonant------------------------------
/*var letter = prompt("Enter a letter : ");

letter = letter.toLowerCase();

if(letter== "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    document.write("Vowel");

    /*else if(letter== "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"){
    document.write("Vowel");
}

else {
    document.write("Consonant");
}
*/

/*--------------C program to check number is divisibility by 5 and 11-------- */
/*var num = prompt("Enter a letter : ");

if ( (num % 5 == 0) && (num % 11 == 0)){
    document.write("Number is divisible by 5 and 11");
}

else
document.write("Number is not divisible by 5 and 11");*/

// --------------------min between 5 number--------------------------------------
/*var num1 = prompt("Enter number one :");
var num2 = prompt("Enter number tow :");
var num3 = prompt("Enter number three :");
var num4 = prompt("Enter number four :");
var num5 = prompt("Enter number five :");

if(num1<num2 && num1<num3 && num1<num4 && num1<num5){
    document.write("minimum number : " +num1)
}
else if(num2<num1 && num2<num3 && num2<num4 && num2<num5){
    document.write("minimum number : " +num2)
}
if(num3<num1 && num3<num2 && num3<num4 && num3<num5){
    document.write("minimum number : " +num3)
}
else if(num4<num1 && num4<num1 && num4<num3 && num4<num5){
    document.write("minimum number : " +num1)
}
else{
    document.write("minimum numbe: " +num5)
}*/

//-------------------------- + ,- ,* ,/-----------------------------------------
/*var num1 = parseFloat(prompt("enter a number: "));
var operator = prompt("enter a oparator: ")
var num2 = parseFloat(prompt("enter a number: "));
 var result
if(operator === "+"){
    document.write(result = num1 + num2);
}
else if(operator === "-"){
    document.write(result = num1 - num2);
}
else if(operator === "*"){
    document.write(result = num1 * num2);
}
else if(operator === "/"){
    document.write(result = num1 / num2);
}
else{
    document.write("Invalid operator")
}*/

//--------------------------------leap year--------------------------------------
/*var year = prompt("enter year: ");

if(year % 4 == 0 ){
    document.write("leap year");
}
else{
    document.write("not leap year");
}*/

//----------------------------alphabet or not------------------------------------
/*var alphabet = prompt("enter alphabet: ");

if((alphabet>="A") && (alphabet <= "Z") || (alphabet>="a") && (alphabet <= "z")){
    document.write("alphanet");
}
else{
    document.write("not alpabet")
}*/

// -------------------------alpabet or digit--------------------------------------
/*var letter = prompt("enter charcter: ")

if((letter >="A" && letter<="Z") || (letter>="a" && letter<="z")){
    document.write("alpaber:" +letter)
}
else if(letter >="0" && letter<="9"){
    document.write("digit:" +letter)
}
else {
    document.write("special: " +letter)
}*/

//-----------------------uppercase or lowercase---------------------------------
/*var letter =prompt("enter a letter :" );

if(letter>="A" && letter<="Z"){
    document.write("uppercase : " +letter);
}
else{
    document.write("lowercase : " +letter);
}*/

//---------------input week number and print week day.--------------------------
/*var week =prompt("input a number: ");

if(week == 1){
    document.write("week name is Saturday ")
}
else if(week == 2){
    document.write("week name is Sunday ")
}
else if(week == 3){
    document.write("week name is Monday ")
}
else if(week == 4){
    document.write("week name is Tuesday ")
}
else if(week == 5){
    document.write("week name is Wednesday ")
}
else if(week == 6){
    document.write("week name is Thursday ")
}
else if (week == 7){
    document.write("week name is Friday ")
}
else{
    document.write("Invalid Input! ")
}
*/

//-----------input month number and print number of days in that month.----------
/*var month = prompt("enter a month name: ");

if(month === "January"){
    document.write( month + " 31 days");
}
else if(month === "February"){
    document.write(month + " 28 /29 days");
}
else if(month === "March"){
    document.write(month + " 31 days");
}
else if(month === "April"){
    document.write(month + " 30 days");
}
else if(month === "May"){
    document.write(month + " 31 days");
}
else if(month === "June"){
    document.write(month + " 30 days");
}
else if(month === "July"){
    document.write(month + " 31 days");
}
else if(month === "August"){
    document.write(month + " 31 days");
}
else if(month === "September"){
    document.write(month + " 30 days");
}
else if(month === "October"){
    document.write(month + " 31 days");
}
else if(month === "November"){
    document.write(month + " 30 days");
}
else if(month === "December"){
    document.write(month + " 31 days");
}
else{
    document.write(month + " invalid");
}*/

//-----------------------x+y = 15, x-y =5 x and y = ?-------------------------------
/*var x = 3;
var y = 4;
 var result = (x + y) ** 2;
 document.write("result =" +result);*/

   