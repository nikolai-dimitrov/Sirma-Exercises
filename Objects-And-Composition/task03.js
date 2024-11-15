// 3. Using bind for Partial Application.
// Create a function that multiplies two numbers. Use bind to create a new function that
// always multiplies by a specific number.
function multiply(a, b) {
	return a * b;
}

const multiplyByFive = multiply.bind(null, 5);
console.log(multiplyByFive(3)); // Output: 15
