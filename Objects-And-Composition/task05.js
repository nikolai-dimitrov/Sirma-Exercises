// 5. Closure for Data Privacy
// Create a function that returns an object with two methods: one to get a private variable
// and one to set it. Use a closure to maintain the private variable.

const createPrivateCounter = () => {
	let currentCount = 0;
	return {
		increment() {
			currentCount++;
		},
		getCount() {
			return currentCount;
		},
	};
};
const counter = createPrivateCounter();
console.log(counter);
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 4

