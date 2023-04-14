// HIGHER ORDER FUNCTION
// EXERCISE LEVEL ONE
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Explain the difference between forEach, map, filter, and reduce.
// forEach, map, filter, and reduce are all array methods in JavaScript that allow you to transform and manipulate arrays

// forEach: The forEach method allows you to loop through each element in an array and perform a specified action on each element. It doesn't return anything and is often used when you want to perform an action on each element, such as logging it to the console or updating a UI.
const num = [1, 2, 3, 4, 5];
num.forEach(num => {
    console.log(num);
})
// Output: 1 2 3 4 5

// map: The map method creates a new array by applying a specified function to each element in the original array. It returns a new array with the same number of elements as the original array, but with each element transformed by the specified function.
const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.map(num=> num *2);
console.log(doubleNums);

// filter: The filter method creates a new array containing only the elements from the original array that satisfy a specified condition. It returns a new array with only the elements that pass the condition.
const numb = [1, 2, 3, 4, 5];
const evenNums = numb.filter(numb => numb % 2=== 0);
console.log(evenNums);
// Output: [2, 4]

// reduce: The reduce method applies a specified function to each element in the array to reduce the array to a single value. It takes an accumulator argument and a current value argument, and returns a single value that is the result of applying the specified function to each element.
const numbs = [1, 2, 3, 4, 5];
const sum = numbs.reduce((a,b) => {
    return a + b
},0);
console.log(sum);
// Output: 15

// 2. Define a callback function before you use it in forEach, map, filter or reduce.




