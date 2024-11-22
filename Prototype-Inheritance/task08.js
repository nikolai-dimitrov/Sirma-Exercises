// 8. Animal Inheritance
/* Create an Animal class with properties name and age, and methods eat and sleep. Extend
it with Dog and Cat classes, adding properties and methods specific to dogs and cats
(e.g., bark for Dog, meow for Cat). */

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating`;
	}
	sleep() {
		return `${this.name} is sleeping`;
	}
}

const animal = new Animal("Kitten", 20);
console.log(animal.eat());

class Dog extends Animal {
	constructor(name, age) {
		super(name, age);
	}
	bark() {
		return `${this.name} saying Bark Bark`;
	}
}
class Cat extends Animal {
	constructor(name, age) {
		super(name, age);
	}
	meow() {
		return `${this.name} saying Meow Meow`;
	}
}

const cat1 = new Cat("Garry", 10);
console.log(cat1.eat())
console.log(cat1.sleep())
console.log(cat1.meow())

