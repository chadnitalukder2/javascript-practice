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
/*const taskOne = () => {
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
task5();*/

// callback and higher order function-----------------------------------------------------------
/*function square(x){
    console.log(`square of ${x}: ${x*x}`);
}
square(5);
// const y = square
// y(7)

function higherOrder (num, callback) {
    callback(num)

}
higherOrder(6,square)*/

/*const taskOne = (callback) => {
    console.log("task1");
    callback();
};

const task2 = (callback) => {
   setTimeout(() => {
console.log("task2. data loading");
callback();
   }, 3000);
};
const task3 = () => {
    console.log("task3");
};

taskOne(() =>{
    task2(() => {
        task3();
    });
});*/

/*console.log("hi");
document.querySelector("button").addEventListener("click", ()=>{
    console.log("button is clicked");
});
console.log("bye");
*/





















