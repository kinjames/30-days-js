// Event Listeners
console.log("Hello,World!!");
// Exercise Level One
// 1.Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.

const form = document.querySelector(".for");
const btn = document.querySelector(".btn");
let tileContainer = document.querySelector(".tile-container");
let errorMsg = document.querySelector(".error-message");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector(".input").value;
  if (input === "" || typeof input === "string") {
    errorMsg.textContent = "Enter number value on the input field.";
  }
  for (let i = 0; i < input; i++) {
    let tile = `<div class="number_tile">${i}</div>`;
    tileContainer.innerHTML = tile;
    console.log(tileContainer);
  }
  window.addEventListener("DOMContentLoaded", () => {});
});
