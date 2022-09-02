//Arrays

//Exercise Level 1

//1.Declare an empty array;
let arr = new Array();
console.log(arr);

let arr_1 = [];
console.log(arr_1);

//2.Declare an array with more than 5 number of elements
let myDetails = ["James", 24, false, "Myers", "Kofi", 1998, 7, 5];

//3.Find the length of your array
console.log(myDetails.length);

//4.Get the first item, the middle item and the last item of the array
let firstItem = myDetails[0];
let middleItem = myDetails[4];
let lastItem = myDetails[myDetails.length-1];

console.log(firstItem,middleItem,lastItem);

//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, true, null, "apple", "banana", false];
console.log(mixedDataTypes.length);