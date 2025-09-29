'use strict';

// console.log(varX); 
// // console.log(letX);
// // console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// function addDecl(a, b) {
//     return a + b;
// }
// const addExpr = function(a, b) {
//     return a + b;
// };

// const addArrow = (a, b) => a + b;

// const person = {
//     name: 'A-j',
//     greet: function() {
//         console.log(`Hello I am ${this.name}`);
//     }    
// };

// person.greet();

// const anotherPerson = { name: 'Arjay' };

// // Borrow greet function
// anotherPerson.greet = person.greet;

// // Display or run the greet function for anotherPerson
// anotherPerson.greet();

// // Detached function
// const greetFunction = person.greet;

// greetFunction();

// const obj = {
//     name: 'Objects',
//     regularMethod: function() {
//         console.log('Regular:', this.name);
//     },
//     arrowMethod: () => {
//         console.log('Arrow:', this.name);
//     },
// };

// obj.regularMethod();

// obj.arrowMethod();

// // Before running, predict the output;
// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod(); // Predict: ?
// quiz.arrowMethod(); // Predict: ?

// const timer = {
//   name: 'Timer',
//   start: function () {
//     console.log(`${this.name} starting...`);
    
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     }, 1500);
//   }
// };

// timer.start();
// timer.startModern();

// const functionTypes = {
//     regularFunction: function() {
//         console.log('Argument length:', arguments.length);
//         console.log('First argument:', arguments[0]);
//     },

//     arrowFunction: () => {
//         console.log(arguments);
//         console.log('Arrow function called');
//     },

//     modernFunction: (...args) => {
//         console.log('Args length:', args.length);
//         console.log('First arg:', args[0]);
//     }
// };

// functionTypes.regularFunction('hello', 'goodbye');
// //functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// let age = 30;

// let oldAge = age;

// age = 31;

// console.log('age', age);
// console.log('oldAge', oldAge); 

// const me = { name: 'A-j', age: 21 };

// const friend = me;

// friend.name = 'Arjay';
// friend.age = 20;

// console.log('Me:', me);
// console.log('friend:', friend);

// const original = {
//     name: 'A-j',
//     age: 21,
//     hobbies: ['eating', 'playing e-games'],
// };

// const shallowCopy = { ...original };

// shallowCopy.name = 'Arjay';

// console.log('original:', original.name);
// console.log('copy name:', shallowCopy.name);

// shallowCopy.hobbies.push('gaming');

// console.log(original.hobbies);
// console.log(shallowCopy.hobbies);

const deepOriginal = {
    name: 'A-j',
    age: 21,
    // nested object
    address: { city: 'Quezon City', country: 'Philippines' },
    // nested array
    hobbies:['eating', 'playing e-games'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'Hawaii';
deepCopy.hobbies.push('traveling');
deepCopy.name = 'Arjay';

console.log('deepOriginal:', deepOriginal);
console.log('deepCopy:', deepCopy); 