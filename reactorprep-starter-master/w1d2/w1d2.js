//your code here!

function glasses(yes, no){
	return yes/(yes + no)
}

console.log(glasses(25,75))


// fix the code

//function cube x {
//return x * x * y;

function cube(x){
	return x * x * x
}

console.log(cube(3))

// lhs

function lhs(a,b) {
	return Math.pow((a+b),2)
}

console.log(lhs(1,2))

// rhs

function rhs(a,b) {
	return Math.pow(a,2) + (2 * a * b) + Math.pow(b,2)
}

console.log(lhs(1,2))

console.log(12 < 24)

console.log(24 === 16)
// => false

console.log(45 !== 3)
// => true

console.log("45" === 45)
// => false

console.log("6" !== "six")
// => true

// Write a function oldEnoughToDrink that takes an age as an argument and returns true if the person with that age is old enough to drink.

function oldEnoughToDrink(age){
	if (age >= 21){
		return true;
}
	return false;
}


console.log(oldEnoughToDrink(12))

//Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.

function sameLength(a,b){
	if (a.length === b.length){
		return true;
}
	return false;
}

console.log(sameLength("Aug", "Aug"))

//Write a function passwordLongEnough that accepts a "password" as a parameter and returns true if that password is long enough -- you get to decide what constitutes long enough.

function passwordLongEnough(x){
	if (x.length >= 20){
		return true;
}
	return false;
}

console.log(passwordLongEnough("Augkjsdfkjdhlkfajhsrlkugaluf"))

// Write a function bouncer that accepts a person's name and age as arguments, and returns either "Go home, NAME.", or "Welcome, NAME!" (where NAME is the parameter that represents the person's name) depending on whether or not the person is old enough to drink.

function bouncer(name, age){
	if (age > 21){
		return "Welcome" + ' ' + name
	}
	return "Go Home" + ' ' + name
}

console.log(bouncer("Aug", 19))

// Write a function max that takes two numbers as arguments, and returns the larger one.

function max(x,y){
	if (x > y){
		return x;
	}
	return y
}

console.log(max(12,45))


function min(x,y){
	if (x < y){
		return x
	}
	return y
}

console.log(min(-2,5))

// Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively.

function smaller(x,y){
	if (x.length < y.length){
		return x
	}
	return y
}

console.log(smaller('a','ab'))


//Write the following functions that each accept a single number as an argument:
//even: returns true if its argument is even, and false otherwise.
//odd: the opposite of the above.
//positive: returns true if its argument is positive, and false otherwise.
//negative: the opposite of the above.

//even function
function even(x){
	if (x % 2 === 0){
		return true
	}
	return false
}

console.log(even(3))

// odd function

function odd(x){
	if (x % 2 != 0){
		return true
	}
	return false
}

console.log(odd(2))

// positive function

function positive(number){
	if (number > 0){
		return true
	}
	return false
}

console.log(positive(-3))

// negative

function negative(number){
	if (number < 0){
		return true
	}
	return false
}

console.log(negative(-3))

// random integer generator
//randInt: Should accept a single numeric argument (n), and return a number from 0 to n.

function randInt(min, max){
	return Math.round(Math.random() * (max - min) + min)
}

console.log(randInt(0,30))

// setting the min to 0 and only one parameter representing the max
function randInt(number){
	return Math.round(Math.random() * (number))
}

console.log(randInt(30))


function foodDemand(food) {
    return "I want to eat" + " " + food

};

console.log(foodDemand("tacos"))



//Array.split
//Array.join

// Guess my number

function guessMyNumber(number){
	if (number === Math.ramdom())
}

