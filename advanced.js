// **Here is an example of nested functions
// let a = 10;
// let b = 50;
// function outer() {
//     let b = 20;
//     function inner(){
//         let c = 30;
//         console.log(a, b, c);
//     }
//     inner()
// }
// outer();

//  **Here is example of closure
// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count)
//     }
//     // inner();
//     return inner
// }
// // outer();
// fn = outer(); 
// fn();
// fn();
// //basically fn = inner().. I think
// //This is useful because even though is outside
// //of its scope it can still modify/ access its 
// //variables even if the outer function has finished

//Example of "this" keyword
// function sayMyName(name) {
//     console.log(`My name is ${name}` )
// }
// sayMyName('Walter White');
//#1 implicit binding
// const person = {
//     name: 'Paul',
//     sayMyName: function () {
//         console.log(`My name is ${this.name}`)
//     },
// }
// person.sayMyName()
//#2 explicit binding
// const person = {
//     name: 'Paul',
// }
// function sayMyName(name) {
//     console.log(`My name is ${this.name}` )
// }
// sayMyName.call(person)
//#3 new binding
// function Person(name) {
//     this.name = name
// }
// const p1 = new Person('Paul');
// const p2 = new Person('Greg');
//#4 default binding
// function sayMyName(name) {
//     console.log(`My name is ${this.name}` )
// }
// globalThis.name = 'Batman'
// sayMyName()

//***********
//Prototypes
// function Person(fname, lname){
//     this.firstName = fname
//     this.lastName = lname
// }
// const person1 = new Person('Bruce', 'Wayne')
// const person2 = new Person('Clark', 'Kent')
//Below works for only p1
// person1.getFullName = function(){
//     return this.firstName + ' ' + this.lastName
// }
// to make it applicable to all persons
// Person.prototype.getFullName = function(){
//     return this.firstName + ' ' + this.lastName
// }

//console.log(person1.getFullName())
//console.log(person2.getFullName())
//Prototypes also have their own type of inheritance
//this is done from using this keyword, adding the parameters
//to the child's function, and object.create
// function Superhero(fname, lname){
//     Person.call(this, fname, lname)
//     this.isSuperhero = true
// }
// Superhero.prototype.fightCrime = function(){
//     console.log('Fighting crime')
// }
// Superhero.prototype = Object.create(Person.prototype)
// const Batman = new Superhero('Bruce', 'Wayne')
// console.log(Batman.getFullName())
// Superhero.prototype.construcor = Superhero

//  ************************************
//Classes
class Person {
    constructor(fname, lname){
        this.firstName = fname
        this.lastName = lname
    }
    sayMyName(){
        return this.firstName + ' ' + this.lastName
    }
}

const p1 = new Person('Bruce', 'Wayne')
console.log(p1.sayMyName())







