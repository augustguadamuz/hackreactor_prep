//your code here!

var i = 0
numbers = [10, 20, 30, 40, 50]

i++
//is different from 
++i
//as the number will increment differently

var fruits = ['banana', 'kiwi', 'mango', 'jackfruit'];

for (i = 0; i < fruits.length; i++) {
	console.log(fruits[i])
}

var fruits = ['banana', 'kiwi', 'mango', 'jackfruit'];

for (i = 0; i < fruits.length; i++) {
//	return fruits[i] // reutrns can only be used in a function call
}

// W2D3 Warmups

//Create a variable called numbers and assign an array of numbers to it.
numbers = [2, 4, 6, 8, 10]

//Write a function squareAll 
//that takes an array of numbers as a parameter 
//and returns a new array of the input numbers squared.

//This is how you write pseudo-code:
//function SquareAll
//input is an array
//create new array
	//iterate through array
	//square each value
	//put new value into a new array
//output is an array; output new array

var numbers = [2, 4, 6, 8, 10];
var power = 2;

function squareAll(array) {
	var squared = []
	for (i = 0; i < array.length; i++) {
		squared.push(Math.pow(array[i], power));
	}
	return squared;
}

//if you wanted to not use the push function
//squared[i] = Math.pow(array[i], power)

console.log(squareAll(numbers))

// lecture

function makePlayer(name, number, position, battingAvg) {
	return {
		name: name,
		number: number,
		position: position,
		battingAvg, battingAvg
	};
}

var player1 = makePlayer("August", 01, "shortstop", .500)
var player2 = makePlayer("Luisa", 02, "first base", .350)
var player3 = makePlayer("Kevin", 03, "second base", .250)

function displayPlayer(player) {
	return player.number + ' ' + player.sposition + ' ' + player.name;
}

function updateBattingAvg(player, newAvg) {
	player.battingAvg = newAvg;
}

var team = [player1, player2, player3];

function displayRoster(team) {
	var display = "";
	for (var i = 0; i < team.length; i++) {
		display = display + i + ". " + displayPlayer(team[i]) + "\n";
	}
	return display;
}

console.log(displayRoster(team))

function findBestHitter(team) {
	var best = team[0];
	for (var i = 1; i < team.length; i++) {
		if (team[i].battingAvg > best.battingAvg) {
			best = team[i];
		}
	}
	return best;
}

console.log(findBestHitter(team))

// Basic requirements

//Represent the following books as data

//Write a function makeBook
//input is the properties of the book (title, authoe, etc.)
//ouput is an object representing the book
//This is creating a factory function

function makeBook(title, author, secondAuthor, msrp, genre, numberOfPages, description) {
	return {
		title: title,
		author: author,
		secondAuthor: secondAuthor,
		msrp: msrp,
		genre: genre,
		numberOfPages: numberOfPages,
		description: description
	};
}

var book1 = makeBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 45.95, "children", 500, "a damn fine book")

console.log(book1)

var book1 = makeBook("Snow Crash", "Neal Stephenson",'', 50.00, "fiction", 500, "blah, blah")
var book2 = makeBook("Structure and Interpretation of Computer Programs", "Gerald Jay Sussman", "Hal Abelson", 39.15, "computer", 900, "do you even compute?")
var book3 = makeBook("The Hunger Games", "Suzanne Collins", "", 19.95, "fiction", 700, "part of a series")
var book4 = makeBook("To Kill a Mockingbird", "Harper Lee", "", 20.01, "fiction", 500, "a classic")
var book5 = makeBook("Twilight", "Stephenie Meyer", "", 39.25, "fiction", 500, "vampires and warewolves")

console.log(book5)


//Write a function named displayBook
//input is a book
//output is a nice display of the important properties of the book

function displayBook(book) {
	return book.title + " " + "--" + " price: " + book.msrp + " " + "-- " + book.genre;
}

console.log(displayBook(book4))

// Write a function named searchBooks
// inputs are a query and an array of books
// searches the array for matching books

//A good starting point would be to write a function isMatch that accepts two arguments 
//the query and a single book – and returns true if the book is a match, and false otherwise

//Write a function named isMatch
//input is a book title
//function checks to see if there is a matching title
//function outputs true if there is a match and false if there is not a match

//creating an array of the books created earlier
var books = [book1, book2, book3, book4, book5]
console.log(books)

function isMatch(book) {
	var match = [];
	for (var i = 0; i < book.length; i++) {
		if book[1].title.toLowerCase() === book.toLowerCase()
	}
	return
}

//change the authors to an array; pass in an array in the function
//make the genre an array as well




