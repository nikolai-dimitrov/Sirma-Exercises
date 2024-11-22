// 5. Shapes and Area Calculation
/* Create a class hierarchy where Shape is the base class with a calculateArea method.
Create Triangle, Square, and Circle classes that inherit from Shape and implement their
own calculateArea methods. */

class Shape {
	constructor() {}
	calculateArea() {
		return "Calculating Area";
	}
}

class Triangle extends Shape {
	constructor(h, b) {
		super();
		this.h = h;
		this.b = b;
	}
	calculateArea() {
		return (this.h * this.b) / 2;
	}
}

class Circle extends Shape {
	constructor(r) {
		super();
		this.r = r;
	}
	calculateArea() {
		return (Math.PI * Math.pow(this.r, 2)).toFixed(2);
	}
}

class Square extends Shape {
	constructor(a) {
		super();
		this.a = a;
	}
	calculateArea() {
		return Math.pow(this.a, 2);
	}
}

const circle1 = new Circle(3);
console.log(circle1.calculateArea());

const square1 = new Square(4);
console.log(square1.calculateArea());

const triangle1 = new Triangle(10, 5);
console.log(triangle1.calculateArea());
