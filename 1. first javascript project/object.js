
/*var student1 = {
    name : "Chadni talukder ",
    age : "19",
    CGPA : 4.33,
    lang : ["Bengali", "Hindi", "English"]
}
console.log(student1.name);*/

//addin a construtor
function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    /*//adding function inside a construct
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.lang);
    }*/
}

var student1 = new Student( "Chadni talukder ","19", 4.33, ["Bengali", "Hindi", "English"]);
var student2 = new Student( "Sufia talukder ","23", 4.33, ["Bengali", "Hindi", "English"]);
var student3 = new Student( "Linkon talukder ","25", 4.33, ["Bengali", "Hindi", "English"]);

//student1.display();
//student2.display();
console.log(student1.name);
console.log(student1.age);
console.log(student2.name);



