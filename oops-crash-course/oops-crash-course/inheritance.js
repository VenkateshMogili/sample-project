// #1. Creating Parent class
class Person{
  constructor(name,designation){
    this.name = name;
    this.designation = designation;
  }
  learn(){
    console.log('Learning something');
  }
  eat(){
    console.log('Eating');
  }
  sleep(){
    console.log('Sleeping');
  }
}

// #2. Extending Parent class to Child class
class Developer extends Person{
  constructor(name,designation,companyName){
    super(name,designation);
    this.companyName = companyName;
  }
  coding(){
    console.log("JavaScript coding...");
  }
}

// #3. Extending Parent class to One more Child class
class Dancer extends Person{
  constructor(name,designation,schoolName){
    super(name,designation);
    this.schoolName = schoolName;
  }
  dancing(){
    console.log("Classical Dancing...");
  }
}

// #4. Creating/Instantiating objects by using class
// let person = new Person('Human','Nothing');
// console.log(person);
// let venkatesh = new Developer("Venkatesh","Full Stack Developer","Doodleblue");
// console.log(venkatesh);
let ramani = new Dancer("Ramani","Classical Dancer","Dancing School");
console.log(ramani);


// #5. Getting/Setting the properties and actions with created object.
// venkatesh.coding();
// venkatesh.eat();
// venkatesh.learn();
ramani.dancing();
ramani.eat();
ramani.learn();