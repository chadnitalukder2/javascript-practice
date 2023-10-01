/*export let text = "hello to modulle";

function setText(txt){
    text = txt;
}*/


//class
/*class student {
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

console.log(s1.studentInfo);*/

// Synchronous vs Asynchronous----------------------------------------------------------
const taskOne = () => {
    console.log("task1");
};
const dataloading = () => { //Asynchronous
    console.log("task2. data loading");
}
const task2 = () => {
   setTimeout(dataloading,2000) ;
};
const task3 = () => {
    console.log("task3");
};
const task4 = () => {
    console.log("task4");
};
const task5 = () => {
    console.log("task5");
}
taskOne();
task2();
task3();
task4();
task5();


























