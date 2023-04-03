// Functions
// Exercise Level 1

// 1. Declare a function fullName and it print out your full name.

function fullName(){
    return 'James Kofi Myers';
}
let myName = fullName();
console.log(myName);

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
let fullNames = (firstName,lastName)=>{
    return `${firstName} ${lastName}`;
}
let myNames = fullName('James','Myers');
console.log(myNames);