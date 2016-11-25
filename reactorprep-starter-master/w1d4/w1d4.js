//your code here!

// warmup exercises

//Complete the function sumOfSquares that computes the sum of all the numbers from 0 to n, but where each number is squared.

function sumOfSquares(n) {
	if (n === 1) {
		return 1
	}
	else {
		return (n * n) + sumOfSquares(n - 1)
	}
}

console.log(sumOfSquares(5))

// Write a function called sumEvens that works like the other summation functions that you've written, but only sums the even numbers between 0 and n.




// fullName

var firstName = "August"
var middleName = "Alexander"
var lastName = "Guadamuz"

var fullName = firstName + " " + middleName + " " + lastName

fullName;

// Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
var x = 0

function counter() {
	x = x + 1
	return x
}

console.log(counter(3))

// More practice
// Question 1

function guessMyNumber(n) {
	if (n > 5) {
		return "Out of bounds! Please try a number between 0 and 5.";
	} else if (n === randInt(5)) {
	return "You guessed my number!";
	}
	return "Nope, that wasn't it!";
}

function randInt(n) {
	return Math.floor(Math.random() * (n + 1))
}

console.log(guessMyNumber(3))

// modified to add an upperBound variable

var upperBound = 5

function guessMyNumber(n) {
	if (n > upperBound) {
		return "Out of bounds! Please try a number between 0 and 5.";
	} else if (n === randInt(upperBound)) {
	return "You guessed my number!";
	}
	return "Nope, that wasn't it!";
}

function randInt(n) {
	return Math.floor(Math.random() * (n + 1))
}


console.log(guessMyNumber(3))

// Modify guessMyNumber so that if the guess is incorrect, guessMyNumber includes the correct guess in its output, e.g. "Nope! The correct number was: X" (where X would have been the correct number).

var upperBound = 5
var x = randInt(upperBound)

function guessMyNumber(n) {
	if (n > upperBound) {
		return "Out of bounds! Please try a number between 0 and 5.";
	} else if (n === x) {
	return "You guessed my number! The number " + x;
	}
	return "Nope, that wasn't it! It was " + x;
}

function randInt(n) {
	return Math.floor(Math.random() * (n + 1))
}

console.log(guessMyNumber(3))

// change the code so that the giame picks a number once and
// allows you to guess until you get the correct answer


var upperBound = 5;
var x = Math.floor(Math.random() * (upperBound + 1));

function guessMyNumber(n) {
	if (n > upperBound) {
		return "Out of bounds! Please try a number between 0 and " + upperBound + ".";
	} else if (n === x) {
	return "You guessed my number! The number " + x;
	}
	return "Nope, that wasn't it! It was " + x;
}

//function randInt(n) {
//	return Math.floor(Math.random() * (n + 1))
//}

console.log(guessMyNumber(3))
console.log(x)

// I want to prompt the user to enter for an answer

var upperBound = 5;
//var y = Number(prompt("please enter a number"))
var x = Math.floor(Math.random() * (upperBound + 1));

//console.log(upperBound)
//console.log(y)
//console.log(x)

function guessMyNumber(y) {
	if (y > upperBound) {
		return "Out of bounds! Please try a number between 0 and " + upperBound + ".";
	} else if (y === x) {
	return "You guessed my number! The number " + x;
	}
	return "Incorrect Guess! Please play again and select another number"
}

console.log(guessMyNumber(3))
console.log(upperBound)
console.log(y)
console.log(x)

//function randInt(n) {
//	return Math.floor(Math.random() * (n + 1))
//}

console.log(guessMyNumber(y))
console.log(x)



// original power function that we wrote

function power(base, exponent) {
	if (exponent === 0) {
		return 1; 
	}
	return base * power(base, exponent - 1);
}

console.log(power(2,3))


// while loop

while (x < 10) {
	x = x + 1;
}

//

function power_iter(base, exponent) {
	var result = 1;
	while (exponent > 0) {
		result = result * base;
		exponent = exponent - 1;
	}

	return result;
}

console.log(power_iter(2,3))


//Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:


function sumToN(n) {
	var i = 1;
	var total = 0;
	while (total <= n + (n-1)) {
		total = total + i;
		//console.log(total);
	}
	return total
}

console.log(sumToN(3))

//pairing

function sum(n) {
	var total = 0;
	while (n > 0) {
		total = total + n;
		n = n - 1;
	}
	return total
}

console.log(sum(3))


//Factorial function

//state the function that you are going to create
//state the input for the function 
//state the expected outcome of the function

function factorial(n) {
	var i = 1;
	while (n > 1) {
		//i = i * (i+1); REMEMBER THIS MISTAKE
		i = i * n
		n = n - 1;
	}
	return i
}

console.log(factorial(6))

// Repeating a string N times
// I am going to create the function repeatString
// There are two inputs 'string' (which is a string) and count (a number)
// The expected output is to repeat the string the number of times expressed by count

//this needs some serious work and thought
function repeatString(string, count) {
	var int = count;
	var str;
	while (int > 0) {
		str = string + string
		int = int - 1
		console.log(string)
	}
	return str
}

console.log(repeatString("aug",5))
debug(repeatString("aug",5))
