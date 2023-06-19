// Event Listeners
console.log("Hello,World!!");
// Exercise Level One
// 1.Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.

const form = document.querySelector(".for");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const input = document.querySelector(".input").value;

  for (let i = 0; i < input; i++) {
    console.log(i);
  }
});
