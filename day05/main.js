import {
    countries
} from './countries.js';

import {
    webTechs
} from './web_techs.js';



// Exercise Level 2

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries,webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
/* 
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
*/
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let removePunctuations = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
text = text.replace(removePunctuations);
let myArray = text.split(' ');
console.log(myArray, myArray.length);

// 3. In the following shopping cart add, remove, edit items
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added.
if (shoppingCart.includes('Meat')){
    console.log(shoppingCart);
} else {
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);
};

// add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.includes('Sugar')){
    console.log(shoppingCart);
} else {
    shoppingCart.push('Sugar');
    console.log(shoppingCart);
};

// remove 'Honey' if you are allergic to honey
let allergicToHoney = false;

if(allergicToHoney){
    let indexOfHoney  = shoppingCart.indexOf('Honey');
    shoppingCart.splice(indexOfHoney,1);
};
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);




