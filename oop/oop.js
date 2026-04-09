// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We’ll build a Virtual Zoo starting from a simple object and evolving into
// a full oop implementation using Encapsulation, Inheritance, and Polymorphism.

const lion = {
    name: "Simba",
    species: "Lion",
    makeSound: function() {
        console.log(`${this.name} Says: ROAR!!`);
        
    }
}

lion.makeSound();

// Class Template (Encapsulation)

class Animal {
    constructor(name,species) {
        this.name = name;
        this.species = species;
        this._hunger = 50;

}
makeSound() {
        console.log(`${this.name} make a sound...`);
    }
eat() {
    this._hunger -= 10
    console.log(`${this.name} the ${this.species} ate . Hunger is now ${this._hunger}`);
} 
changeName(newName) {
this.oldname = this.name;
this.name = this.newName;
console.log(`old name${this.name} changeName is ${this.newName}`)
}
}
// Object instance
const leo = new Animal ("Leo", "Lion");
console. log(leo);
console. log (leo._hunger);
leo. eat () ;
console.log (leo._hunger);

const leo = new changeName ("Momo")
leo.changeName()


// specialized classes (inheritence)
class Mammal extends Animal {
    constructor(name, species, furcolor){
        super(name, species); //call the parent constructor
        this.furcolor = furcolor;
     }
     groom() {
        console.log(`${this.name} is burshimg their ${this.furcolor} fur.`);
     }
}

const dog1 = new Mammal ("dorla", "Shiba", "white")
const dog3 = new Mammal ("dorla", "Buck", "white")
const dog4 = new Mammal ("dorla", "", "white")
console.log(dog);


class Bird extends Animal {
    constructor(name, speciess, wingspan) {
        super(name, speciess);
        this.wingspan = wingspan;
}
// this is an example of polymorphism; overide the parent's method
    makeSound() {
        console.log(`${this.name} chirps: Tweet! Tweet`);
    }
}

