console.log("Part 2: Functions ready!");

// Function - Declaration and Expression
function logger() {
    console.log("My name is Aj");
}

logger(); 
logger(); 
logger(); 

console.log(fruitProcessor(5, 3));

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

console.log(fruitProcessor(5, 3));

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);

// console.log(calcAge(1991));
// Function Expression
const calcAge    = function (birthYear) {
    return 2025 - birthYear;
};

const age1 = calcAge(2004);
console.log(age1);

console.log(calcAge(1991));

function introduce(firstName, lastName, age) {
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
    return introduction;
} 

console.log(introduce("Aj", "Balibado", 21));
console.log(introduce("John",)); 

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.`;
    } 
}

console.log(yearsUntilRetirement(2004, "Aj"));
