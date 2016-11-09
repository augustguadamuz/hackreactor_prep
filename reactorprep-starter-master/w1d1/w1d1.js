//your code here!
console.log("My name is August.");

function convertHeight(feet, inches){
	var result = (feet * 12 + inches) * 254;

	return result
};

console.log(convertHeight(5,11));

function square(num){
	return num * num;
}

console.log(square(10) + 2);
console.log(square(100) + square(77));
console.log(square(8 / 2));
console.log(square(2 + 17));
console.log(square(square(15)));


//Write a sentence in plain English describing how square(square(15)) is evaluated.
// first square the number 15; 15 * 15 = 225
// then square the result from the first square; 225 * 225


//Rename the parameter to square in your main.js file to monkey, and rename the uses of that parameter in the body to monkey as well. Will the function square still work? Why or why not?

function square(monkey){
	return monkey * monkey;
}

console.log(square(10) + 2);
console.log(square(100) + square(77));
console.log(square(8 / 2));
console.log(square(2 + 17));
console.log(square(square(15)));


// What is wrong with these definitions of square?

//function square(monkey) {
//  return x * x;
//}
// We have not defined X

//console.log(monkey(10))

// It does not matter what number is entered in as the argument the result will be 25
//function square(5) {
//  return 5 * 5;
//}


// The parameter X is a string and not a number
//function square("x") {
//  return "x" * "x";
//}


// Fix the invalid syntax in the following functions (you can copy and paste these invalid definitions into main.js and then edit them there):
function square(x) {
  return x * x;
}

console.log(square(5))

function square(x){
  return x * x;
}

console.log(square(5))

function square(x) {
 	return x * x;
}
console.log(square(5))

//Complete the function cube that returns the cube of x:
function cube(x){
	return x * x * x
}

console.log(cube(5))

// Complete the function fullName that should take two parameters, firstName and lastName, and returns the firstName and lastName concatenated together with a space in between.

// don't forget the parameters!
function fullName(firstName, lastName) {
 // your code here
 	return firstName + " " + lastName;
}
fullName("John", "Doe") // => "John Doe"

console.log(fullName("John", "Doe"))

//Write a function average that takes two numbers as input (parameters), and returns the average of those numbers.

function average(num1, num2){
	return (num1 + num2)/arguments.length;
}

console.log(average(3,9))

//Write a function greeter that takes a name as an argument and greets that name by returning something along the lines of "Hello, <name>!"
function greeter(name){
	return ("Hello," + " " + name + "!")
}

console.log(greeter("August"))

// geometric functions translated into javascript functions

//Using the document found at this link, translate the first page of geometric formulas into JavaScript functions.
//As an example, a function to compute the perimeter of a rectangle might look like this:

function perimeterRect(l, w) {
  return 2 * (l + w);
}

console.log(perimeterRect(10, 20))

// Area of a square
function areaSquare(side){
	return Math.pow(side, 2)
}

console.log(areaSquare(10))

// Perimeter of a square
function perimeterSquare(side){
	return 4 * side
}

console.log(perimeterSquare(10))

// Area of a parallelogram (A=lh)
function areaParallelogram(l, h){
	return l * h
}

console.log(areaParallelogram(10,20))

// Perimeter of a parallelogram (P=2l * 2w)
function perimeterParallelogram(l,w){
	return (2*l) + (2*w)
}

console.log(perimeterParallelogram(10,20))

// Need to finish up the geometric functions but they are pretty simple

// Some built in math functions
Math.PI; // => 3.141592653589793
Math.sqrt(256); // => 16

// Use compound interest formula to determine future value
// P = Present Value
// i = nominal interest rate
// n = compunding frequency
// t = time 


function futureValue(P,i,n,t){
	var exponent = n * t;
	var paren = (1 + i/n);
	var base = P * paren;
	return Math.pow(base,exponent)
}

console.log(futureValue(1700,.047,4,6))


function futureValue(P,i,n,t){
	var exponent = (n * t)
	var paren = (1 + i/n)
	var exp1 = Math.pow(paren,exponent)
	var fv = P * exp1
	//return exponent
	return fv
}

console.log(futureValue(1700,0.047,4,6))

//answer should be ~2250.12

