// 1. Person
/* Write a program that takes firstName and lastName as parameters and returns an object
 with firstName, lastName, and fullName properties. If firstName or lastName changes,
fullName should also change. If fullName changes to a valid format, firstName and
lastName should change accordingly. */

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	Object.defineProperty(this, "fullName", {
		get: function () {
			return `${this.firstName} ${this.lastName}`;
		},
		set: function (value) {
			const splittedName = value.split(" ");
			const [firstNamePart, lastNamePart] = splittedName;
			if (splittedName.length == 2) {
				this.firstName = firstNamePart;
				this.lastName = lastNamePart;
			}
		},
	});
}

const person1 = new Person("Ivan", "Ivanov");

console.log(person1);
console.log(person1.fullName);

person1.firstName = "Stefan";
console.log(person1.fullName);
console.log(person1.firstName);

person1.fullName = "Milen Petrov";
console.log(person1.fullName);
console.log(person1.firstName);
