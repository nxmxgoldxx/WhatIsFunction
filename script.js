// Funtion with no praramters
var startMyDay = function () {
	return "Time for coffee and a shower!";
};
console.log(startMyDay());

// Function with one parameter
var favoriteCookie = function (cookie) {
	return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie("chocolate chip"));

// Function with two parameters

var introduce = function (name, occupation) {
	return `Hello, how's it going ? Our name is ${name} and we are a ${occupation}. Happy to make your aquaintance!#`;
};
console.log(introduce("Calente", "Visual Designer and Web Developer"));
console.log(introduce("Nome", "Visual Designer and Web Developer"));

// Create a Function to Capture Input

var hydrationFeedback = function () {
	var numGlasses = Number(
		prompt("How many glasses of water did you have today?")
	);
	if (numGlasses >= 8) {
		console.log("Congratulations on drinking enough water!");
	} else if (numGlasses < 8) {
		console.log("Not enough water, but youre getting there!");
	}
};

hydrationFeedback();
