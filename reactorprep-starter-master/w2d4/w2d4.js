//your code here!

// Warmups

//Write a function called squareNumericValues that takes 
//an object as a parameter and returns an object with all 
//of the numeric values in the object squared

//psuedo-code
//write a function named squareumericValues
//input will be an object
//function will identify numeric keys in the object
//function will square numeric keys that it finds
//output will be all of the object keys with the numeric values squared

function squareNumericValues(object1) {
	var squared = [];
	for (var x in object1) {
		if (typeof object1[x] === 'number') {
			squared.push(Math.pow(object1[x], 2));
		}
		else squared.push(object1[x]);
	}
	return squared;
}

//squareNumericValues({a: 4, b: 7, c: 2}) // => {a: 16, b: 49, c: 4}
squareNumericValues({name: "Phuong", age: 25}); // => {name: "Phuong", age: 625}
