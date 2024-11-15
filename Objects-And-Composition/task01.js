// 1. Using bind to Set this
// Create an object with a method that logs a message using this.name. Create a second
// object and use bind to set the method's this context to the second object. Log the result.

// Starter code
const obj1 = {
	name: "Alice",
	greet: function () {
		console.log(`Hello, my name is ${this.name}`);
	},
};

const obj2 = {
	name: "Bob",
};

const greetFunction = obj1.greet;
const greetSecondObject = greetFunction.bind(obj2);
greetSecondObject();
