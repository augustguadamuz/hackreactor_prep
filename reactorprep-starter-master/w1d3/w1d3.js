//your code here!
//Fix the syntax and/or style issues with the following functions:

function isHot(temperature){
	if (temperature > 90){
		return "It's Hot"
	}

	return "It's not hot!"
}

console.log(isHot(88))

// old enough to function

function oldEnoughTo(age){
	if (age > 21){
		return "All the things"
	}
	else if (age >= 21) {
		return "Drink"
	}
	else if (age >= 17) {
		return "Vote"
	}
	else if (age >= 16) {
		return "Drive"
	}
	return "You're too young to do anything"
	}

console.log(oldEnoughTo(20))

function sayHello(language){
	if (language === 'Spanish') {
		return "Hola"
	}
	else if (language === 'Chinese') {
		return "Nehow"
	}
	else if (language === 'French') {
		return "Bon Jour"
	}
}

console.log(sayHello("Chinese"))

function validCredentials(user, password) {
	if (user.length >= 5 && password.length >= 5) {
		return true
	}
	return false
}

console.log(validCredentials("Aug","Aug"))


function power(base, exponent) {
	if (exponent === 0){
		return 1;
	}
	return base * power(base, exponent - 1);
}

console.log(power(2, 4))

//Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, 

function sum(n) {
	return (n * (n + 1)) / 2
}

console.log(sum(5))


function sum(n) {
	if (n === 0) {
		return 0;
	}
	return n + sum(n-1)
}

console.log(sum(5))

// Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1

function factorial(n) {
	if (n === 1) {
		return 1;
	}
	return n * factorial(n-1)
}

console.log(factorial(9))

// repeat string n times

function repeatString(string, count) {
	if (count === 0) {
		return "";
	}
	else {
		return string + repeatString(string, count - 1)
	}
}
console.log(repeatString("Aug", 3))

// fibonacci sequence

function fib(n) {
	if (n <= 2) {
		return 1;
	}
	else {
		return fib(n - 1) + fib(n - 2);
	}
}

console.log(fib(11))

// Modify your sum function from the Basic Requirements section to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end, 

function sum(n) {
	if (n === 0) {
		return 0;
	}
	return n + sum(n-1)
}

console.log(sum(5))

// modifying the sum function for the exercise

function sum(start, end) {
	if (end === start) {
		return end;
	}
	return start + sum(start + 1, end)
}

console.log(sum(2,7))


