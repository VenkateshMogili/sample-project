// #1. Creating Encapsulated class
class Bank{
  constructor(name,account_no,account_type){
    var name = name;
    var account_no = account_no;
    var account_type = account_type;
    this.getName =()=>{
      return name;
    }
    this.getAccountNum=()=>{
      return account_no;
    }
    this.getAccountType=()=>{
      return account_type;
    }
  
    var setName = (newName)=>{
      name = newName;
    }
    this.setAccountNumber=()=>{
      account_no = Math.floor(Math.random()*9000000000);
    }
    this.setAccountType=(accountType)=>{
      account_type = accountType;
    }
  }
  
}

// #2. Creating/Instantiating objects by using class
let venkatesh = new Bank('Venkatesh',null,'Savings');
let chinni = new Bank('Chinni',null,'Current');

// #3. Getting/Setting the properties and actions with created object.
venkatesh.setAccountNumber();
console.log(venkatesh.getAccountNum());
console.log(venkatesh.getAccountNum());

// console.log(venkatesh.name);
// venkatesh.setName("Vivek");
// console.log(venkatesh.getName());
// venkatesh.setAccountNumber();
// console.log(venkatesh.getAccountNum());
// console.log(chinni.getName());
// chinni.setAccountNumber();
// console.log(chinni.getAccountNum());