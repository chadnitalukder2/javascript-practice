//Destructuring array and objects---------------------------------------------------------
/*let number = [10, 20, 30, 40, 50]
let [num1, num2, num3, num4, name5] = number;

console.log(num1);
console.log(num2);*/

//swap variables
/*let a = 10, b = 20;
[a,b] = [b,a]
console.log(a);
console.log(b);*/

// object Destructuring
/*const studentInfo = {
    id : 101,
    fullname : "chadni talukder",
    gpa : 3.92,
    languages: {
        native : "bangla",
        beginner : "english",
    }
}
const{id, fullname,languages} = studentInfo
console.log(id);
console.log(languages.native);
// console.logs(studentInfo.id);
// console.logs(studentInfo.fullname);
// console.logs(studentInfo.gpa);*/

//Destructuring function parameters
/*const studentInfo = ({id, fullName}) => { 
console.log(`${id}, ${fullName}`);
}
const student = {
    id : 102,
    fullName : "nitesh das",

}
studentInfo(student);*/


// array methods | find() | findIndex()------------------------------------------------------------------------

//find(callback , value) return the value of the first element that pass certain condition
/*let number = [5,55,34,14,4,78];
const evenNumber = (value,index,array) => {
    if(value%2===0)
    return value;
}
// let firstEvenNumber = number.find(evenNumber );
// console.log(firstEvenNumber);
let firstEvenNumberIndex = number.findIndex(evenNumber );
console.log(firstEvenNumberIndex);*/

//object methods
/*const student = [
    {
        id : 101,
        gpa : 2.67,
    },
    {
        id : 102,
        gpa : 3.55,
    },
    {
        id : 103,
        gpa : 4.93,
    },
    {
        id : 104,
        gpa : 5,
    }
]

console.log(student.find(x => x.gpa>4));*/


//String methods | startsWith, endsWith, includes-----------------------------------------------------------------------------
//string.endsWith() length
//string.includes() position
//all these methods are case sensitive

//string.startsWith()  position
/*const message = "today is friday"
console.log(message.startsWith("today",0));
console.log(message.endsWith("friday"));
console.log(message.includes("is"));*/


// ES6 modules and class---------------------------------------------------------------------------
/*import {text,setText} from './myModule.js'
console.log(text);
setText("good bye from es6");
console.log(text);*/





























































































