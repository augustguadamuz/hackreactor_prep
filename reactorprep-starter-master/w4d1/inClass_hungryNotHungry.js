// Create a function that loops through the profiles array, 
// log each person's name if they are hungry and returns an object with 2 properties. 
// “hungry” and “notHungry”. Each property should be an array of people’s profiles sorted by whether they are hungry or not.

var profiles = [
  {
    name: "Kevin",
    age: 12,
    hungry: true,
    pets: ["cats"]
  },
  {
    name: "Alex",
    age: 19,
    hungry: false,
    pets: ["dogs", "turtle", "cat"]
  },
  {
    name: "Luisa",
    age: 99,
    hungry: true,
    pets: ["cats", "otter", "capybara", "meerkat"]
  },
  {
    name: "Albrey",
    age: 40,
    hungry: true,
    pets: []
  }
];

function hungryOrNot(profiles) {
  var obj = {
    hungry: [],
    notHungry: []
  }
  for (var i = 0; i < profiles.length; i++) {
    if (profiles[i].hungry === true) {
      console.log(profiles[i].name + ' is hungry');
      obj.hungry.push(profiles[i].name)
    } else {
      obj.notHungry.push(profiles[i].name)
    }
  }
      return obj;
}

console.log(hungryOrNot(profiles));