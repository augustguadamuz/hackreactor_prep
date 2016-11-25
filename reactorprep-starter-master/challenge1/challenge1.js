//your code here!

// Challenge Exercise 1

function billTotal(subtotal) {
	return subtotal + (subtotal * 0.15) + (subtotal * 0.095)
}

console.log(billTotal(10))

// Challenge Exercise 2

function animalNoise(animal, emotion) {
	if (animal === "Cat" && emotion === "happy") {
		return "Prrrrrrrrrrrrr";
	}
	else if (animal === "Cat" && emotion === "angry") {
		return "Rawr ^|^";
	}
	else if (animal === "Dog" && emotion === "happy") {
		return "Bow wow wow yippie yo yippie yay!"
	}
	else if (animal === "Dog" && emotion === "angry") {
		return "Grrrrrrrrrrrrrr"
	}
	return "You need to put in a valid animal and emotion"
}

//console.log(animalNoise("Cat", "happy"))
//console.log(animalNoise("Cat", "angry"))
//console.log(animalNoise("Dog", "happy"))
console.log(animalNoise("Dog", "angry"))

// Challenge Exercise 3

function digitalSum(n) {
	if (n === 0) {
		return 0;
	}
	return (n % 10) + digitalSum(Math.floor(n / 10))
}

console.log(digitalSum(1337))

// The digitalSum of 8 returns 8. I am assuming that the script returns a 0 after the single digit is processed.
