const Animal = require("./Animal.js");

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species);
    this.furColor = furColor;
}

groom() {
    console.log(`${this.name} is brushing their ${this.furColor}`);
}
}

module.exports = Mammal;