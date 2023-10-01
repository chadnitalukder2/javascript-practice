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
const studentInfo = ({id, fullName}) => { 
console.log(`${id}, ${fullName}`);
}
const student = {
    id : 102,
    fullName : "nitesh das",

}
studentInfo(student);








































































































