//Write a function called generateFizzBuzz that returns an object with all the numbers from 1 to 100 as keys and values, with 
//two exceptions. For numbers divisible by 3, the value should be "Fizz" instead of the number, and for numbers divisible by 
//5 (and not 3), the value should be "Buzz" instead. Example:
// {0:0,1:1,2:2,3:’Fizz’,4:4,5:’Buzz’...}


// just getting the logic down in this script
// I can console log the output to QA the results
// function generateFizzBuzz() {
// 	for (var i=1; i <= 100; i++)
// 	{
//     if (i % 3 == 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// 	}
// }

// console.log(generateFizzBuzz());


function generateFizzBuzz() {
	var obj = {};
	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0) {
			obj[i] = "Fizz";
		} else if (i % 5 == 0) {
			obj[i] = "Buzz";
		} else {
			obj[i] = i;
		}
	}
	return obj;
}

console.log(generateFizzBuzz());


// When you have that working, modify your function to show "FizzBuzz", 
// for numbers that are divisible by both 3 and 5 
// (and still show "Fizz" or "Buzz"for numbers divisible by only one of those). 


function generateFizzBuzz() {
	var obj = {};
	for (var i = 1; i <= 100; i++) {
		if (i % 15 === 0) {
			obj[i] = "FizzBuzz"
		}
		else if (i % 3 == 0) {
			obj[i] = "Fizz";
		} else if (i % 5 == 0) {
			obj[i] = "Buzz";
		} else {
			obj[i] = i;
		}
	}
	return obj;
}

console.log(generateFizzBuzz());
