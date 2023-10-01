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
 
// promise part-1-----------------------------------------------------------
/*console.log("wellcome");


// rakte parle resolve or reject
const promise1 = new Promise((resolve, reject) => {
    // 
    setTimeout(() => {
        resolve("completed promise 1")
    }, 2000);
});
const promise2 = new Promise((resolve,reject) => {
setTimeout(() => {
    resolve("completed promise 2")
}, 1000);
});
// promise1.then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })
// //console.log(promise1);

// promise2.then((res) => console.log(res));
Promise.race([promise1,promise2]).then((res) => console.log(res));
//Promise.all([promise1,promise2])
// .then(([res1, res2]) => console.log(res1 , res2));
console.log("end");*/

// promise part-1---------------------------------------------------------------------
/*console.log("welcome");
const taskOne = () => {
    return new Promise((resolve, reject) => {
        reject("task 1 is not completed")
    });
};
const taskTow = () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve("task 2 is completed")
       }, 2000);
    });
};
const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve("task 3 is completed")
    });
};
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("task 4 is completed")
    });
}
taskOne()
.then((res) => console.log(res))
.then(taskTow)
.then((res) => console.log(res))
.then(taskThree)
.then((res) => console.log(res))
.then(taskFour)
.then((res) => console.log(res))
.catch(err => console.log(err));
console.log("Bye");*/


// async await javascript--------------------------------------------------
console.log("welcome");
const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("task 1 is completed")
    });
};
const taskTow = () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve("task 2 is completed")
       }, 2000);
    });
};
const taskThree = () => {
    return new Promise((resolve, reject) => {
        reject("task 3 is not completed")
    });
};
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("task 4 is completed")
    });
}
// async function callAllTasks(){
 const callAllTasks =   async() => {
try{
    const t1 = await taskOne();
console.log(t1);
const t2 = await taskTow();
console.log(t2);
const t3 = await taskThree();
console.log(t3);
const t4 = await taskFour();
console.log(t4);
}catch (e){
console.log(e);
}
}
callAllTasks();
console.log("Bye");










