//your code here!

//Write a function wordLengths which accepts a string as a parameter
//and returns an array of the lengths of each word in the string.

var someString = 'The quick brown fox jumps over the lazy dog.';

function wordLengths(someString) {
	var strSplit = someString.split(' '); // use split function to create an array made up of the individual words in the string
	var lengths = []; // create an array to store the lengths of the words in strSplit
	for (var i = 0; i < strSplit.length; i++) { //loop through the strSplit array and push the word lengths to the lengths array
		lengths.push(strSplit[i].length);
	}
	return lengths; //return the array with the lengths of each word in the string
}

console.log(wordLengths(someString)); // display the output in the browser

//Write a function called wordsLongerThanThree that, 
//given a string as an input, returns an array of words in the original string 
//that are longer than three (have length greater than three)

var someString = 'The quick brown fox jumps over the lazy dog.';

function wordsLongerThanThree(someString) {
	var strSplit = someString.split(' ');
	var wordArray = [];
	for (var i = 0; i < strSplit.length; i++) {
		if (strSplit[i].length > 3) { //if the length of the word is greated than 3, push the word to wordArray array
			wordArray.push(strSplit[i]);
		}
	}
	return wordArray;
}

console.log(wordsLongerThanThree(someString));

//Write a function called concat 
//that takes two arrays as parameters 
//and returns an array with all of the elements of the second one added to the first one.

var array1 = [1,2,3];
var array2 = [4,5,6];

function concat(array1, array2) {
	var added = [];
	for (var i = 0; i < array1.length; i++) {
		added.push(array1[i] + array2[i])
	}
	return added;
}

console.log(concat(array1,array2));
