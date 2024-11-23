// 18. School System
/* Create a class hierarchy for a school system:
Person: properties name and age.
Subclass Student: additional properties grade and school, method study().
Subclass Teacher: additional properties subject and salary, method teach(). */

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Student extends Person {
	constructor(name, age, grade, school) {
		super(name, age);
		this.grade = grade;
		this.school = school;
	}

	study() {
		console.log(
			`${this.name} is at ${this.school} and his grade is ${this.grade}.Studying.... `
		);
	}
}

class Teacher extends Person {
	constructor(name, age, subject, salary) {
		super(name, age);
		this.subject = subject;
		this.salary = salary;
	}

	teach() {
		console.log(`${this.name} is ${this.subject} teacher. Teaching... `);
	}
}

const teacher = new Teacher("Marry", 27, "Math", 1700);
teacher.teach();
