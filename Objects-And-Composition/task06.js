// 6. Curry a Function
// Create a function that takes three arguments and returns their product. Curry this
// function so it can be called with one argument at a time.

const multiply = (a) => {
	return function (b) {
		return function (c) {
			return a * b * c;
		};
	};
};
console.log(multiply(2)(3)(4)); // Output: 24

// let firstInvoke = multiply(2);
// let secondInvoke = firstInvoke(3);
// let finalInvoke = secondInvoke(4);
// console.log(finalInvoke);
