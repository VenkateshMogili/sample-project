// #1. Creating Abstract class
class Mobile{
  constructor(name,color,initialCharging){
    this.name = name;
    this.color=color;
    this.initialCharging = initialCharging;
    var currentCharging = 0;
    var chargingDetails=(charge)=>{
      currentCharging=this.initialCharging+charge;
      if(currentCharging>100){
        throw Error("Mobile is fully charged");
      }
      console.log("Current Charging "+currentCharging);
    }
    this.plugInCharge = (charge)=>{
      chargingDetails(charge);
    }
  }
}

// #2. Creating/Instantiating objects by using class
let redmi = new Mobile('Redmi Note 7','Black',20);
let apple = new Mobile('Apple','Silver',20);

// #3. Getting/Setting the properties and actions with created object.
// redmi.plugInCharge(30);
// redmi.currentCharging=200;
// console.log(redmi.name);
// console.log(redmi.color);
console.log(redmi);
// console.log(redmi.plugInCharge(100));