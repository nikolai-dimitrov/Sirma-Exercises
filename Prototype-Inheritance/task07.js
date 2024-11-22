// 7. Employee Hierarchy
/* Create a base class Employee with properties name and salary. Extend it with classes
Manager and Engineer. Add methods to calculate bonuses based on different criteria for
managers and engineers. */

class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
}

class Manager extends Employee {
	constructor(name, salary) {
		super(name, salary);
		this.bonus = 0;
	}

	calculateBonus(workingHours) {
		const bonusPercent = workingHours < 200 ? 0 : 20;
		this.bonus = (this.salary * bonusPercent) / 100;
		return this.bonus;
	}
}

class Engineer extends Employee {
	constructor(name, salary) {
		super(name, salary);
		this.bonus = 0;
	}
	calculateBonus(developedProducts) {
		const bonusPercent = developedProducts < 1 ? 0 : 20;
		this.bonus = (this.salary * bonusPercent) / 100;
		return this.bonus;
	}
}

const engineer = new Engineer("Ivan", 2000);
console.log(engineer.calculateBonus(1));
