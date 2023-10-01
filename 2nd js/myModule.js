/*export let text = "hello to modulle";

function setText(txt){
    text = txt;
}*/


//class
class student {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    set studentName(name){
        this.name = name;
    }
    get studentInfo(){
        return this.id + " " +this.name;
    }
}
let s1 = new student(101,"puja")
console.log(s1);

s1.studentName = "nitsh"
console.log(s1.name)

console.log(s1.studentInfo);