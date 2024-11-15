// 9. Fibonacci
// Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1.
// Use a closure to keep the current number.

const getFibonacci = () => {
	let previousNumber = 0;
	let currentNumber = 1;
	let nextNumber = null;

	return function () {
		nextNumber = currentNumber + previousNumber;
		previousNumber = currentNumber;
		currentNumber = nextNumber;

		return currentNumber;
	};
};

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21

// const getFibonacci = () => {
// 	let previousNumber = 0;
// 	let currentNumber = 1;
// 	let temporaryNumber = null;

// 	return function () {
// 		// if (previousNumber < 1) {
// 		// 	// previousNumber = currentNumber + previousNumber;
// 		// 	return currentNumber;
// 		// }

// 		temporaryNumber = currentNumber;
// 		currentNumber = currentNumber + previousNumber;
// 		previousNumber = temporaryNumber;

// 		return currentNumber;
// 	};
// };

// let fibonacci = getFibonacci();
// console.log(fibonacci()); // 1
// console.log(fibonacci()); // 2
// console.log(fibonacci()); // 3
// console.log(fibonacci()); // 5
// console.log(fibonacci()); // 8
// console.log(fibonacci()); // 13
// console.log(fibonacci()); // 21
