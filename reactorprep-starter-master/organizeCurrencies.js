// Write a function called organizeCurrencies
// input is an array of British coins, pound and pence coins
// output is two objects, one containing the pence pieces
// and the other object containing the pound pieces

//var currencyArray = ['1p','2p','5p', '5p','10p','20p','50p','£1', '20p','50p','£1','£2']

//console.log(currencyArray[3].length - 1);
//console.log(currencyArray[3]);
//console.log(currencyArray[3].charAt(currencyArray[3].length - 1)); //if the last character is 'p' I know it is pence and if not I know it is pound

// function organizeCurrencies(currencyArray) {
// 	for (var i = 0; i < currencyArray.length; i++) {
// 		var pence = {};
// 		var pound = {};
// 		if (currencyArray[i].charAt(currencyArray[i].length-1) === 'p') {
// 			pence[currencyArray[i]] = pence[currencyArray[i]] + 1
// 		}
// 		return pence;
// 		//return pound;
// 	}
// }

// console.log(organizeCurrencies(currencyArray));

// var currencyArray = ['1p','2p','5p', '5p','10p','20p','50p','£1', '20p','50p','£1','£2']

// function organizeCurrencies(currencyArray) {
// 	var pence = {};
// 	var pound = {};
// 	for (var i = 0; i < currencyArray.length; i++) {
// 		var currentCurrency = currencyArray[i];
// 		var isPound = (currentCurrency.indexOf('p') === -1) ? true : false;

// 		if (isPound === false) {
// 			pence[currentCurrency] = (pence[currentCurrency] === undefined) ? 
// 				1 : pence[currentCurrency] += 1;
// 		} else {
// 			pound[currentCurrency] = (pound[currentCurrency] === undefined) ? 1 : pound[currentCurrency] += 1;

// 		}
// 	}
// 	return [pence, pound]
// }

// console.log(organizeCurrencies(currencyArray));


// create a function named organizeCurrencies
// input is an array of strings representing currency denominations
// output will be two objects, one containing the denominations and a count of how many times it appeared in the string
// create two object variables, one for pence and one for pound
// for each element in the currency array we will need to check if it is a pound or pence
// this check will be performed by using indexOf function
// if the index of the letter 'p' is -1 we know the currency is pound
// discovered a handy functionality; the Conditional Operator (which may make things easier for this exercise)


// var currencyArray = ['1p','2p','5p', '5p','10p','20p','50p','£1', '20p','50p','£1','£2']

// function organizeCurrencies(currencyArray) {
// 	var pence = []; 
// 	var pound = [];
// 	// will create a variable that to check each element in the array to see if it is pence or pound
// 	// as I loop through the currencyArray
// 	for (var i = 0; i < currencyArray.length; i++) {
// 		var currency = currencyArray[i]; // created a variable to use to check each element in the array to see if it is a pence or pound
// 		var isPound = (currency.indexOf('p') === -1) ? true : false; // if the index of the letter 'p' is -1 then true else false (there are a lot of ways we could have done this)
// 		if (isPound === false) { // if it is pence and not pound
// 			pence[currency] = (pence[currency] === undefined) ? 1 : pence[currency] += 1; // check to see if that denomination exists yet, if not create it and make it 1, if it exists add 1
// 		} else {
// 			pound[currency] = (pence[currency] === undefined) ? 1 : pound[currency] += 1; 
// 		}
// 	}
// 	return [pence,pound]
// }

// console.log(organizeCurrencies(currencyArray));



var currencyArray = ['1p','2p','5p', '5p','10p','20p','50p','£1', '20p','50p','£1','£2']

function organizeCurrencies(currencyArray) {
	var pence = {}; 
	var pound = {};
	// will create a variable that to check each element in the array to see if it is pence or pound
	// as I loop through the currencyArray
	for (var i = 0; i < currencyArray.length; i++) {
		var currency = currencyArray[i]; // created a variable to use to check each element in the array to see if it is a pence or pound
		var isPound = (currency.indexOf('p') === -1) ? true : false; // if the index of the letter 'p' is -1 then true else false (there are a lot of ways we could have done this)
		if (isPound === false) { 
			if (pence[currency] === undefined) {
				pence[currency] = 1
			} else {
				pence[currency] += 1}
		} else {
			if (pound[currency] === undefined) {
				pound[currency] = 1
			} else {
				pound[currency] += 1
			} 
		}
	}
	return [pence,pound]
}

console.log(organizeCurrencies(currencyArray));
