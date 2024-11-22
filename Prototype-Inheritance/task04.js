// 4. Class Hierarchy
/* Write a function that returns three classes: Figure, Circle, and Rectangle. Figure has a
 units property (default &quot;cm&quot;), a getter area, and methods changeUnits and toString.
 Circle and Rectangle extend Figure and override area and toString appropriately. */
function createFigureClasses() {
	class Figure {
		constructor(units = "cm", name = "Figure") {
			this.units = units;
			this.name = name;
		}
		area() {
			return `getting area of ${this.name}`;
		}

		changeUnits() {
			return "change units";
		}

		toString() {
			return this;
		}
	}

	class Rectangle extends Figure {
		constructor(units) {
			super(units, "Rectangle");
		}

		area() {
            return super.area()
			// return `getting area of ${this.name}`;
		}

		toString() {
			return super.toString();
		}
	}

	class Circle extends Figure {
		constructor(units) {
			super(units, "Circle");
		}

		area() {
			// return `getting area of ${this.name}`;
            return super.area()
		}

		toString() {
			return super.toString();
		}
	}

	return { Figure, Rectangle, Circle };
}
const { Figure, Rectangle, Circle } = createFigureClasses();

const figure1 = new Figure();
console.log(figure1.area())
console.log(figure1.name);
console.log(figure1.toString());

const rectangle = new Rectangle();
console.log(rectangle.area());
console.log(rectangle.name);

console.log(rectangle.toString());
