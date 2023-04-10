// Objects
// Exercise Level 1

// 1. Create an empty object called dog
let dog ={};
console.log(dog);

// 2.Print the the dog object on the console
console.log(dog);

// 3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog = {
    name : 'Bingo',
    legs : 'long',
    color : 'Brown',
    age : 3,
    bark : ()=>{
        return 'woof woof'
    },
}
console.log(dog);

// 4. Get name, legs, color, age and bark value from the dog object
let names = dog.name;
let legs = dog.legs;
let color = dog.color;
let age = dog.age;
let bark = dog.bark();
console.log(names,legs,color,age,bark);

// 5.Set new properties the dog object: breed, getDogInfo

dog.breed = 'German Shepherd';
const getDogInfo = () =>{
    return `${dog.name} is a ${dog.color} ${dog.breed} with ${dog.legs} legs and is ${dog.age} years old. ${dog.bark()}`;
}

console.log(getDogInfo());