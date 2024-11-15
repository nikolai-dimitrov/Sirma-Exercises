// 7. Partial Application with Closures
// Create a function that takes four arguments and returns their sum. Create a partially
// applied version of this function that always adds 5 to the sum of three other numbers.

const sumFourNumbers = (a, b, c, d) => {
	return a + b + c + d;
};
const partialSum = (constantNumber) => {
	return function (a, b, c) {
		return sumFourNumbers(a, b, c, constantNumber);
		// Test
		// const partiallyAppliedFunc = sumFourNumbers.bind(null, a, b, c, constantNumber)
		// return partiallyAppliedFunc()
	};
};
const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11

const addTwenty = partialSum(20);
console.log(addTwenty(1, 2, 3)); // Output: 26
