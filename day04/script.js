// Conditionals

//Exercise Level 1

//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userInput = Number(prompt('Enter your age:'));

result = userInput >= 18 ? "You are old enough to drive" : `You are left with ${18 - userInput} years to drive.`;
console.log(result);

//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 24;
let userAge = Number(prompt("How old are you?"));

if (myAge > userAge){
    console.log(`I am ${myAge - userAge} years older than you.`);
} else if (myAge === userAge){
    console.log("We are of the same age.")
} else {
    console.log(`You are ${userAge - myAge} years older than me.`)
}

//3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//i.using if else.
let a = 4, b = 6;

if ( a > b){
    console.log("a is greater than b")
} else {
    console.log("a is less than b")
};

//ii. ternary operator.
let num = a > b ? "a is greater than b" : "a is less than b";
console.log(num);

//4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let ranNum = Math.floor(Math.random() * 11);

if (ranNum % 2 == 0){
    console.log(`${ranNum} is an even number`);
} else {
    console.log(`${ranNum} is an odd number`);
}


//Exercise Level 2

//Exercise Level 3