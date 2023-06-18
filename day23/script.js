// Event Listeners
console.log("Hello,World!!");
// Exercise Level One
// 1.Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.

let userInput = document.querySelector(".input");
let btn = document.querySelector(".btn");

let input = userInput.value;

let form = document.querySelector(".for");

btn.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < input; i++) {
    console.log(i);
  }
});

console.log(userInput);
