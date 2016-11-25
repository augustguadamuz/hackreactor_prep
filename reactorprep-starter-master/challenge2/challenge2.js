//your code here!

//Using your knowledge of JavaScript data types 
//(i.e. numbers, strings, booleans, arrays and objects), 
//represent our solar system as data (hint: the link is to a Wikipedia article – you should use it). You can include as many attributes as you like, but the following are required:

// 1
//Age of the Solar System
//Distance from the center of the galaxy
//Number of known comets
//The Planets
// // Name
// // Size (in Earth-masses)
// // Distance of each from sun
// // Number of known satellites (orbiting bodies, e.g moons)


//created a function to create planet objects for an array within the milkyWay object
function makePlanet (name, size, distanceFromSun, satellites) {
	return {
		name: name,
		size: size,
		distanceFromSun: distanceFromSun,
		satellites: satellites
	};
}

var mercury = makePlanet("Mercury", 0.055, 0.4, 0);
var venus = makePlanet("Venus", 0.815, 0.7, 0);
var earth = makePlanet("Earth", 1, 1, 1);
var mars = makePlanet("Mars", 0.017, 1.5, 2);
var jupiter = makePlanet("Jupiter", 2.5, 5.2, 67)

var milkyWay = {
	age: 4.568,
	distance: 2700,
	knownComets: 3406,
	planets: [mercury, venus, earth, mars, jupiter]
}

console.log(milkyWay);

//2
//Complete the below function called range that takes two integers as parameters, 
//start and end, and returns an array containing all the whole numbers between them 
//starting with start and up to end 
//(you can use a for loop, while loop, each, or repetition with function invocation). 

function range(start, end) {
	var numbers = [];
	for (var i = 0; start < end; i++) {
		numbers.push(start++);
		//console.log(start)
	}
  return numbers;
}

console.log(range(0, 4)); // => [0, 1, 2, 3]
range(2,7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

//3
//Given the following array of people, 
//write a function that, when passed people as a parameter, 
//returns the person (that is, your function should return an object) with the longest name (first, middle & last)

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

//console.log(people[0])

function fullName(people) {
	var names = [];
	for (var i = 0; i < people.length; i++){
		names.push(people[i].name.first+people[i].name.middle+people[i].name.last);
	}
	return names;
};


console.log(fullName(people))
var a = (fullName(people))
console.log(a)

//get the lengths of the names in the variable

function getNameLength(variable) {
	var lengths = [];
	for (var i = 0; i < variable.length; i++) {
		lengths.push(variable[i].length)
	}
	return lengths;
}

var b = getNameLength(a)
console.log(b)

function getLongestName(variable) {
	var longest = 0;
	for (var i = 0; i < variable.length; i++) {
		if (variable[i] > longest) {
			longest = i
		};
	}
	return longest;
}

var c = (getLongestName(b))

var longestName = {
	first: people[c].name.first,
	middle: people[c].name.middle,
	last: people[c].name.last
}

console.log(longestName)







