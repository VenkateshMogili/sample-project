// Declaration and Initialization
// user=5;//?
// var user=10;//?
// let user2=20;//?
// const user3=30;//?
// console.log(user3);

// Scope (Local, Global , Block)
// var test=20;
// let sample="check";
// const sample2="check2";
// function variableTest(){
//     let sample="checking";
//     var test=10;
//     let test2=30;
//     if(test===10){
//         let test4=40;
//         var test5=20;
//         const test6="ok";
//         // console.log(test);
//     }
//     test3=40;
//     console.log(test5,test6);
//     console.log(sample,sample2);
// }
// variableTest();
// console.log(test,test3);

// Redeclaration
// var declare="sample";
// var declare="value changed";
// declare="again changed";
// let declare=5;
// const declare=10;
// console.log(declare);






// Reinitialization for primitive data types
// var add=10;
// add=20;
// add=30;
// let minus=20;
// minus=40;
// const pi=3.14;
// pi=10;
// console.log(pi);













// Reinitialization for reference data types
const students=[1,2,3,4,5];
students.push(6);
const teachers=[...students];
teachers.push(7);
console.log(teachers);
console.log(students);



const user={name:"Venkatesh"};
user.age=20;
const admin=JSON.parse(JSON.stringify(user));
admin.age=30;
console.log(admin);
console.log(user);


var student = "Venkatesh";
let mobile="Redme Note7";

// data_type     variable      value
// var           student       Venkatesh
// let           mobile        Redme Note7
// const        students       10001
// const         user          10002
// const        teachers       10001

// reference_number     value
// 10001                [1,2,3,4,5]
// 10002                {name:"Venkatesh"}