//Hack Reactor Application

//First, declare an array named myArray

var myArray = [];

//Now populate myArray with two strings.
//Put your full name in the first string, and your Skype handle in the second.

myArray.push('August Alexander Guadamuz')
myArray.push('august.guadamuz')
//console.log(myArray)

//Next, declare a function named cutName. It should take a string as an argument.
//cutName should return an array by breaking up the input string into individual words. 
//For example "Douglas Crockford" should be returned as ["Douglas", "Crockford"]

function cutName(string) {
	var strSplit = string.split(' ');
	return strSplit;
}

//console.log(cutName('Douglas Crockford'))

//Make a new empty object literal named myData

var myData = {};

//Add three key-value pairs to myData, by following these guidelines
//fullName : call cutName on the name string stored in myArray
//skype : refer to your Skype handle in myArray
//github : If you have a github handle, enter it as a string. If not, set this to null

myData.fullName = cutName(myArray[0]);
myData.skype = myArray[1];
myData.github = 'augustguadamuz'
console.log(myData)
