// 2. Person and Student
/* Create a Person class with name and age properties, and a Student class that extends
Person and adds a school property. */
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Student extends Person {
	constructor(name, age, school) {
		super(name, age);
		this.school = school;
	}
}

const student = new Student("Nikolay", 13, "PMG");

console.log(student)