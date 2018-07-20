// Object- oriented programing in javaScript
// an introduction to oop
// constructor functions
// using classes in javascript
// prototypes
// public and private methods
// inheritance
// creating objects from objects
// adding methods to built in objects
// mixins
// chaining functions
// this and that
// borrowing methods from prototypes
// our project -- create questions in an oop way
// encapsulation
// all the programming logic inside an object and making methods available to implement the functionality, without the outside world needing to know how it’s done.
// polymorphism
// this means various objects can share the same method, but also have the ability to override shared methods with a more speci c implementation.
// inheritance
// We can then improve on its functionality by adding new properties and methods.
// classes
// Many object-oriented languages, such as Java and Ruby, are known as class-based languages. This is because they use a class to de ne a blueprint for an object. Objects are then created as an instance of that class, and inherit all the properties and methods of the class. In my juicer example, the juicer class would represent the design of the juicer, and each juicer that’s made on the production line would be instances of that class.
// JavaScript didn’t have classes before ES6, and used the concept of using actual objects as the blueprint for creating more objects. This is known as a prototype- based language. In the juicer example, this might involve building an actual prototype juicer then using this prototype as the basis for making all the other juicers. The juicers based on the prototype would be able to do everything the prototype could do, with some being able to do even more. Even though ES6 now supports classes, it still uses this prototypal inheritance model in the background.
// Constructor Functions
// normal way
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}
// Constructor function
const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}
// Es6 class declarations
class Dice {
    constructor(sides=6) {
    this.sides = sides;
    }
    roll() {
    return Math.floor(this.sides * Math.random() + 1)
    }
}
// Static methods
// static keyword can be used in a class declarations to create a static method.
class Dice {
    constructor(sides=6) {
    this.sides = sides;
    }
    roll() {
    return Math.floor(this.sides * Math.random() + 1)
    }
    static description() {
    return 'A way of choosing random numbers'
    }
}
// protoypal inheritance
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
        }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
    return `Feel the power of my ${this.weapon}!`;
    }
}
// finding out the prototype
raph.constructor.prototype;
// << Turtle { attack: [Function], weapon: 'Hands' }
// own properties and prototype properties
// Every object has a hasOwnProperty() method that can be used to check if a method is its own property, or is inherited from the prototype:
raph.hasOwnProperty('name');
// << true
raph.hasOwnProperty('weapon');
// << false
const don = new Turtle('Donatello');
// << Turtle { name: 'Donatello' }
don.weapon;
// << 'Hands'
leo.weapon = 'Katana Blades';
// << 'Katana Blades';
raph.weapon = 'Sai';
// << 'Sai'
don.weapon = 'Bo Staff';
// << 'Bo Staff'
// leo
//  << Turtle { name: 'Leonardo', weapon: 'Katana Blades'
// }
// leo.attack();
// << 'Feel the power of my Katana Blades!'
// Create a class declaration that deals with any initialization, shared properties and methods.
// Any extra methods and properties that need to be augmented to the class declaration after it’s been de ned can be added to the prototype. These will be added to all instances, even those that have already been created.
// Add any properties or methods that are individual to a particular instance can be augmented using assignment to that object (a mixin could be used to add multiple properties at once, as we’ll see later).
// Be careful when overwriting the prototype completely ― the constructor class needs to be reset.
const mike = new Turtle('Michelangelo');
mike.eat();
// << 'Mmm, this Pizza tastes great!'
mike.weapon = 'Nunchakus';
// << 'Nunchuks'
mike.attack();
// << 'Feel the power of my Nunchakus!'
// Public and private methods
raph.weapon
// << 'Sai'
raph.weapon = 3;
// << 3
class Turtle {
    constructor(name,color) {
    this.name = name;
    let _color = color;
    this.setColor = color => { return _color = color; }
    this.getColor = () => _color;
    }
}raph = new Turtle('Raphael','Red');
// << Turtle 
// { name: 'Raphael', setColor: [Function],getColor: [Function] } 
//  raph.getColor();
// << 'Red'
// raph.setColor(4);
// << 4
this.setColor = (color) => {
    if(typeof color === 'string'){
        return _color = color;
        } else {
        throw new Error('Color must be a string');} 
}
raph.setColor(4);
// << Error: Color must be a string
// Inheritance
// the prototype chain
Object.getPrototypeOf(raph)
// << Turtle {}
Object.getPrototypeOf(Object.getPrototypeOf(raph))
// << {}
// Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototy  peOf(raph)))<< null
// the object constructor 
raph.makePizza();
// << TypeError: raph.makePizza is not a function
// property attributes and descriptors
// All object properties have the following attributes stored in a property descriptor: value ― This is the value of the property and is undefined by default
// writable ― This boolean value shows whether a property can be changed or not, and is false by default
// enumerable ― this boolean value shows whether a property will show up when the object is displayed in a for in loop, and is false by default
// configurable ― this boolean value shows whether you can delete a property or change any of its attributes, and is false by default.
const me = { name: 'DAZ' };
// { value: 'DAZ', writable: true, enumerable: true,  configurable: true }
me.age = 21;
// << 21
// Getting and setting property descriptors
Object.getOwnPropertyDescriptor(me,'name');
// << { value: 'DAZ',
// writable: true,
// enumerable: true,
// configurable: true }
Object.defineProperty(me, 'eyeColor', { value: 'blue', writable: false, enumerable: true });
// << { name: 'DAZ', age: 21, eyeColor: 'blue' }
me.eyeColor = 'purple'
// << 'purple'
me.eyeColor
// << 'blue'
// Getters and setters
me.age = 21;
me.retirementAge = 65;
Object.defineProperty(me, 'yearsToRetirement',{
get() {
if(this.age > this.retirementAge) { return 0; }
else { return this.retirementAge - this.age; }
},
set(value) {
this.age = this.retirementAge - value;
return value;
}
});
// object based inheritance
Superhuman.init = function(name,realName){
    this.name = name;
    this.realName = realName;
    this.init = undefined; 
    // this line removes the init ➥ function, so it can only be called once
    return this;
}
const batman = Object.create(Superhuman);
batman.init('Batman','Bruce Wayne');
batman.change();
// << 'Bruce Wayne goes into a phone box and comes out as
// ➥ Batman!'
// mixins
function mixin(target,...objects) {
    for (const object of objects) {
    if(typeof object === 'object') {
        for (const key of Object.keys(object)) {
            if (typeof object[key] === 'object') {
            target[key] = Array.isArray(object[key]) ? [] : {};
            mixin(target[key],object[key]);
            } else {
            Object.assign(target,object);
            }
}
} }
    return target;
}
// Borrowing array methods
const slice = Array.prototype.slice;
slice.call(arguments, 1, 3);
[].slice.call(arguments, 1, 3)
// const argumentsArray =
// ➥ Array.prototype.slice.call(arguments);
// Polymorphism allows objects to override shared methods with a more speci c implementation.
// The value of this is not retained inside nested functions, which can cause errors. This can be worked around by using that = this, using the bind(this) method and using arrow functions.
// Methods can be borrowed from other objects.
// Composition over inheritance is a design pattern where objects are composed from “building-block” objects, rather than inheriting all their properties and methods from a parent class.
// Object-oriented programming (OOP) is a way of programming that uses objects that encapsulate their own properties and methods.
// The main concepts of OOP are encapsulation, polymorphism and inheritance. Constructor functions can be used to create instances of objects.
// ES6 introduced class declarations that use the class keyword. These can be used in place of constructor functions.
// Inside a constructor function or class declaration, the keyword this refers to the object returned by the function.
// All instances of a class or constructor function inherit all the properties and methods of its prototype.
// The prototype is live, so new properties and methods can be added to existing instances.
// The prototype chain is used to  nd an available method. If an object lacks a method, JavaScript will check whether its prototype has the method. If not, it will check that function’s prototype until it  nds the method or reaches the Object constructor function.
// Private properties and methods can be created by de ning variables using const and de ning a function inside a constructor function. These can be made public using getter and setter functions.
// Monkey-patching is the process of adding methods to built-in objects by augmenting their prototypes. This should be done with caution as it can cause unexpected behavior in the way built-in objects work.
// A mixin method can be used to add properties and methods from other objects without creating an inheritance chain.
// Methods can be chained together and called in sequence if they return a reference to this.