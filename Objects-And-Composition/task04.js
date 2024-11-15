// Create two functions, one that doubles a number and one that squares a number. Create
// a third function that composes these two functions to first double and then square a
// number.

const doubleNumber = (num) => {
	return num * 2;
};
const squareNumber = (num) => {
	return num ** 2;
};

const compose = (doubleNumber, squareNumber) => {
	return function (num) {
		// let doubledNum = doubleNumber(num);
		// let squaredNum = squareNumber(doubledNum);
		// return squaredNum;
        return squareNumber(doubleNumber(num))
	};
};

const doubleThenSquare = compose(doubleNumber, squareNumber);
console.log(doubleThenSquare(3)); // Output: 36
