// Destructuring and Spreading
import { countriess } from "./countries_data.js";
// Exercise Level 1
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// 2.Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// 3.Destructure the rectangle object by its properties or keys.
// keys
// const { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);

// properties
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

// Exercise Level 2

// 1.Iterate through the users array and get all the keys of the object using destructuring
for (const user of users) {
  const { name, scores, skills, age } = user;
  console.log(name, scores, skills, age);
}

// 2.Find the persons who have less than two skills.
const lessThanTwoSkills = [];
for (const person of users) {
  const { name, scores, skills, age } = person;
  if (skills.length < 2) {
    lessThanTwoSkills.push(person);
  }
}
console.log(lessThanTwoSkills);

// Exercise Level 3
// 1. Destructure the countries object print name, capital, population and languages of all countries
for (const country of countriess) {
  let { name, capital, population, languages } = country;
  if (languages.length == "") {
    languages = "unkown";
  } else if (languages.length > 1) {
    languages.slice(0, -1).join(", ");
  }
  const countryDetails = `name: ${name} \ncapital: ${capital} \npopulation: ${population} \nlanguages: ${languages}`;
  console.log(countryDetails);
}

// 2.A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const studentOne = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name, skills, scores] = studentOne;
let [htmlScore, cssScore, jsScore, reactScore] = scores;
console.log(name, skills, jsScore, reactScore);

// 3.Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]], //name,skills,scores
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

// 4.Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
