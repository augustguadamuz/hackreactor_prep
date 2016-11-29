//your code here!
// Arrays

var myFavoriteShows = ["Ash vs Evil Dead", "UFC", "Below Deck"];
var peopleICareAbout = ["Justine", "Jackie", "Aaron", "Masako"];
var favorieActivities = ["Jiu Jitsu", "P90X", "Eating", "Drinking"];

//Access First elements
//Access Last elements
//Access Other elements!

console.log(myFavoriteShows[0])
console.log(peopleICareAbout[peopleICareAbout.length - 1])
console.log(favorieActivities[3])


// Creating a function named first
// This function will take in two parameters, an array and a number representing the array element to return
// This function will return the array element represented by the number in the input
function first(array, number) {
	if (array === null) {
		return "void"
	}
	else if (array != null) {
		return array[number]
	}
}

console.log(first (myFavoriteShows, 0))

//last

function last(array) {
	if (array === null) {
		return "void"
	}
	else if (array != null) {
		return array[array.length - 1]
	}
}

console.log(last(myFavoriteShows))

// Modifying arrays

//Using the console, push and unshift, make this array contain the numbers from zero through seven:

//var arr = [2, 3, 4];
// your code here
//arr; // => [0, 1, 2, 3, 4, 5, 6, 7]

var arr = [2 ,3 ,4]

arr.unshift(0,1)

arr.push(5,6,7)

arr

//We can use the assignment operator (=) to replace elements in arrays with other ones 
// 1. Change all odd numbers to be those numbers multiplied by two:
var numbers = [4, 9, 7, 2, 1, 8];
// TODO: your code here
numbers; // => [4, 18, 14, 2, 2, 8]

numbers[1] = 18
numbers
numbers[2] = 14
numbers
numbers[4] = 2
numbers

// 2. Fix the typos by replacing each element with a correctly spelled version
var places = ['snfranisco', 'oacklannd', 'santacrus']
// TODO: your code here
places; // => ['san francisco', 'oakland', 'santa cruz']

places[0] = 'san francisco';
places[1] = 'oakland';
places[2] = 'santa cruz'

places

// array iteration from slides

function sum(nums) { // function takes in one parameter; an array of numbers
	var total = 0; // setting a variable to keep track of our running total
	var i = 0; // arrays have numerical indexes, so we need a a numberical counting variable in order to access each element
	while (i < nums.length) { // the while loop helps us visit every element of the array
		//we will continue looping as long as i is smaller than the length of the array
		total = total + nums[i]
		i = i + 1; // we have to include an action that moves the interpreter toward our condition; we increase i by 1 with every loop
	}
	return total;
}

sum([2,5,8,12]);

// refactoring using a 'for' loop

function sum(nums) { 
	var total = 0; 
	for (var i = 0; i < nums.length; i = i + 1) { 
		//the first statement declares our counting variable
		//the second statement specifies the condition in which we should repeat
		//the third statement moves us closer the the condition
		total = total + nums[i]
	}
	return total;
}

sum([2,5,8,12]);

//Basic Requirements

//Try to write all of the exercises using both the for loop and while loop.

//Write a function sum that computes the sum of the numbers in an array.

// I am going to create a function sum
// The input for the function will be an array of numbers
// The output of the function is the sum of the numbers in the array

// while loop

function sum(nums) {
	// We'll need a variable to keep track of our running total
	var total = 0;
	// We'll need a counting variable to ensure we access each variable
	var i = 0
	// We'll need a while loop to ensure we visit each element ofthe array
	while (i < nums.length) {
		i = i + 1;
		total = total + nums[i]
	} 
	return total;
}

// Write a function max that accepts an array of numbers and returns the largest number in the array.
function max(array) {
  var i = 0;
  var high = 0;
  while (i < array.length) {
   if (array[i] > high) {
  	high = array[i]
   }
 	i = i + 1
  }
  return high
}

console.log(max([19, 3, 17, 25, 4]))

function max(array) {
  var high = 0;
  for (var i = 0; i < array.length; i =i+1) {
   if (array[i] > high) {
  	high = array[i]
   }
  }
  return high
}

console.log(max([19, 3, 17, 25, 4]))

//Use split to write a function longestWord 
//that takes a string as an argument and returns the longest word.

function longestword(whatever){
  var strSplit = whatever.split(' ');
  var longest = 0;
  for (var i = 0; i<whatever.length; i = i + 1);
  if (strSplit[i]>longest){
   longest = strSplit.length
  }
  return longest
  
}

console.log(longestword("This is rad"))

//
function longestword(whatever){
  var strSplit = whatever.split(' ');
  var longest = 0;
  for (var i = 0; i < strSplit.length; i = i + 1) {
  	if (strSplit[i].length > longest) {
  		longest = strSplit[i].length
	}
  }
  return longest
}

var x = "The quick brown fox jumped over the lazy dog"

console.log(longestword(x))

//

function longestWord(string) {
	// creating a variable that will contain the individual words (in an array) from the string
	var strSplit = string.split(' ');
	// creating a variable that will contain the length of the longest word in the array
	var longest = 0;
	// creating a variable that will contain the array index of the longest word in the array
	var word = 0;
	// creating a 'for' loop
	// counter variable i; keep looping while i is less than the string length; increase i by 1 with every loop 
	for (var i = 0; i < strSplit.length; i = i + 1) {
		// if the length of the array index we are looking at in the current loop
		// is larger than the number currently in the variable 'longest'
		// then set the variable 'longest' to the number of the new length
		// and set the variable 'word' to the index of that word in the array
		if (strSplit[i].length > longest) {
			longest = strSplit[i].length;
			word = strSplit[i];
		}
	}
	//return the contents of the array index 
	//with the index number in the variable 'word'
	return word;
}

var string = "The quick brown fox jumped over the lazy dog"
console.log(longestWord(string))

// 4. Write a function remove that accepts an array and an element, 
// and returns an array with all ocurrences of element removed.

function remove(array, element) {
	for (var i = 0; i < array.length; i = i + 1) {
		if (array[i] === element) {
			array.splice(i, 1);
			//console.log(array)
		}
	}
return array;
}

var x = [1, 3, 6, 2, 3]
console.log(remove(x, 3))

// 5. Write a function evens that accepts an array as an argument,
// and returns an array consisting of all of the even numbers in that array.

function even(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			array.splice(i, 1);
		}
	}
	return array;
}

var x = [1,2,3,4,5,6,7,8,9]
console.log(even(x))



