// Write a function called generateZeroToTwenty that returns an array of integers from 0 to 20, inclusive.

// write a function named generateZeroToTwenty
// the functon does not require input parameters
// the output is an array of integers from 0 to 20

function generateZeroToTwenty() {
	var integers = [];
	for (var i = 0; i < 20; i++) {
		integers.push(i);
	}
	return integers;
}

console.log(generateZeroToTwenty());

// Write a function called generateTwentyToZero that returns an array of integers from 20 to 0 in descending order.

function generateTwentytoZero() {
	var integers = [];
	for (var i = 20; i >= 0; i--) {
		integers.push(i);
	}
	return integers;
}

console.log(generateTwentytoZero());

//Write a function called generateEvenNumbers that will return an array of even numbers between 0 and 20, inclusive.

// Write a function named generateEvenNumbers
// Doesn't necessarily need inputs but I will put in two parameters (integers), low and high
// Output is an array of even numbers between low and high, in this case between 0 and 20

function generateEvenNumbers(low, high) {
	var evens = [];
	for (var i = low; i <= high; i++) {
		if (i % 2 === 0) {
			evens.push(i)
		};
	}
	return evens
}

console.log(generateEvenNumbers(0,20))

// write a function named multiplyByNine
// input is an array of numbers
// output is an array of the input numbers, each multiplied by 9

var array = [1,2,3,4,5]

function multiplyByNine(array) {
	var multiplied = [];
	for (var i = 0; i < array.length; i++) {
		multiplied.push(array[i] * 9)
	}
	return multiplied;
}

console.log(multiplyByNine(array));

// Write a function that adds 2 given arrays of numbers, of the same length.
// Example: sumArrays([1,2,3], [4,5,6]) ⇒ [5,7,9]

var array1 = [1,2,3];
var array2 = [4,5,6];

function sumArrays(array1, array2) {
	var array3 = [];
	for (var i = 0; i < array1.length; i++) {
		array3.push(array1[i] + array2[i])
	}
	return array3;
}

console.log(sumArrays(array1, array2));

// Write a function that finds the maximum value in a given array. Do not use Math.max
// Write a function named max
// input is an array of integers
// output is the largest integer in the array
// will loop through the array and check each integer to see if it is the largest

var array = [1,3,5,8,20,99,10001,6]

function max(array) {
	var largest = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] > largest) {
			largest = array[i]
		}
	}
	return largest;
}

console.log(max(array))

// Write a function that averages a given array of numbers.

var array = [1,2,3,4,5]

function arrayAvg(array) {
	var sum = 0;
	for (var i = 0, i < array.length, i++) {
		sum = sum + array[i];
	}
	return sum/array.length;
}

console.log(arrayAvg(array));

//spend time online with slideshare and youtube, facebook video, and vimeo analytics
//look at the user flows -- menu navigation to content , then viewing content (track surfing flows)
//retention by segment
//onboarding funnel
//payer funnel
//subscriptions
//CRM (12-18 months)

// Warmup 7

// wirte a function named alternation
// input is an array of numbers (integers)
// function should add and subtract the numbers in an array in alternation
// So an array [1,2,3,4,5] should be 1+2-3+4-5= - 1


function alternation(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		if (i === 0) {
			sum = sum + array[i]
		} else if (i === 1) {
			sum = sum + array[i]
		} else if (i % 2 !== 0) {
			sum = sum + array[i]
		} else if (i % 2 === 0) {
			sum = sum - array[i]
		}	
		console.log(i);
		console.log(sum);
	}
	return sum
}
console.log(alternation([1,2,3,4,5]));

// Warm up 9
// Write a function that returns a horizontal line of asterisks of a specified length.
// Don't just write this out to the log -- actually return the string.

// Write a function named line
// function has one input, an integer
// output is a horizontal line of asterisks the with a character length of the input number

function line(number) {
	var astLine = '';
	var asterisk = '*'
	for (var i = 0; i < number; i++) {
		var astLine = astLine.concat(asterisk);
	}
	return astLine;
}

console.log(line(3))

/*Write a function called drawTriangle that returns the following string. Feel free to debug-print using console.log, but make sure that the function actually returns a string. 

Note that in a string, the character for a carriage return (the equivalent of hitting the “Enter” or “Return” key) is “\n”.

#
##
###
####
#####
######
#######*/





function triangle(number) {
	var rightTriangle = '';
	var pound = '#'
	for (var i = 0; i < number; i++) {
		var rightTriangle = rightTriangle.concat(pound);
		console.log(rightTriangle)
	}
	return rightTriangle;
}

console.log(triangle(6))


//
function triangle(number) {
	var triElements = [];
	var pound = '#';
	var rightTriangle = '';
	var lineBreak = '\n';
	for (var i = 0; i < number; i++) {
		var rightTriangle = rightTriangle.concat(pound)
		triElements.push(rightTriangle);
	}
	return triElements.join("\n");
}

console.log(triangle(7))


function triangle(numOfLayers) {
    var result = '';
    var symbol = '#';
    var layer = '';
    var lineBreak = '\n';
    for (var i = 0; i < numOfLayers; i++) {
        layer += symbol; // add one symbol to last layer
        //console.log(layer)
        result += layer + lineBreak; // append an extra line to the result
        //console.log(result)
    }
    return result;
}

console.log(triangle(6))

/*Create a function called getFirstAnimals that returns an array of all the first animals in the object. 
Example: [‘bears’,’penguins’,panther’,’flea’]

Also create a function called getLastAnimals that returns an array of all the last animals in the object. 
Example: [‘otters’,’chickens’...etc]*/

// Write a function named getFirstAnimals
// input is an array with several properties containing arrays of strings
// output is the first array element from each property in the object


//first animals
var animals = { 
mammals:['bears','lions','whales','otters'], 
birds:['penguins','ducks','swans','chickens'], 
cats:['panther','mountain lion','leopard','snow tiger'], 
insects: ['flea','mosquito','beetle','fly','grasshopper']
}

function getFirstAnimals(animalsObject) {
	var firstAnimals = [];
	for (key in animalsObject) {
		firstAnimals.push(animalsObject[key][0])
	}
	return firstAnimals;
}

console.log(getFirstAnimals(animals));

// last animals

var animals = { 
mammals:['bears','lions','whales','otters'], 
birds:['penguins','ducks','swans','chickens'], 
cats:['panther','mountain lion','leopard','snow tiger'], 
insects: ['flea','mosquito','beetle','fly','grasshopper']
}

function getLastAnimals(animalsObject) {
	var lastAnimals = [];
	for (key in animalsObject) {
		lastAnimals.push(animalsObject[key][animalsObject[key].length - 1])
	}
	return lastAnimals;
}

console.log(getLastAnimals(animals));

