// 8. Function Chaining
// Create an object with methods that manipulate a string (e.g., toUpperCase, toLowerCase).
// Ensure the methods return this so the methods can be chained together.
const stringManipulator = {
	setValue(string) {
		this.value = string;
		return this;
	},

	print() {
		console.log(this.value);
		return this;
	},

	toLowerCase() {
		this.value = this.value.toLowerCase();
		return this;
	},

	toUpperCase() {
		this.value = this.value.toUpperCase();
		return this;
	},
};

// stringManipulator.setValue("Ivancho").print();
// console.log(stringManipulator);
stringManipulator.setValue("Hello").toUpperCase().print().toLowerCase().print();
// HELLO
// hello
