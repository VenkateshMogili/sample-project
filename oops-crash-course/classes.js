// #1. Creating class
class Mobile{
  constructor(name,color){
    this.name = name;
    this.color=color;
  }
  calling(){
    console.log("Calling to chinni");
  }
  playGames(){
    console.log('Playing games');
  }
  setName(newName){
    this.name = newName;
  }
}

// #2. Creating/Instantiating objects by using class
let redmi = new Mobile('Redmi Note 7','Black');
let apple = new Mobile('Apple','Silver');

// #3. Getting/Setting the properties and actions with created object.
console.log(redmi.color);
console.log(redmi.name);
redmi.calling();
redmi.setName("Redmi Note 9 Pro");
console.log(redmi.name);