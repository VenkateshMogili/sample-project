// // Overridding and Overloading.

// // If a class has multiple methods having same name but different in parameters, it is known as Method Overloading
// // function a(){
// //   console.log('a printed')
// // }
// // function a(name){
// //   console.log('Name :',name);
// // }
// // function a(){
// //   console.log('a is printed again');
// // }

// // a();

// class Person{
//   constructor(name,designation){
//     this.name=name;
//     this.designation=designation;
//   }
//   getBasicDetails=()=>{
//     console.log("Name :",this.name);
//     console.log("Designation :",this.designation);
//   }
//   learn=()=>{
//     console.log('Learning something today!');
//   }
//   eat=()=>{
//     console.log('Eating')
//   }
//   sleep=()=>{
//     console.log('Sleeping')
//   }
// }

// let person=new Person('Human','No Designation');
// // person.getBasicDetails();

// class Developer extends Person{
//   coding=()=>{
//     console.log('JavaScript Coding...');
//   }
//   learn=()=>{
//     console.log('Learning OOPS Concepts in JavaScript!');
//   }
// }
// let venkatesh = new Developer('Venkatesh','Full Stack Developer');
// // venkatesh.getBasicDetails();
// // venkatesh.coding();
// // venkatesh.learn();
// // venkatesh.learn('JavaScript');

// class Dancer extends Person{
//   dancing=()=>{
//     console.log('Classical Dancing...');
//   }
//   learn=()=>{
//     console.log('Learning Bharatha Natyam!');
//   }
// }
// let ramani = new Dancer('Ramani','Classical Dancer');
// // ramani.getBasicDetails();
// // ramani.dancing();
// // ramani.learn();


// class Mobile{
//   constructor(name,initialCharging){
//     this.mobileName=name;
//     this.initialCharging=initialCharging;
//     var currentCharging=0;

//     var chargingDetails = ()=>{
//       let totalCharging=this.initialCharging+currentCharging;
//       if(totalCharging>100){
//         throw Error('Your device is fully charged, Please plug-out');
//       }
//       console.log('Mobile got charged '+totalCharging+' %');
//     }
//     this.plugInCharge = (charging)=>{
//       console.log('Mobile Name : ',this.mobileName);
//       currentCharging=charging;
//       chargingDetails();
//     }
//   }
// }

// // Creating Mobile
// let redmi = new Mobile('Redmi Note 7',20);
// redmi.plugInCharge(80); //Expected output 100% charged.✔️
// redmi.chargingDetails(); //It can't be accessed❌
// redmi.plugInCharge(200); //It will throw Error❌



// // function Mobile(name,initialCharging){
// //   this.mobileName=name;
// //   this.initialCharging=initialCharging;
// //   var currentCharging=0;

// //   var chargingDetails = ()=>{
// //     let totalCharging=this.initialCharging+currentCharging;
// //     if(totalCharging>100){
// //       throw Error('Your device is fully charged, Please plug-out');
// //     }
// //     console.log('Mobile got charged '+totalCharging+' %');
// //   }
// //   this.plugInCharge = (charging)=>{
// //     console.log('Mobile Name : ',this.mobileName);
// //     currentCharging=charging;
// //     chargingDetails();
// //   }
// // }

// // // Creating Mobile
// // let redmi = new Mobile('Redmi Note 7',20);
// // // redmi.plugInCharge(80); //Expected output 100% charged.✔️
// // // redmi.chargingDetails(); //It can't be accessed❌
// // redmi.plugInCharge(200); //It will throw Error❌





// // class Bank{
// //   constructor(name,account_type){
// //     var name=name;
// //     var account_no;
// //     var account_type=account_type;
// //     var balance = 0;

// //     // Set methods
// //     this.setName=(newName)=>{
// //       name = newName;
// //     }
// //     this.setAccountNum = ()=>{ //generates a random and unique number.
// //       account_no=Math.floor(Math.random() * 9000000000);
// //     }
// //     this.setAccountType = (accountType)=>{
// //       account_type=accountType;
// //     }
// //     this.setBalance=(newBalance)=>{
// //       if(newBalance>0 && newBalance<1000){
// //         balance+=newBalance;
// //       } else{
// //         throw Error('Invalid amount');
// //       }
// //     }

// //     // Get methods
// //     this.getName=()=>name;
// //     this.getAccountNum = ()=>account_no;
// //     this.getAccountType = ()=>account_type;
// //     this.getBalance = ()=>balance;
// //   }

// // }


// // // Creating Accounts
// // let venkatesh = new Bank('Venkatesh','Savings');
// // venkatesh.setAccountNum();
// // console.log('Name 🧍: ',venkatesh.getName()); 
// // console.log('Account No: ',venkatesh.getAccountNum());
// // console.log('Account Type: ',venkatesh.getAccountType());

// // let chinni = new Bank('Chinni','Current');
// // chinni.setAccountNum();
// // console.log('Name 🧍‍♀️: ',chinni.getName());
// // console.log('Account No: ',chinni.getAccountNum());
// // console.log('Account Type: ',chinni.getAccountType());

// // let hacker = new Bank('Hacker','Savings');
// // hacker.setBalance(-100);
// // console.log(hacker.getBalance());








class Mobile{
  constructor(color,name){
    this.color=color;
    this.name=name;
  }
  calling(){
    console.log('Call to Chinni');
  }

  playPUBG(){
    console.log('Intro music🎵 -> Shoot enemy🔥 -> Close and Sleep😴');
  }

  takePicture(){
    console.log('Smile Please 😃 -> Nice, Keep smiling like this');
  }  
}

let apple = new Mobile('black','apple');
let redmi = new Mobile('silver','redmi');

console.log('Apple Mobile 📱 is ready 😃: ',apple);
console.log('Redmi Mobile 📱 is ready 😃: ',redmi);

// Properties/Attributes
console.log('What is the color of apple mobile?', apple.color);

// Actions/Functions
apple.calling(); //☎️
redmi.playPUBG(); // 🎮
apple.takePicture(); // 📷


