//your code here!

// Warmups

// The following function is supposed to compute the sum of the numbers from 0 to n,
// but is currently broken (in multiple ways) -- fix it so that it works correctly.

//function sum(n) {
//  var result;
//  while (n > 0) {
//    result = n + n;
//    n = n + 1;
//  }
//}

function sum(n) {
	var result = 0;
	while(n > 0) {
		result = result + n;
		n = n - 1;
		console.log(result)
	}
	return result
}

console.log(sum(5))

//5+4+3+2+1 === 15

// Warmups => #2

function power_iter(base, exponent) {
  var result = 1;
  while (exponent > 0) {
    result = result * base;
    exponent = exponent - 1;
  }
  return result;
}

//make the function count up instead of doesn

function power_iter(base, exponent) {
	var result = 1;
	var i = 0;
	while (i < exponent) {
		result = result * base;
		i = i + 1
	}
	return result
}

console.log(power_iter(2,3))

//The power_iter function counts down from exponent, 
//iterating as long as exponent is greater than 0. 
//Change the implementation so that power_iter counts up from 0 to exponent.

//function power_iter(base, exponent) {
//  var result = 1;
//  while (exponent > 0) {
//    result = result * base;
//    exponent = exponent - 1;
//  }
//  return result;
//}

// 1. You need a variable to keep track of your running total
// 2. At the end ofthe function you need to return that total
// 3. Use the while loop to visit each element of the array
// 4. Arrays have numberical indexes, so we need a counting variable to visit each array
// 5. We must include some action that will move the interpreter toward our condition
// 6. Now we add the code that adds the value from our array to our total

//Change the implementation so that power_iter counts up from 0 to exponent.

function power_iter(base, exponent) {
  var result = 1;
  while (exponent > 0) {
    result = result * base;
    exponent = exponent - 1;
  }
  return result;
}

// counting up instead of counting down

function power_iter(base, exponent) {
	var result = 1;
	var e = 0;
	while (e < exponent) {
		result = result * base;
		e = e + 1;
	}
	return result
}

console.log(power_iter(2,2)) // => 4


//in class exercises

var puppy = {
	name: 'Gatsby',
	age: 1,
	breed: 'Corgi'
}

for (var key in puppy){
	console.log("this is the key:", key)
	console.log("this is the value:", puppy[key])
}

// Basic Requirements

//Create an object that represents you. It should contain your first name, last name, age and hometown.

var user = {
	firstName: "August",
	lastName: "Guadamuz",
	age: 43,
	hometown: "San Francisco"
};

//Add three more key/value pairs to your object that represent other attributes of yourself

user.occupation = "Analyst";
console.log(user)
user.pets = 0;
console.log(user)
user.dateOfBirth = "1970-12-08";
console.log(user)

delete user.firstName;
delete user.lastName
console.log(user)

user.name = {
	first: "August",
	middle: "Alexander",
	last: "Guadamuz"
}


user.favoriteColor = 'blue'
//Look up your favorite movie on IMDB,
// and make an object that represents some aspects of that movie, e.g.:

var MyFavoriteMovie = {
	title: "Battlefield Earth",
	director: "Roger Christian",
	yearReleased: "2000",
	rating: "PG-13",
	actors: ["John Travolta", "Barry Pepper", "Forest Whitaker", "Kim Coates", "Sabine Karsenti"]
}

console.log(MyFavoriteMovie)

user.favoriteColor = 'blue'

function fullName(user) {
	return user.name.first + " " + user.name.middle + " " + user.name.last
}

console.log(fullName(user))


var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

console.log(people)

people.push(user)
console.log(people)
