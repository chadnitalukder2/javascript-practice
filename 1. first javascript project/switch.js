/*-----------switch------------*/
//----------------------enter any digit soutput sppiling-------------------
/*var digit = prompt("enter any digit: ");

switch (digit) {
  case "0":
    document.write("Zero");
    break;
  case "1":
    document.write("one");
    break;
  case "2":
    document.write("two");
    break;
  case "3":
    document.write("three");
    break;
  case "4":
    document.write("four");
    break;
  case "5":
    document.write("five");
    break;
  case "6":
    document.write("six");
    break;
  case "7":
    document.write("seven");
    break;
  case "8":
    document.write("eight");
    break;
  case "9":
    document.write("nine");
    break;
    default:
        document.write("not a digit");
}*/

//--------------------------------vowel or consonent---------------------------
/*var letter = prompt("enter a letter: ");
letter = letter.toLowerCase();

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o" :
  case "u":
    document.write("vowel");
    break;
    default:
        document.write("consonent");
}*/

//---------------positive negative zero-----------------
/*var num = parseInt(prompt("enter any number : "));

switch (true) { // Use true for comparison
  case num > 0:
    document.write("Positive " + num);
    break;
  case num < 0:
    document.write("Negative " + num);
    break;
  default:
    document.write("Zero " + num);
}*/

//+ , - ,* /

var num1 = parseFloat(prompt("Enter the first number: "));
var op = prompt("Enter an operator (+, -, *, /): ");
var num2 = parseFloat(prompt("Enter the second number: "));
var result;

switch (op) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      document.write("Division by zero is not allowed.");
      break;
    }
    break;
  default:
    document.write("Invalid operator");
}

if (typeof result !== 'undefined') {
  document.write("Result: " + result);
}
