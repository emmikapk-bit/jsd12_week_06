const Animal = require("./Animal.js");

class Bird extends Animal {
  constructor(name, species, wingspan) {
  super(name, species);
  this.wingspan = wingspan;
 }

 // This is an example of polymorphism; overide the parent's method

 makeSound() {
  console.log(`${this.name} chirps: Tweet! Tweet!`);
 }
}

module.exports = Bird;