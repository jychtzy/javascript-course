// // // console.log("Part 2: Functions ready!");

// // // // Function - Declaration and Expression
// // // function logger() {
// // //     console.log("My name is Aj");
// // // }

// // // logger(); 
// // // logger(); 
// // // logger(); 

// // // console.log(fruitProcessor(5, 3));

// // // function fruitProcessor(apples, oranges) {
// // //     console.log(apples, oranges);
// // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //     return juice;
// // // };

// // // console.log(fruitProcessor(5, 3));

// // // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);

// // // // console.log(calcAge(1991));
// // // // Function Expression
// // // const calcAge    = function (birthYear) {
// // //     return 2025 - birthYear;
// // // };

// // // const age1 = calcAge(2004);
// // // console.log(age1);

// // // console.log(calcAge(1991));

// // // function introduce(firstName, lastName, age) {
// // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // //     return introduction;
// // // } 

// // // console.log(introduce("Aj", "Balibado", 21));
// // // console.log(introduce("John",)); 

// // // function yearsUntilRetirement(birthYear, firstName) {
// // //     const age = calcAge(birthYear);
// // //     const retirement = 65 - age;

// // //     if (retirement > 0) {
// // //         return `${firstName} retires in ${retirement} years.`;
// // //     } else {
// // //         return `${firstName} has already retired.`;
// // //     } 
// // // }

// // // console.log(yearsUntilRetirement(2004, "Aj"));

// // // /// function scope
// // // const globalVar = "I am global";

// // // function testScope() {
// // //     const localVar = "I am local";
// // //     console.log(globalVar);
// // //     console.log(localVar);
// // // }

// // // testScope ();
// // // console.log(globalVar);
// // // //console.log(localVar);

// // // ////////////////////////////////////
// // // // Coding Challenge #1

// // // // Function to calculate average of 3 scores
// // // function calcAverage(score1, score2, score3) {
// // //   // Your code here 
// // //     return (score1 + score2 + score3) / 3;
// // // }

// // // // Function to check winner
// // // function checkWinner(avgDolphins, avgKoalas) {
// // //   // Your code here
// // //   // Remember: team needs DOUBLE the score to win
// // //   //variable >= 2 * variable
// // //   // Use template literals for nice output
// // //     if (avgDolphins >= 2 * avgKoalas) {
// // //         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// // //     }  else if (avgKoalas >= 2 * avgDolphins) {
// // //         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // //     } else {
// // //         return `No team wins! Dolphins ${avgDolphins}, Koalas ${avgKoalas}`;
// // //     }
// // // }

// // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));
// // // // No team wins! Dolphins 46, Koalas 56'

// // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));
// // // // Dolphins win (60 vs. 28) '

// // const grades = [85, 92, 78, 96, 88]; 
// // console.log(grades);

// // const friends = ["Michael", "Steven", "Peter"];
// // console.log(friends);

// // const mixed = ["Jonas", 40, false, friends];
// // console.log(mixed);

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// // // Accessing Array Elements
// // console.log(friends[0]);
// // console.log(friends[1]);
// // console.log(friends[2]);
// // console.log(friends[4]);

// // // access the length 
// // console.log(friends.length);

// // // Changan array elements
// // friends[0] = "Jay";
// // console.log(friends);

// // const calAge = function(birthYear) {
// //     return 2025 - birthYear;
// // }

// // const ages = [calAge(2000), calAge(1940), calAge(1991)];
// // console.log(ages);

// // const newLength = friends.push("John");
// // console.log(friends);
// // console.log(newLength); 

// // friends.unshift("Mark");
// // console.log(friends);

// // // removing elements
// // // remove last item in the last
// // const popped = friends.pop();
// // console.log(popped);
// // console.log(friends);

// // // remove first item in the list
// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends);

// // // finding an element
// // console.log(friends.indexOf("Steven"));
// // console.log(friends.indexOf("Mark"));

// // // includes
// // console.log(friends.includes("Peter"));
// // console.log(friends.includes("John"));

// // // Array Interaction

// // // Traditional For Loop
// // for (let i = 0; i < friends.length; i++) {
// //     console.log(friends[i]);
// // }

// // // one way to create for each
// // friends.forEach(function (friend, index,) {
// //     console.log(`${index + 1}: ${friend}`);
// // });

// // friends.forEach((friend, index) => {
// //     console.log(`${index + 1}: ${friend}`);
// // });

// // // practical example
// // const grades2 = [85, 92, 50, 96, 50, 74];
// // let total = 0;

// // for (let i = 0; i < grades2.length; i++) {
// //     total += grades2[i]; 
// // }

// // const average = total / grades2.length;
// // console.log(`Average grade: ${average.toFixed(2)}`);

// // let passedCount = 0;
// // grades2.forEach(grade => {
// //     if (grade >= 70) passedCount++;
// // });

// // console.log(`${passedCount} out of ${grades2.length} students passed.`); 

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   // Your code here
//   // Hint: Sum all grades, divide by length
//   let sum = 0;
//   for (let i = 0; i  < grades.length; i++) {
//     sum += grades[i]; 
//   }
//     return sum / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   // Your code here
//   // Hint: Start with first grade, compare with each subsequent grade
//   let highest = grades[0];
//   for (let i = 1; i  < grades.length; i++) {
//     if (grades[i] > highest) {
//         highest = grades[i];
//     }
//   }
//     return highest; 
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   // Your code here
//   // Hint: Similar to highest, but use < comparison
//   let lowest = grades[0];
//   for (let i = 1; i  < grades.length; i++) {
//     if (grades[i] < lowest) {
//         lowest = grades[i];
//     }
//   }
//     return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   // Your code here
//   // Hint: Counter pattern - increment when condition is met
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//         count++;
//     }
//   }
//     return count;  
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`); 

////////////////////////////////////
// Hour 3

// Problems with Arrays
const ajArray = [
  "Aj",
  "Balibado",
  2025 - 2000,
  "student",
  ["Michael", "Peter", "Steven"],
];

console.log(ajArray[0]);
console.log(ajArray[1]);

const ajObject = {
    firstName: "Aj",
    lastName: "Balibado",
    age: 2025 - 2004,
    job: "student",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(ajObject);

// Propety access methods
// Do notation
console.log(ajObject.firstName);
console.log(ajObject.lastName);
console.log(ajObject.age);

// Bracket notation
console.log(ajObject["firstName"]);
console.log(ajObject["lastName"]);
console.log(ajObject["age"]);

const nameKey = "Name";
console.log(ajObject["first" + nameKey]);

// Modifying existing properties
ajObject.job = "Programmer"; 
ajObject["age"] = 21;
console.log(ajObject);

// add new properties
ajObject.location = "Philippines";
ajObject["twitter"] = "@ajprogrammer";
ajObject.hasDriversLicense = true;
console.log(ajObject); 

// When to use dot vs bracket notation
const Property = "job";
console.log(ajObject[Property]);

// "1. Property name is in a variable"
// "2. Property name has spaces or special characters"
// "3. Property name is computer/dynamic
// "Otherwise, prefer dot notation"

// Objects vs Arrays Desicion Making

// Arrays 
const listOfYear = [1991, 1984, 2008, 2020];
const shoppingList = ["apples", "bananas", "milk", "bread"];
const testScores = [85, 92, 78, 96];

// Objects
const person = {
    name: "Aj",
    age: 21,
    occupation: "student",
};
const car = {
    brand: "Toyota",
    model: "Carmy",
    year: 2020,
    color: "blue",  
};

// objects can contain arrays, arrays can contain objects
const student  = {
    name: 'Sarah',
    grades: [85, 92, 78], 
    address: {
        street: '123 Main St',
        city: 'New York',
    }
};

console.log(student.grades[0]);
console.log(student.address.city);
